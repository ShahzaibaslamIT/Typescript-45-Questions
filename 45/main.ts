interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...args: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    
    args.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}


const myCar = createCar("Toyota", "Camry", ["color","blue"], ["year", "2022"]);
console.log(myCar);
