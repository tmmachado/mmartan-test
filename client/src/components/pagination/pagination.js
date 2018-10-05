import React from 'react';
import classes from './pagination.css';
import Pagination from 'react-bootstrap/lib/Pagination';

const pagination = (props) => (
    <div className={classes['pagination-section']}>
        <div className={classes['product-group-selector']}>
            <select defaultValue={props.productsPerPage} onChange={props.productsPerPageChanged(this)}>
                <option value="5">5 produtos por página</option>
                <option value="10">10 produtos por página</option>
                <option value="15">15 produtos por página</option>
            </select>
        </div>
        <div className={classes['page-links']}>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {
                    Array.apply(null, {length: Math.ceil(props.productCount / props.productsPerPage)})
                    .map((value, index) => (
                        <Pagination.Item 
                            key={index+1}
                            active={props.currentPage === index}
                            onClick={() => props.currentPageChanged(index)}
                        >
                            {index+1}
                        </Pagination.Item>
                    ))
                }
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    </div>
);

export default pagination;