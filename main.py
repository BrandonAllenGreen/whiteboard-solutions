'''///////////// JavaScript Whiteboard Problems & Solutions /////////////'''


''' Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz”
instead of the number and for the multiples of five print “buzz”. For numbers which are multiples
of both three and five print “fizzbuzz”. '''

for num in range(1, 101):
    if num % 3 == 0 and num % 5 == 0:
        print('FizzBuzz')
    elif num % 3 == 0:
        print('Fizz')
    elif num % 5 == 0:
        print('Buzz')
    else:
        print(num)


''' Create a function that takes a list of strings. Return all words in the list that are exactly four letters.
Ex: ['Ryan', 'Kieran', 'Jason', 'Matt'] ➞ ['Ryan', 'Matt'] '''


def isFourLetters(lst):
    return [word for word in lst if len(word) == 4]


''' Create a function to multiply all values in an array by the amount of items contained in that array.
Ex: [2, 3, 1, 0] ➞ [8, 12, 4, 0] '''


def MultiplyByLength(arr):
    return[num*len(arr) for num in arr]


''' Create a function that takes a list of numbers and returns the minimum value, maximum value, sequence length, and average value.
Ex: [6, 9, 15, -2, 92, 11] ➞ [-2, 92, 6, 21.833333333333332] '''


def minMaxLengthAverage(arr):
    arrMin = min(arr)
    arrMax = max(arr)
    arrLen = len(arr)
    arrAvg = sum(arr)/arrLen
    return [arrMin, arrMax, arrLen, arrAvg]
