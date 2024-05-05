var person_age = 1;
if (person_age < 2) {
    console.log("the person is a baby.");
}
else if (person_age > -2 && person_age < 4) {
    console.log("the person is a toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("the person is a kid.");
}
else if (person_age >= 13 && person_age < 20) {
    console.log(" the person is a teenager.");
}
else if (person_age <= 20 && person_age < 65) {
    console.log("the person is an adult.");
}
else {
    console.log(" person is an elder.");
}
