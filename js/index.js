'use strict'

// indexOf

// const arr = [4,5,7,6,8];
//
//
// function  indexOf(arr,item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             return i;
//         }
//     }
//
//     return -1;
// }
//
// console.log(indexOf(arr, 8));


// lastIndexOf

// const arr = [4,5,7,6,8];
//
//
// function  indexOf(arr,item) {
//     for (let i = arr.length; i > -1; i--) {
//         if (arr[i] === item) {
//             return i;
//         }
//     }
//
//     return -1;
// }
//
// console.log(indexOf(arr, 5));

// find

// const arr = [1,2,3,4,5];
//
// const find = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 5) {
//             return arr[i];
//             break
//         }
//     }
//     return undefined;
// }
//
// console.log(find(arr));

//findIndex

// const arr = [ 1, 2, 3, 4, 5];
//
// const  findIndex = ( arr , item , index) => {
//     for ( let i = 0; i < arr.length; i++) {
//         if ( item (arr[i] , i , index)) {
//             return i;
//         }
//     }
//     return -1 ;
// }
//
// console.log(findIndex (arr, (value) => {
//             return value === 5;
//         }
//     )
// )

//includes

// const arr = [1,2,3,4,5];
//
// const includes = (arr, el, Index = 0) => {
//     for (let i = Index; i < arr.length; i++) {
//         if (arr[i] === el) {
//             return true
//         }
//     }
//     return false
// }
// console.log(includes(arr,2))

// every

// const arr = [3,54,12,20,50];
//
// let item = true;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 3) {
//         item = false
//         break
//     }
// }
// console.log(item);

// some

// const arr = [1,2,3,4,5];
//
// let item = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//         item = true
//         break
//     }
// }
// console.log(item);