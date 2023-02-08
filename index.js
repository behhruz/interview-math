// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr1 = arr
//   .filter((v, i) => i % 2 == 0)
//   .splice(1, 4)
//   .reduce((v, i) => v + i);
// console.log(arr1);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];

// let res = arr1.filter((v) => v == 3);
// let res1 = arr2.filter((v) => v == 4);
// let res2 = [+res, +res1];
// console.log(res2);

// let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 67];

// let res = (arr) => {
//   return arr.filter((v, i) => arr.indexOf(v) === i);
// };
// console.log(res(arr));


let user = { name: "John" };

let admin = user;
console.log(admin);
