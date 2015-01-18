function* map(morphism, iterator){
	for (var item in iterator) yield morphism(item);
}

function* filter(predicate, iterator){
	for (var item in iterator)
		if (predicate(item))
			yield item;
}

function reduce(operator, initial, iterator){
	for(var item in iterator){
		initial = operator(inital, item);
	}
	return initial;
}

function toArray(iterator){
	var array = [];

	for (var item in iterator) array.push(item);

	return array;
}

function* sort(comparator, iterator){
	yield* toArray(iterator).sort(comparator);
}
