'''///////////// Python Whiteboard Problems & Solutions /////////////'''


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


''' Write a function that takes a string and determines whether it's a palindrome or not. 
Ex:  "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!" ➞ True '''


def is_palindrome(txt):
    check = [s.lower() for s in txt if s.isalpha()]
    return check[::-1] == check


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


''' Create a function that accepts a string as an argument. Find its shortest word(s) and return them as a list sorted alphabetically (if there are multiple shortest words). 
Ex: "The quick brown fox jumped over the lazy dogs back." ➞ ['fox', 'the', 'the'] '''


def findShortestWords(txt):
    all_len = set()
    for i in txt[:-1].split():
        all_len.add(len(i))
    return sorted([i.lower() for i in txt[:-1].split() if len(i) == min(all_len) and i.isalpha()])


''' You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.  Write a function that takes a list of integers and returns a list of the products.
Ex: [1, 7, 3, 4] ➞ [84, 12, 28, 21] '''


def get_products(lst):
    prod_list = []

    for i in lst:
        prod = 1
        mylst = [x for x in lst if x != i]
        for j in mylst:
            prod *= j
        prod_list.append(prod)

    return prod_list
