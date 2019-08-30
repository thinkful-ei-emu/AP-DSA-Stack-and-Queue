// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data){

        const node  = new _Node(data)

        if(this.first === null){
            this.first = node
        }

        if(this.last){
            this.last.next = node
        }

        this.last = node

    }

    dequeue(){

        if(this.first === null){
            return
        }

        const node = this.first
        
        this.first = this.first.next

        if(node === this.last){
            this.last = null
        }

        return node.value

    }
    
}

function makeQ(){

    let starTrekQ = new Queue()

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    console.log(display(starTrekQ))

    starTrekQ.dequeue()
    starTrekQ.dequeue()

    console.log(display(starTrekQ))

    console.log(peek(starTrekQ))

    console.log(isEmpty(starTrekQ))

}

function display(queue){

    let currNode = queue.first

    let arr = []

    if(!currNode){
        return 'Q is empty'
    }
    //console.log(currNode)

    while (currNode){
        arr.push(currNode.value)
        currNode = currNode.next
    }

    return arr

}

function peek(queue){

    if(queue.first === null){
        return 'q empty'
    }

    return queue.first.value

}

function isEmpty(queue){

    if(queue.first === null){
        return true
    }

    return false;

}

function main(){

    makeQ()

}

main()