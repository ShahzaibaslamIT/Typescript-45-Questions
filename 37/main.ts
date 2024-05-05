function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Printing message "${message}" on a ${size} shirt.`);
}
make_shirt();
make_shirt("medium");
make_shirt("Extra Large", "I love this shirt");
