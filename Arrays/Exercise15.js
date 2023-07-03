const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
//const items = filtered.map(n => '<li>' +  n + '</li>')
//const html = '<ul>' + items.join('') + '</ul>';

//can map to object
//curly brackets represent a code block
//const items = filtered.map(n => ({ value: n}));

//displace items const
console.log(items);