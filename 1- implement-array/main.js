"use strict";
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     let last_item = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return last_item;
//   }

//   delete(index) {
//     let item = this.data[index];
//     this.shiftItem(index);
//     return item;
//   }

//   shiftItem(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// let newArr = new MyArray();
// newArr.push(5);
// newArr.push(4);
// newArr.push(3);
// newArr.push(2);
// newArr.push(1);
// console.log(newArr);
// newArr.delete(2);
// console.log(newArr);

//===============

//reverse string
// function reverse(str) {
//   let temp = '';
//   for (let i = str.length-1 ; i >= 0 ; i--) {
//     temp +=str[i];
//   }
//   return temp;
// }

// console.log(reverse('123 654'));


//===============
//Merge sorted Array

//[0,3,4,31] , [4,6,30]

//my solution
// function mergeSorted(arr1 ,arr2) {
//   let mergedArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     mergedArray.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     mergedArray.push(arr2[i]);
//   }
//   mergedArray.sort(function (a ,b) {
//     return a-b;
//   });
//   return mergedArray;
// }

// let arr1 = [0,3,4,31];
// let arr2 = [4,6,30];
// console.log(mergeSorted(arr1 ,arr2)); 


//ztm solution
//Merge sorted Array
//==============================
//[0,3,4,31] , [4,6,30]

function mergeSortedArray(arr1 ,arr2) {
  const targetArray =[];
  let arr1Items = arr1[0];
  let arr2Items = arr2[0];
  let i = 1;
let j = 1;
while(arr1Items || arr2Items){
  if (arr1 == []) {
    return arr2;
  }
  if (arr2 == []) {
    return arr1;
  }
  if (arr1Items <arr2Items) {
    targetArray.push(arr1Items);
    arr1Items = arr1[i];
    i++;
  }else{
    targetArray.push(arr2Items);
    arr2Items = arr2[j];
    j++;
  }
  
}

  return targetArray;
}