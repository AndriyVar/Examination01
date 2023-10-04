'use strict'

class ArrayOperations {
    constructor(arr1, arr2, arr3, arr4) {
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.arr3 = arr3;
        this.arr4 = arr4;
    }
  
    // об'єднання всіх масивів в один та сортування елементів за спаданням
    sort() {
        const arr5 = this.arr1.concat(this.arr2, this.arr3, this.arr4);
        return arr5.sort((a, b) => b - a);
    }

    
    uniq() {
        const combinedArray = [].concat(this.arr1, this.arr2, this.arr3, this.arr4);
    
        const countMap = new Map();
    
        for (const item of combinedArray) {
            if (countMap.has(item)) {
                countMap.set(item, countMap.get(item) + 1);
            } else {
                countMap.set(item, 1);
            }
        }
    
        const uniqueArray = [];
    
        for (const [item, count] of countMap) {
            if (count === 1) {
                uniqueArray.push(item);
            }
        }   
    
        return uniqueArray;
    }

    // спільні значення для чотирьох масивів
    common() {
        let arr5 = [];

        for(let i = 0; i < this.arr1.length; i++) {
            for(let c = 0; c < this.arr2.length; c++) {
                for(let v = 0; v < this.arr3.length; v++) {
                    for(let j = 0; j < this.arr4.length; j++) {
                        if(this.arr1[i] === this.arr2[c] && this.arr1[i] === this.arr3[v] && this.arr1[i] === this.arr4[j]) {
                            arr5.push(this.arr1[i]);
                        }
                    }
                }
            }
        }

        return arr5;
    }

    // прості числа
    primeNumbers() {
        const arr = this.arr1.concat(this.arr2, this.arr3, this.arr4);
        const unique = arr.filter((elem) => this.isPrime(elem));
        const arr5 = Array.from(new Set(unique));
        return arr5;
    }
  
    isPrime(num) {
        if(num <= 1) {
            return false;
        }

        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
        }

        return true;
    }
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const arr3 = [5, 7, 8, 9, 10, 4];
const arr4 = [5, 10, 11, 12, 4];
  
const op = new ArrayOperations(arr1, arr2, arr3, arr4);

console.log(op.sort());
console.log(op.common());
console.log(op.primeNumbers());
console.log(op.uniq());
