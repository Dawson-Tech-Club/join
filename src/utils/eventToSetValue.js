export function eventToSetValue(set) {
	return (event) => {
		set(event.target.value);
	};
}
