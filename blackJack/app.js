let arr = ["Q", "7", "A", "3"];
// for (let i = 1; i < arr.length; i++) {
//  if (arr.indexOf("A")) {
//   arr.splice(i, 1)
//   console.log(arr);
//  }
// }

if (arr.indexOf('A') !== -1) {
 arr.splice(arr.indexOf('A'), 1)
 console.log(arr);
}