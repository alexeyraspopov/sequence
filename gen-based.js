function* map(morphism, iterator){
	for (var item in iterator) yield morphism(item);
}

function* filter(predicate, iterator){
	for (var item in iterator)
		if (predicate(item))
			yield item;
}