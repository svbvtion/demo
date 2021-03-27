'use strict';


const arr = {
	a: 1,
	b: function() {
		let a = () => this
		return a()
	},
	c: () => this
}

console.log(arr.c());