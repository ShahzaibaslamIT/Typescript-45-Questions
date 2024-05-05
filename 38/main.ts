function describe_city(city: string, country: string =" "): void {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("Turkey", "Istanbul");
describe_city("Florida","America");

