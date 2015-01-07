function iterator(list){
	var pointer = 0,
		count = list.length;

	return {
		next: function(){
			return {
				value: list[pointer++],
				done: pointer > count
			};
		}
	};
}

function identity(a){
	return a;
}

function compose(f, g){
	return function(a){
		return f(g(a));
	};
}

function take(gen, count, morphism){
	if(count === 0) return [];

	var data = gen.next();

	if (!data.done) return [morphism(data.value)].concat(take(gen, count - 1, morphism));
}

function unit(gen, morphism){
	return {
		take: function(count){
			return take(gen, count, morphism);
		},
		map: function(fn){
			return unit(gen, compose(fn, morphism));
		}
	}
}

function sequence(data){
	return unit(iterator(data), identity);
}

module.exports = sequence;
