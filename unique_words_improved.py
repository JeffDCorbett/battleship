from collections import Counter


def unique_words(a_list, b_list):
    unique_list = [i for (i, x) in Counter(a_list + b_list).items() if x == 1]
    return unique_list


a = "the pancake taste sweet"
b = "the pancake taste salty"

unique = unique_words(a.split(), b.split())

print(unique)