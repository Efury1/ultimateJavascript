//street 
// city
// zipCode
//ShowAddress(address)

//Object literal synax 
const address =  {
    street: 'Drury Lane',
    city: 'Far Far Away',
    zipCode: 4444,
};

//Take objects 
function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

//Pass address object
showAddress(address);