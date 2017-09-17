function localStore() {
	
	const ls = window.localStorage;
	
	function set (key, value) {
		try {
			ls.setItem(key, JSON.stringify(value));
			return true;
		} catch (e) {
			return false;
		}
	}
	
	function get (key) {
		return JSON.parse(ls.getItem(key));
	}
		
	return {
		set,
		get
	}
}


export const ls = localStore();
