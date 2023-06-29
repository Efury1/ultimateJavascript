let address = createAddress('a', 'b', 'c');

console.log(address);

//Factory Function
function createAddress(street, city, zipCode) {
    return {
        street, 
        city, 
        zipCode
    };
}

// Constructor Function
function Address(street, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode;
}
