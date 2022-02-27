//jshint esversion:6

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB")


const fruitSchema = new mongoose.Schema({
    name: {
      // validation
      type: String,
      required: [true, "Please check your entry"],
    },

    rating: {
      // validation
      type: Number,
      min: 1,
      max: 10,
    },

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
      favoriteFruit: fruitSchema,
})

const pinapple = new Fruit({
    name: "Pinapple",
    rating: 8,
    review: "Wonderful"
});

const grapes = new Fruit({

  name: "Grapes",
  rating: 10,
  review: "Green are the best",

})

grapes.save();


const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "Amy",
    age: 32,
    favoriteFruit: pinapple,
});

// person.save();


// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 5,
//   review: "It's alright!"
//
// });
//
// const orange = new Fruit ({
//   name: "Orange",
//   rating: 10,
//   review: "Orange you glad I didnt say banana!"
//
// });
//
// const banana = new Fruit ({
//   name: "Banana",
//   rating: 10,
//   review: "The best"
//
// });


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



  fruits.forEach(function(fruit){
    console.log(fruit.name);
  });

});

// Fruit.updateOne({_id: "621a8c0bf1d119250625e4e8"}, {name: "Peach"}, function(err){
//   if (err) {
//       console.log(err);
//
//   } else {
//     console.log("All good.");
//
//   }
//
//
//
//
// });

Person.updateOne({_id: "621bda0e24e29f6de2610955"}, {favoriteFruit: grapes}, function(err){
    if (err) {
        console.log(err);

    } else {
        console.log("Update fav fruit successfully.");

    }


})

// Fruit.deleteOne({_id: "621a8c0bf1d119250625e4e8"}, function(err){
//
//   if (err) {
// console.log(err);
//
// } else {
//
//   console.log("Delete success.");
// }
//
// });

// Person.deleteMany({name: "Rosario"}, function(err){
//   if (err) {
//     console.log(err);
//
//   } else {
//
//     console.log("Deletion of many successful.");
//   }
//
//
// });


// mongoose.connection.close();
