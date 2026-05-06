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

console.log(getProperty(user2, "age"));
