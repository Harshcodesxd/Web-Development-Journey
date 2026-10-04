// Question 15: Function that returns the greater of two numbers

function greater(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

let answer = greater(6, 14);
console.log(`${answer} is Greatest`);
