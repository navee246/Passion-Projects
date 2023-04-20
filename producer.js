const {Kafka, Partitioners} = require("kafkajs")
const msg = process.argv[2];
run()
async function run() {

    try {

        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers":["Naveens-MacBook-Air.local:9092"]
        })

        const producer = kafka.producer()
        console.log("Connecting to the Broker.......")
        await producer.connect()
        console.log("Connected!");
        // const partition = msg[0] < "N" ? 0 : 1;
        const partition = 0
        const result = await producer.send({
            "topic":"Users",
            "messages":[{
                "value": msg,
                "partition": partition
            }]
        })
        console.log(`Sent Sucessfully ${JSON.stringify(result)}`)
        await producer.disconnect();
    }

    catch (ex)
    {
        console.log(`Something happened  ${ex}`)

    }
    finally {
        process.exit(0)
    }

}