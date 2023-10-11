import mongoose from "mongoose";

import slugify from "slugify";

const productSchema = new mongoose.Schema({
    title: {type: String, required:true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
    slug: {type: String, required:true, unique:true},
    reviews: [{ type: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: {type: Boolean, required:true},
    tags:[{type: String}]
}, {timestamps:true});

productSchema.methods.generateSlug = function() {
    this.slug = slugify(this.title, {
      lower: true, // Convert the slug to lowercase
      remove: /[$*_+~.()'"!\-:@]/g, // Remove special characters
    });
  };
  
  // Pre-save hook to generate the slug before saving the product
productSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next(); // Skip if the title has not changed
  }
  this.generateSlug();
  next();
});

export default mongoose.model('product', productSchema);