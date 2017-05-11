'use strict'
let mongoose = require("mongoose");

let BookSchema = new mongoose.Schema({
book: {
    title: String,
    info: String,
    moreInfo: String
}
});
BookSchema.pre('save',function(next){
next();
});

mongoose.model("Book",BookSchema);