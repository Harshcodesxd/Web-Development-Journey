// Question 18

function showSkills(name, ...skills) {
    console.log(`Name:${name}`);
    console.log(`Skills:${skills.join(",")}`);
}

showSkills("harsh","html","CSS","java","nextjs")