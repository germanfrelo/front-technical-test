export function Search({ placeholder, className, searchChange }) {
	return (
		<input
			type="search"
			placeholder={placeholder}
			className={className}
			onChange={searchChange}
		></input>
	);
}
