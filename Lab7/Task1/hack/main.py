#1
if __name__ == '__main__':
    print("Hello, World!")

#2
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a+b)
    print(a-b)
    print(a*b)
    
#3
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a//b)
    print(a/b)

#4
if __name__ == '__main__':
    n = int(input())
    for i in range(0,n):
        print(i**2)
        
#5
def is_leap(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    return False

year = int(input())
print(is_leap(year))

#6
if __name__ == '__main__':
    n = int(input())
    for i in range(1,n+1):
        print(i, end="") 

#7
if __name__ == '__main__':
    n = int(input()) 
    arr = list(map(int, input().split()))  
    unique_scores = sorted(set(arr), reverse=True)
    print(unique_scores[1])

#8
def average(array):
    unique_heights = set(array) 
    return round(sum(unique_heights) / len(unique_heights), 3)  

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)

#9
if __name__ == '__main__':
    n = int(input()) 
    country_2 = set()  
    for _ in range(n):
        country = input().strip()  
        country_2.add(country)  

    print(len(country_2))  
    
#10
import calendar
month, day, year = map(int, input().split()) 
day_of_week = calendar.weekday(year, month, day) 
days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
print(days[day_of_week])