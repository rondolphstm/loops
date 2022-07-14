// for (key in object) {
//  statement;
// }

const obj = {
    name: 'ronnie',
    age: 21,
    inClass: true,
};

for (const key in obj) {
    console.log(key);
}
for (const key in obj) {
    console.log(obj[key]);
}