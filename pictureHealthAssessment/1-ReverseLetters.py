'''
Problem #1  Inverting letters in words in a string
Please create a simple program in Python which takes a string as input, and outputs a string
which has inverted the order of letters in each word. Feel free to use Python libraries.
For example, if the input is “this is a test string”, the output would be “siht si a tset gnirts”.
'''
#Time Complexity: O(N)
#Space Complexity: O(m) m is no of Words

def stringReverse(strToRevers):

    resultString = ""

    #Splitting the letters in words based on space
    words = strToRevers.split()

    #For Loop for the Reverse of letters in Word of a String
    for word in words:
        resultString = resultString + " " + word[::-1]
    return resultString

print(stringReverse("abc dae fgh ijk lmno"))