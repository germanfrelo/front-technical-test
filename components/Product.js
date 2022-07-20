export default function Product({ title, description, price, imageSrc }) {
	return (
		<div className="Product">
			<div>
				<img
					alt={title}
					src={imageSrc}
				// width={ }
				// height={ }
				/>
				{/* <button>Añadir a mi lista de deseos</button> */}
			</div>
			<p className="Product-title">{title}</p>
			<p className="Product-description">{description}</p>
			<div className="Product-price">
				<p>{price} €</p>
			</div>
		</div>
	);
}
