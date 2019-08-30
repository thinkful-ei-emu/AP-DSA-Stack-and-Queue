// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }


    push(data){

        /* If the stack is empty, then the node will be the
           top of the stack */

        if(this.top === null){
            this.top = new _Node(data, null)
        }


        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */

        const node = new _Node(data, this.top)
        this.top = node
    }


    pop(){
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */

        const node = this.top
        this.top = node.next
        return node.data
    }
}

function display(stack){

    let currNode = stack.top

    let arr = []

    if(!currNode){
        return 'This stack is currently empty'
    }

    else{

        while(currNode.next !== null){
            arr.push(currNode.data)
            currNode = currNode.next
        }

    }

    return arr;

}

function peek(stack){

    let currNode = stack.top

    if(!currNode){
        return 'This stack is currently empty'
    }

    else{
        return `The top of the stack is: ${currNode.data}`
    }
   
}

function isEmpty(stack){

    let currNode = stack.top

    if(!currNode){
        return 'This stack is currently empty'
    }

    else{
        return 'This stack is populated'
    }


}

function makeStack(){

    let starTreck = new Stack()

    starTreck.push('Kirk')
    starTreck.push('Spock')
    starTreck.push('McCoy')
    starTreck.push('Scotty')

    console.log(display(starTreck))

    starTreck.pop()
    starTreck.pop()

    console.log(display(starTreck))

    console.log(peek(starTreck))

    console.log(isEmpty(starTreck))

}

makeStack()




