let address1 = newAddress('a', 'b', 'c');
let address2 = newAddress('a', 'b', 'c');;

console.log(areEqual(address1, address2));
//Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === add2.street &&
    address1.city === address2.City && 
    address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    //strict equality
    return address1 === address2;
}