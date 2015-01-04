function generator(list){
	var pointer = 0,
		count = list.length;

	return {
		next: function(){
			return {
				value: list[pointer++],
				done: pointer > count
			}
		}
	};
}
