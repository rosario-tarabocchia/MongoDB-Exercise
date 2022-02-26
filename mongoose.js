//jshint esversion:6

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB")


const fruitSchema = new mongoose.Schema({
    name:String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 8,
    review: "Delicious!"
})

// fruit.save();

const personSchema = new mongoose.Schema({
      name: String,
      age: Number,
})

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "Rosario",
    age: 42,
});

// person.save();


const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 5,
  review: "It's alright!"

});

const orange = new Fruit ({
  name: "Orange",
  rating: 10,
  review: "Orange you glad I didnt say banana!"

});

const banana = new Fruit ({
  name: "Banana",
  rating: 10,
  review: "The best"

});


// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Success");
//     }
// });

Fruit.find(function(err, fruits){
  if(err) {
    console.log(err);

  } else {

    console.log(fruits);
  }

  mongoose.connection.close();

  fruits.forEach(function(fruit){
    console.log(fruit.name);
  });

});
