const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0).map(n => ({ value: n}));
//const items = filtered.map(n => '<li>' +  n + '</li>')
//const html = '<ul>' + items.join('') + '</ul>';

//can map to object
//curly brackets represent a code block
const items = filtered.map(n => ({ value: n}));

//displace items const
console.log(items);