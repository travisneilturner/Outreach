
let LinkedList = function(node) {
  this.head = node
  this.tail = node
  this.searchNode = this.head
  this.offset = 0
} 

LinkedList.prototype.nextChar = function() {
  if(this.searchNode === null) {
    return ''
  }

  let end = this.searchNode.value.length-1
  let char = ''
  
  if (this.offset === end) {
    char = this.searchNode.value.charAt(end)
    this.offset = 0
    this.searchNode = this.searchNode.next
  } else {
    char = this.searchNode.value.charAt(this.offset)
    this.offset++
  }

  return char
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
  this.searchNode = this.head
  this.offset = 0
  let scanned = this.nextChar()
  let target = text.charAt(0)
  
  let found = false
  while(scanned != '') {
    if(target === scanned) {
      found = true
    }

    if (found) {
      let startNode = this.searchNode
      let offset = this.offset

      for(let i = 1; i < text.length; i++) {
        scanned = this.nextChar()
        if(scanned === '') {
          return false
        }
        if(scanned != text[i]) {
          found = false
          break
        }
        if(i === text.length-1) {
          return true
        }
      }
      this.searchNode = startNode
      this.offset = offset
      scanned = this.nextChar()
    } else {
      scanned = this.nextChar()
    }
  }

  return false
}

let myList = new LinkedList({
  next: null,
  value: 'jksahd'
})

myList.add('Hell')
myList.add('o')
myList.add(' My na')
myList.add('me is N')
myList.add('eil. Nice to meet you can I tell you about the weather how is your family mine is great')
myList.add('aba')
myList.add('bac')

console.log(myList)
console.log(myList.search('eet yo'))
console.log(myList.search('how'))
console.log(myList.search('lo'))
console.log(myList.search('zzz'))
console.log(myList.search('jksahdHello My name is Neil. Nice to meet you can I tell you about the weather how is your family mine is great'))
console.log(myList.search('jksahdHello My name is Neil. Nice to meet you can I tell you about the weather how is your family mine is great!'))
console.log(myList.search('abac'))