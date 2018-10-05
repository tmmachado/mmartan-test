import React from 'react';
import classes from './main.css';
import ProductList from '../product-list/product-list';
import Pagination from '../pagination/pagination';
import { Query } from "react-apollo";
import gql from "graphql-tag";

class Main extends React.Component {

	state = {
		productsPerPage: 10,
		currentPage: 0
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.searchTerm !== prevProps.searchTerm){
			this.setState({ currentPage: 0 });
		}
	}

	handleProductsPerPageChange = (event) => {
		this.setState({ productsPerPage: Number(event.target.value), currentPage: 0 });
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	render() {
		var gQuery = gql`
		{
			products(limit: ${this.state.productsPerPage}, offset: ${this.state.productsPerPage * this.state.currentPage}) {
				count
				rows {
					id
					name
					description
					price
					discount
					photo_url
				}
			}
		}`;

		if (this.props.searchTerm !== '' && this.props.searchTerm.length > 2) {
			gQuery = gql`
				{
					productsLike(search: "${this.props.searchTerm}", limit: ${this.state.productsPerPage}, offset: ${this.state.productsPerPage * this.state.currentPage}) {
						count
						rows {
							id
							name
							description
							price
							discount
							photo_url
						}
					}
				}`;
		}

		return (
			<main className={classes['main-content']}>
				<div className={classes['main-content__container']}>
					<Query query={gQuery}>
						{({ loading, error, data }) => {

							var products = data.products || data.productsLike || {count: 0, rows: []};
							
							return (
								<React.Fragment>
									<div className={classes['product-count']}>
										<p>
											{ products.count } produtos encontrados
										</p>
									</div>

									<ProductList query={ { loading, error, products } } />

									<Pagination 
										productsPerPage={this.state.productsPerPage} 
										productsPerPageChanged={(event) => this.handleProductsPerPageChange}
										productCount={products.count}
										currentPage={this.state.currentPage}
										currentPageChanged={this.handlePageChange} />
								</React.Fragment>
							)
						}}
					</Query>
				</div>
			</main>
		);
	}
};

export default Main;