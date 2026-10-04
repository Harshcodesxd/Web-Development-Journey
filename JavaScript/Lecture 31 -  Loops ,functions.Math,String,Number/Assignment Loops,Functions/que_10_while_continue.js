// Question 10: Print numbers from 1 to 10, skip 5 using continue

let i = 1;

while (i <= 10) {
    if (i === 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
