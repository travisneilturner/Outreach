
let LinkedList = function(node) {
  this.head = node
  this.tail = node
} 

LinkedList.prototype.nextChar = function(node, offset) {
  let currentNode = node
  let end = node.value.length-1
  
  if(offset == end) {
    currentNode = currentNode.next
    end = currentNode.value.length
    offset = 0
  } else {
    if(currentNode.value.charAt(offset) == '') {
      return {char: '', offset: 0, currentNode: null}
    }
    char = currentNode.value.charAt(offset)
    offset++
   }

  return {char, offset, currentNode}
}

LinkedList.prototype.add = function(value) {
  let node = {
    value: value,
    next: null
  }
  this.tail.next = node
  this.tail = node
}

LinkedList.prototype.search = function(text) {
  let scanned = this.nextChar(this.head, 0)
  let target = text.slice(0, 1)
  
  let found = false
  while(scanned.char != '') {
    if(target === scanned.char) {
      found = true
    }

    if (found) {
      for(let i = 1; i < text.length; i++) {
        scanned = this.nextChar(scanned.currentNode, scanned.offset)
        if(scanned.char == '') {
          return false
        }
        if(scanned.char != text[i]) {
          found = false
          break
        }
        if(i == text.length-1) {
          return true
        }
      }
    } else {
      scanned = this.nextChar(scanned.currentNode, scanned.offset)
    }
  }

  return false
}

let myList = new LinkedList({
  next: null,
  value: 'jksahd'
})
  
myList.add('Hell')
myList.add('o My na')
myList.add('me is N')
myList.add('eil. Nice to meet you can I tell you about the weather how is your family mine is great')

// console.log(myList)
// console.log(myList.search('eet yo'))
// console.log(myList.search('how'))
console.log(myList.search('lo'))




