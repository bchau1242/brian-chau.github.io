// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./brian-chau.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array) {
    let females = _.reduce(array, function(accumulator, customer) {
		if(customer.gender === 'female') {
			accumulator += 1;
		}
		return accumulator;
	}, 0)
    return females;
}

var oldestCustomer = function(array) {
	let oldest = _.reduce(array, function(accumulator, current) {
    	if(current.age > accumulator) {
        	accumulator = current.age;
        }
		return accumulator;
    }, 0);

	for(let i = 0; i < array.length; i++) {
		if(array[i].age === oldest) {
			return array[i].name;
		}
	}
    return oldest;
};

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(accumulator, current) {
        if(current.age < accumulator) {
        	accumulator = current.age;
        }
			return accumulator;
    }, 50);

		for(let i = 0; i < array.length; i++) {
			if(array[i].age === youngest) {
				return array[i].name;
			}
		}
    return youngest;
};

var averageBalance = function(array) {
	let balances = _.map(array, function(customer) {
		return Number(customer.balance.replace(/\$|,/g, ''));
	});
	let sum = _.reduce(balances, function(total, balance) {
		return total += balance;
	}, 0)
	return sum / balances.length;
};

var firstLetterCount = function(array, letter) {
	let count = _.filter(array, function(customer) {
		if(customer.name[0].toUpperCase() === letter.toUpperCase()) {
			return true;
		}
	})
	return count.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
	for(let i = 0; i < array.length; i++) {
		if(array[i].name === customer) {
			let count = _.reduce(array[i].friends, function(total, friend) {
				if(friend.name[0].toUpperCase() === letter.toUpperCase()) {
					total += 1;
				}
				return total;
			}, 0)
			return count;
		}
	}
};

var friendsCount = function(array, name) {
	let mapped = _.map(array, function(customer) {
		let friend = customer.friends;
		for(let i = 0; i < friend.length; i++) {
			if(friend[i].name === name) {
				return customer.name;
			} 
		}
	})
	let filter = _.filter(mapped, function(person) {
		if (person !== undefined) {
			return true;
		}
	})
	return filter;
};

var topThreeTags;

var genderCount = function(array) {
	let count = _.reduce(array, function(obj, customer) {
		if(obj[customer.gender]) {
			obj[customer.gender] += 1;
		} else {
			obj[customer.gender] = 1;
		}
		return obj;
	}, {})
	return count;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
