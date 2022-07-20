import { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";

export default function Home() {
	// TODO: Implement search component
	// TODO: Implement product list component
	const [products, setProducts] = useState([]);
	const [searchField, setSearchField] = useState("");

	useEffect(() => {
		fetch("https://dummyjson.com/products?limit=10")
			.then((response) => response.json())
			.then((json) => setProducts(json.products));
	}, []);

	const onSearchChange = (event) => setSearchField(event.target.value);

	const filteredProducts = products.filter(product => {
		return (
			product.title.toLowerCase().includes(searchField.toLowerCase()) ||
			product.description.toLowerCase().includes(searchField.toLowerCase()) ||
			product.price.toString().includes(searchField)
		);
	});

	return !products.length ? (
		<p> Loading...</p >
	) : (
		<>
			<header className="header">
				<h1>vinissimus</h1>
				<Search
					placeholder="Buscar por título, descripción, precio..."
					className="SearchBox"
					searchChange={onSearchChange} />
			</header>
			<ProductList products={filteredProducts} />
		</>
	);
}
