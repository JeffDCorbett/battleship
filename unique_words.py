from collections import Counter


def unique_words(a_list, b_list):
    c_list = Counter(a_list + b_list)
    unique_list = []
    for i, x in c_list.items():
        if x == 1:
            unique_list.append(i)
    return unique_list


a = input("Sentence A: ")
b = input("Sentence B: ")

unique = unique_words(a.split(), b.split())

print(unique)
