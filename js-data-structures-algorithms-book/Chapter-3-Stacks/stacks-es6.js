class Stack {

	constructor(){
		let items = [];

		this.isEmpty = this.isEmpty.bind(this);
	}

	push(element){
		 return items.push(element);
	}

	pop(){
		return items.pop();
	}

	peek() {
		return items[items.length - 1];
	}

	isEmpty(){
		return items.length === 0;
	}

	clear(){
		return items=[];
	}

	size(){
		return items.length;
	}

	print(){
		 console.log(items.toString());
	}
}

let stack = new Stack();

console.log(stack.isEmpty());