// Problem 1:

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
};

// const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result); 



// Problem 2:

const reverseString = (strings: string): string => {
    return strings.split('').reverse().join('');
};

// const result = reverseString('hello')
// console.log(result)



// Problem 3:

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): StringOrNumber => {
    return typeof value === "string" ? "String" : "Number";
}

// console.log(checkType("hello"));
// console.log(checkType(42)); 


// Problem 4:

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

const user1 = { id: 1, name: "imran", age: 21 };
const user2 = { id: 2, name: "jobaer", age: 22 };

// console.log(getProperty(user2, "age"));


// Problem 5:

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

interface BookWithReadStatus extends Book {
    isRead: boolean;
}

const toggleReadStatus = (myBook: Book): BookWithReadStatus => {
    return { ...myBook, isRead: true };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

// const result = toggleReadStatus(myBook)
// console.log(result)



// Problem 6:

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student1 = new Student("Imran", 20, "A+");

// console.log(student1.getDetails());


// Problem 7:




const getIntersection = (num1: number[], num2: number[]): number[] => {
    const presentInBothArrays = num1.filter(num => num2.includes(num));
    return presentInBothArrays;
}

const result = getIntersection([5, 4, 3, 2, 1], [1, 3, 8, 6, 5]);

console.log(result)