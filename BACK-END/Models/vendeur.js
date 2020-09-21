let mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
    title:String ,
    image: String,
    price:String,
    telephone:String,
    email:String,
   categorie:String,
   nomboutique:String,
   vendu:String,
   vendeurId:String,
   description:String,
   epoque:String,
   provenance:String,
   materiaux:String,
   dimensions:String,
 

   
})


module.exports = mongoose.model('Products',Product)
