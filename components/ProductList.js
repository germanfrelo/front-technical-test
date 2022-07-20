import Product from "./Product";

export function ProductList({ products }) {
	const productList = products.map(product => (
		<li key={product.id}>
			<Product
				title={product.title}
				description={product.description}
				price={product.price}
				priceSpecial={product.priceSpecial}
				imageSrc={product.thumbnail}
			/>
		</li>
	));

	return (
		<>
			<ul className="ProductList">
				{productList}
			</ul>
		</>
	);
}
