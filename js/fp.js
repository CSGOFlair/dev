// insert meme about functional programming here

function Id(a)
{
	return a;
}

function List(a)
{
	return [a];
}

function Compose(f, a)
{
	return f(a);
}

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

function Map(t, a, f) {
	t += a[0];
	f(a[0])
	var remainingList = a.slice(1);
	if (remainingList.length > 0) {
		return Map(t, remainingList); 
	}
}

function Sum(a)
{
	var sum = 0;
	function sum_h(n)
	{
		if (type(n) == "number")
		{
			sum = sum + n;
			return sum_h;
		}
		else
		{
			return sum;
		}
	}
  	return sum_h(a);
}
