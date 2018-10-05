const graphql = require('graphql');
const ProductModel = require('../models/product');
const db = require('../db');

const Op = db.dataTypes.Op;
const Product = ProductModel(db.client, db.dataTypes);

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLFloat,
    GraphQLInt
} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        discount: { type: GraphQLFloat },
        photo_url: { type: GraphQLString },
    })
});

const ProductsAndCountType = new GraphQLObjectType({
    name: 'ProductsAndCount',
    fields: ( ) => ({
        count: { type: GraphQLInt },
        rows: { type: new GraphQLList(ProductType) }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        products: {
            type: ProductsAndCountType,
            args: {
                limit: { type: GraphQLInt },
                offset: { type: GraphQLInt }
            },
            resolve(parent, args){
                return Product.findAndCountAll({
                    limit: args.limit,
                    offset: args.offset
                });
            }
        },
        productsLike: {
            type: ProductsAndCountType,
            args: { 
                search: { type: GraphQLString },
                limit: { type: GraphQLInt },
                offset: { type: GraphQLInt }
            },
            resolve(parent, args){
                return Product.findAndCountAll({
                    where: {
                        name: { [Op.iLike]: '%'+args.search+'%' }
                    },
                    limit: args.limit,
                    offset: args.offset
                });
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});