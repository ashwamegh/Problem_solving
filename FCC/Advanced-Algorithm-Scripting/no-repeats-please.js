// https://www.freecodecamp.com/challenges/no-repeats-please

// Uses Heaps Algorithm : https://en.wikipedia.org/wiki/Heap%27s_algorithm

function permAlone(str) {
	let strArray = str.split('');
	let result = 0;

	const swapping = (a,b) => {
		let temp = strArray[a];
		strArray[a] = strArray[b];
		strArray[b] = temp;
	}

	const permutationsMatch= (length)=>{
		let regex = /([a-z])\1+/;
		if (length === 1 && !regex.test(strArray.join(''))){
			result++;
		}else{
				for (let i = 0; i < length; i++) {
					permutationsMatch(length-1);
					swapping(length%2?0:i,length-1);
				}
			}
	}
	permutationsMatch(strArray.length);
	console.log(result);
}
permAlone('aab');