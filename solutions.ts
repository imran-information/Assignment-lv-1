// Problem 1:

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
};




// Problem 2:

const reverseString = (strings: string): string => {
    return strings.split('').reverse().join('');
};




// Problem 3:

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): StringOrNumber => {
    return typeof value === "string" ? "String" : "Number";
}



// Problem 4:

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};




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



// Problem 7:


const getIntersection = (num1: number[], num2: number[]): number[] => {
    const presentInBothArrays = num1.filter(num => num2.includes(num));
    return presentInBothArrays;
}
 