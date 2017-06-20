class Stack {

	constructor(){
		this.items = [];
	}

	push(element){
		 return this.items.push(element);
	}

	pop(){
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty(){
		return this.items.length === 0;
	}

	clear(){
		return this.items=[];
	}

	size(){
		return this.items.length;
	}

	print(){
		 return console.log(this.items.toString());
	}
}

let stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(2);
stack.push(45);
stack.push(23);
stack.push(91);
stack.push(01);
stack.pop();

stack.print();
console.log(stack.isEmpty());