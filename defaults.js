// import React from 'react'
// import products from './database/model/productSchema'
import productsmodel from './database/model/productSchema.js'
import { products } from './database/data.js'

const defaults = async() => {


try {

await productsmodel.insertMany(products)
 console.log("data inserted successfully")

} catch (error) {
 console.log("at the defaults , error occured") 
}
}

export default defaults
