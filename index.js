function identity(a){
	return a;
}

function unit(data, morphism){
	return {
		map: function(fn){
			return unit(data, mapper(fn));
		}
	}
}

function sequence(data){
	return unit(data, identity);
}