export function eventToSetValue(set: (v: any) => void) {
	return (event: any) => {
		set(event.target.value);
	};
}
