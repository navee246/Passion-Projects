const {Kafka} = require("kafkajs")

run()
async function run() {

    try {

        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers":["Naveens-MacBook-Air.local:9092"]
        })

        const admin = kafka.admin()
        console.log("Connecting .......")
        await admin.connect()
        console.log("Connected!");

        admin.createTopics({
            "topics":[{
                "topic": "Users",
                "numPartitions":2
            }]
        })

        console.log("Created Sucessfully")
        await admin.disconnect();
    }

    catch (ex)
    {
        console.log(`Something happened  ${ex}`)

    }
    finally {
        process.exit(0)
    }

}