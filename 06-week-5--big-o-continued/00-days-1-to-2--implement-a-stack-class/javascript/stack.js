class Stack {

  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
    this.counter = 0; 
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (this.isFull()) { 
   console.log(error)
    }
    // else stack.push(item)
    // counter++ 
    else {this.stack[this.stack.length] = item}
  }

  // remove item from top of stack and return it
  pop() {
    let item = this.stack.splice(this.stack.length - 1)
    return item[0]
  }

  // return item at top of stack without removing it
  peek() {
    return this.stack[this.stack.length - 1]
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    if (this.stack.length == 0) { 
    return true } else { return false }
  }

  // return true if stack is full, otherwise false
  isFull() {
    if (this.stack.length == this.limit) {
      return true } else {return false}
      
    }
  

  // return number of items in stack
  size() {
    return this.stack.length
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
  // let found = this.stack.find(target) 
  // if (found.isInteger()) {return this.stack.size - 1 - found }  else { return - 1} 
  // }
    for (let i = 0; i < this.stack.length; i++){
      if (this.stack[i] == target) { return this.stack.length - 1 - i } 
    }
    return -1 
    } 

  // print contents of stack: do not return the stack itself!
  print() {
    for (let i = 0; i < this.stack.length; i++){
      console.log(this.stack[i])
    }
  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = Stack;
