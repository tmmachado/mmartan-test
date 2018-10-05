import React from 'react';
import classes from './product-list.css';

const productList = (props) => {
	
	return (
		<React.Fragment>
			{props.query.loading && (!props.query.products || !props.query.products.count)
				? <p className={classes['loading-message']}>Carregando produtos...</p> 
				: null}
				
			{props.query.error 
				? <p className={classes['error-message']}>Erro!</p> 
				: null}

			<div className={classes['product-list']}>
				{props.query.products && props.query.products.count
					? (props.query.products.rows.map((product) => (
						<div className={classes['product-item']} key={product.id}>
							<div 
								className={classes['product-item__image']}
								style={ { backgroundImage: 'url('+product.photo_url+')' } }
							></div>
							<div className={classes['product-item__content']}>
								<h3 className={classes['product-item__title']}>{product.name}</h3>
								<p className={classes['product-item__description']}>{product.description}</p>
								<div className={classes['product-item__price']}>
									{(() => {
										if (product.discount) {
											return <span><span className={classes['product-item__price--old']}>R${Math.floor(product.price) + ',00 por'}</span> R${Math.floor(product.price * (1 - product.discount)) + ',00'}</span>;
										} else {
											return 'R$'+Math.floor(product.price) + ',00';
										}
									})()}
								</div>
							</div>
						</div>
					)))
					: null}
			</div>
		</React.Fragment>
	);
};

export default productList;




// import React from 'react';
// import classes from './product-list.css';
// import { Query } from "react-apollo";
// import gql from "graphql-tag";

// class ProductList extends React.Component {

// 	state = {
// 		products: []
// 	};

// 	componentDidMount() {
		
// 	}
	
// 	render() {
// 		return (
// 			<div className={classes['product-list']}>
// 				<Query query={gql`
// 					{
// 						products {
// 							id
// 							name
// 							description
// 							price
// 							discount
// 							photo_url
// 						}
// 					}
// 				`}>
// 					{({ loading, error, data }) => {
// 						if (loading) return <p className={classes['loading-message']}>Carregando produtos...</p>;
// 						if (error) return <p className={classes['error-message']}>Erro!</p>;

// 						return data.products.map((product) => (
// 							<div className={classes['product-item']} key={product.id}>
// 								<div 
// 									className={classes['product-item__image']}
// 									style={ { backgroundImage: 'url('+product.photo_url+')' } }
// 								></div>
// 								<div className={classes['product-item__content']}>
// 									<h3 className={classes['product-item__title']}>{product.name}</h3>
// 									<p className={classes['product-item__description']}>{product.description}</p>
// 									<div className={classes['product-item__price']}>R${product.price}</div>
// 								</div>
// 							</div>
// 						));
// 					}}
// 				</Query>
// 			</div>
// 		);
// 	}
// };

// export default ProductList;