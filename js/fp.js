// crappy rip-off of fn.lua, only worse because billard wrote it

// Indentifies a value
function Id(a)
{
	return a;
}

// Turns a value into a list
function List(a)
{
	return [a];
}

// Flips two arguments
function Flip(f)
{
	return function(a, b)
	{
		return f(b, a);
	};
}

// Applies a single argument to a function
function Apply(f, a)
{
	return f(a);
}

// Curries a function
function Curry(f)
{
	return function(a)
	{
		return function(b)
		{
			return f(a, b);

		};
	};
}

// Runs a value through a function until said function returns true
// Example:
// Until(Id, false) = Mayhem
function Until(f, v)
{
	if (f(v))
	{
		return v;
	}
	return Until(f, f(v));
}

// Run a function over every value in an array
// Example:
// Map([1, 2, 3, 4, 5], function(num){return num * num}, 0) = [1, 4, 9, 16, 25]
function Map(arr, func, total)
{
	total += arr[0];
	func(arr[0])
	var remains = arr.slice(1);
	if (remains.length > 0) {
		return Map(remains, func, total); 
	}
}

// Retrieve the sum of multiple numbers through wonky recursion
// Must be terminated with a null parameter
// Can also be used to curry numbers
// Example:
// Sum(1)(2)(3)() = 1 + 2 + 3 = 6
function Sum(n)
{
	var f = function(x) {
		return Sum(n + x);
	};

	f.valueOf = f.toString = function() {
		return n;
	};

	return f;
}

// Retrieve a number's factorial through recursion
// Factorials are the product of a number and every number between it and 1
// Example:
// Factorial(6) = 6 * 5 * 4 * 3 * 2 = 720
function Factorial(num)
{
	if (num <= 0)
	{
		return 1;
	}
	else
	{
		return (num * Factorial(a - 1));
	}
}
