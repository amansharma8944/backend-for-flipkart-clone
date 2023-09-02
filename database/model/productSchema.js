import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const productSchema = new mongoose.Schema({
    id: {type:String,required:true},
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});


const productsmodel = mongoose.model('product', productSchema);

export default productsmodel;
