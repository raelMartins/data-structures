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

// //SORTING ARRAYS

// const array1 = [0, 3, 4, 31]
// const array2 = [4, 6, 30]

// const mergeSortedArrays = (arr1, arr2) => {
//   const merged = []
//   const arr1Item = arr1[0];
//   const arr2Item = arr2[0];

//   for(i = 0; i < arr1.length + arr2.length; i + 2) {
//     merged[i] = arr1Item > arr2Item ? arr2Item : arr1Item
//     merged[i + 1] = arr1Item < arr2Item ? arr2Item : arr1Item
    
//   }



//   return merged
// }

// mergeSortedArrays(array1, array2)

//HASH TABLE

// class HashTable {
//   constructor(size){
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i =0; i < key.length; i++){
//         hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     return hash;
//   }
//   set (key, value) {
//     const hashedIndex = this._hash(key)
//     if(!this.data[hashedIndex]) {
//       this.data[hashedIndex] = []
//     }
//     this.data[hashedIndex].push([key, value])
//     console.log(this.data)

//   }
//   get(key) {
//     let address = this._hash(key)
//     const currentBucket = this.data[address]
//     if(currentBucket) return console.log( currentBucket.find(el => el[0] === key) )
//     console.log(undefined)
//   }
//   keys() {
//     const keysArr = []
//     this.data.forEach(el => {
//       if(el) keysArr.push(el[0][0])
//     })

//     console.log(keysArr)
//   }
// }

// const myHashTable = new HashTable(50);

// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
// myHashTable.set('oranges', 765)
// myHashTable.set('apples', 59)
// myHashTable.get('apples')
// myHashTable.keys()


//[2, 5, 1, 2, 3, 5, 1, 2, 4]
//[2, 1, 1, 2, 3, 5, 1, 2, 4]
//[2, 3, 4, 5]

// const findFirstRecurring = array => {
//   const prev = new Set()
//   if(!array) console.log(undefined)

//   for (let i = 0; i < array.length; i++) {
//     if(prev.has(array[i])) {
//       value = array[i]
//       return console.log(array[i])
//     }
//     prev.add(array[i])
//   };
//   console.log(undefined)
// }
// findFirstRecurring();

//LINKED LISTS
// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
// class Node  {
//   constructor(value) {
//     this.value = value;
//     this.next = null
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   traverseTo(index) {
//     let counter = 0;
//     let currNode = this.head
//     while(counter !== index) {
//       currNode = currNode.next;
//       counter++
//     }
//     return currNode 
//   }
//   append(value) {
//     const node = new Node(value)
//     this.tail.next = node
//     this.tail = node
//     this.length++
    
//   }
//   prepend(value) {
//     const node = new Node(value)
//     node.next = this.head
//     this.head = node
//     this.length++
//   }
//   insert(index, value) {
//     const node = new Node(value)
//     if(index >= this.length) {
//       return this.append(value)
//     }
//     const leader = this.traverseTo(index - 1) 
//     const holdingPointer = leader.next
//     leader.next = node
//     node.next = holdingPointer
//     this.length++

//   }
//   remove(index) {
//     if(index >= this.length) return undefined;
//     const leader = this.traverseTo(index - 1)
//     const node = leader.next.next

//     leader.next = node
//     this.length--
//   }
//   printList() {
//     const array = []
//     let currNode = this.head;
//     while(currNode !== null) {
//       array.push(currNode.value);
//       currNode = currNode.next
//     }
//     console.log(array)
//     return
//   }

// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(46);
// myLinkedList.remove(2);
// myLinkedList.remove(2);

// myLinkedList.printList()

// add a method reverse() to the linked list that reverses the entire list of nodes

// class LinkedList {
//   constructor(value) {
//       this.head = {
//           value: value,
//           next: null
//       };
//       this.tail = this.head;
//       this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null
//     }
//     console.log(newNode)
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while(currentNode !== null){
//         array.push(currentNode.value)
//         currentNode = currentNode.next
//     }
//     return array;
//   }
//   insert(index, value){
//     //Check for proper parameters;
//     if(index >= this.length) {
//       console.log('yes')
//       return this.append(value);
//     }
    
//     const newNode = {
//       value: value,
//       next: null
//     }
//     const leader = this.traverseToIndex(index-1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     //Check parameters
//     let counter = 0;
//     let currentNode = this.head;
//     while(counter !== index){
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     // Check Parameters      
//     const leader = this.traverseToIndex(index-1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//   }
//   reverse() {
//       // let currNode = this.head;
//       // let forward = null;
//       // let node = currNode
//       // let prevNode
//       // while(forward.next !== null) {
//       //   currNode = currNode.next
//       //   node.next = forward
//       //   forward = currNode
//       //   prevNode = forward.next//
//       // }
//       if(!this.head.next) {
//         return this.head
//       }
//       let first = this.head;
//       let second = first.next;
//       while(second) {
//         const temp = second.next
//         second.next = first
//         first = second;
//         second = temp;
//       }
      
      
//     return this.printList();
//   }
// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.printList()
// myLinkedList.insert(2, 99)
// myLinkedList.insert(20, 88)
// myLinkedList.printList()
// myLinkedList.remove(2)
// myLinkedList.reverse()

//STACKS
// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(){
//     this.data = [];
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     console.log(this.top)
//     return this.top
//   }
//   push(value){
//     //check if empty
//     // const node = new Node(value)
//     // if(this.length === 0) {
//     //   this.bottom = node; 
//     //   this.top = node
//     // }
//     // const holdingPointer = this.top
//     // this.top.next = node;
//     // this.top = node;
//     // this.length++
//     if(this.length === 0) this.bottom = value
//     this.data.push(value)
//     this.top = value
//     this.length++
//     console.log(this)
//     return this
//   }
//   pop(){
//     // if(this.length === 0) return null
//     // let i = 0;
//     // let currentNode = this.bottom
//     // while(i !== this.length - 2) {
//     //   currentNode = currentNode.next
//     //   i++
//     // }
//     // currentNode.next = null;
//     // const holdingPointer = this.top
//     // this.top = currentNode
//     // this.length--
//     this.data.pop()
//     this.length--
//     this.top = this.data[this.length - 1]
//     console.log(this)
//     return this
//   }
//   // isEmpty
// }

// const myStack = new Stack();

// myStack.push('hey')
// myStack.push('there')
// myStack.push('babe')
// myStack.pop()
// myStack.peek()

//QUEUES

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(){
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     console.log(this.first)
//     return this.first
//   }
//   enqueue(value){
//     const node = new Node(value)
//     if(this.length === 0) {
//       this.first = node;
//       this.last = node;
//     }
//     this.last.next = node;
//     this.last = node;
//     this.length++
//     console.log(this)
//     return this;
//   }
//   dequeue(){
//     if(this.length === 0) return null;
//     this.first = this.first.next;
//     this.length--
//     console.log(this)
//     return this;
//   }
//   //isEmpty;
// }

// const myQueue = new Queue();
// myQueue.enqueue('Joy'),
// myQueue.enqueue('Matt')
// myQueue.enqueue('Pavel')
// myQueue.enqueue('Samir')
// myQueue.peek()
// myQueue.dequeue()
// myQueue.peek()


