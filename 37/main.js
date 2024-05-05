function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Printing message \"".concat(message, "\" on a ").concat(size, " shirt."));
}
make_shirt();
make_shirt("medium");
make_shirt("Extra Large", "I love this shirt");
