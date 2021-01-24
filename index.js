// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {}
//   }

//   get(index) {
//     return this.data[index]
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length-1]
//     delete this.data[this.length - 1]
//     this.length--
//     return lastItem
//   }
//   delete(index) {
//     const item = this.data[index]
//     this.shiftItems(index)
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1]
//     }
//     delete this.data[this.length - 1]
//     this.length--
//   }
// }

// const newArray = new MyArray()
// newArray.push('hi');
// newArray.push('you');
// newArray.push('there');

// newArray.delete(1)


// console.log(newArray);

//EXERCISE REVERSE A STRING

//My SOLUTION
// const myStr = 'Hi my name is Andrei'

// const reverse = string => {
//   const strArr = string.split('');
//   const newArr = strArr.map((el, i) => {

//     return strArr[strArr.length - i -1]
//   });
//   const newStr = newArr.join('')
//   console.log(newStr)
// }

// reverse(myStr);

// ANDREI SOLUTION
// function reverse(str) {
//   //check input
//   if(!str || str.length < 2 || typeof str !== 'string') {
//     return console.log("Hmm..that's not good")
//   }

//   const backwards = [];
//   const totalItems = str.length - 1;
//   for (let i = totalItems; i >= 0; i--) {
//     backwards.push(str[i])
//   }
//   console.log(backwards.join(''))
// }
// reverse('Hi my name is Andrei')

// function reverse(str) {
//   //check input
//   if(!str || str.length < 2 || typeof str !== 'string') {
//     return console.log("Hmm..that's not good")
//   } 
//   console.log(str.split('').reverse().join(''))
// }

// reverse('Hi my name is Andrei')

//SORTING ARRAYS

const array1 = [0, 3, 4, 31]
const array2 = [4, 6, 30]

const mergeSortedArrays = (arr1, arr2) => {
  const merged = []
  const arr1Item = arr1[0];
  const arr2Item = arr2[0];

  for(i = 0; i < arr1.length + arr2.length; i + 2) {
    merged[i] = arr1Item > arr2Item ? arr2Item : arr1Item
    merged[i + 1] = arr1Item < arr2Item ? arr2Item : arr1Item
    
  }



  return merged
}

mergeSortedArrays(array1, array2)