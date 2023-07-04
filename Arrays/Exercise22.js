const numbers = [1, 2, 3, 4];

const max = getMax([]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    array.reduce((accumulator, current) => {
        if(array.length === 0) return undefined;

        array.reduce((a, b) => (a > b) ? a : b);

    });
}