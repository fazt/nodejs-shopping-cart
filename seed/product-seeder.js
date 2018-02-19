var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping');

var products = [

  new Product({
    imagePath:'/images/logo.png',
    title:'A Game 1',
    description:'Awesome Game!!!',
    price:10
  }),

  new Product({
    imagePath:'/images/logo.png',
    title:'A Game 2',
    description:'Awesome Game!!!',
    price:20
  }),

  new Product({
    imagePath:'/images/logo.png',
    title:'A Game 3',
    description:'Awesome Game!!!',
    price:30
  }),

  new Product({
    imagePath:'/images/logo.png',
    title:'A Game 4',
    description:'Awesome Game!!! it\'s Ok',
    price:40
  }),

  new Product({
    imagePath:'/images/logo.png',
    title:'A Game 5',
    description:'Awesome Game!!!',
    price:50
  }),

  new Product({
    imagePath:'/images/logo.png',
    title:'A Game 6',
    description:'Awesome Game!!!',
    price:60
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err,result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
