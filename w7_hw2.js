/*
Queston 1: Use the array of shop items provided and present the the information in the following format.
*/

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

//Use loop and template literal
//or can use .forEach w/ template literal to iterate through instead of a for loop

function formatShopItems(shopItems) {
    shopItems.forEach(item => { //item= parameter--> for each item in shopItems
    console.log(` 
    Name: ${item.name} 
    Price: ${item.price}
    Description: ${item.desc}
    Category: ${item.category}
    `)
  })
}

formatShopItems(shopItems)


/*
Queston 2: Write a function that parses through the below object and displays all of their
favorite food dishes as shown:

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

***Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object.
*/

//food items = k,v object
const hwPerson = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt"
    }
}


// use object.entries method to get an array/list of the object

function favFood(hwPerson) {
    Object.entries(hwPerson).forEach(([k, v]) => {
      console.log(`${k} contains:`)
      if (Array.isArray(v)) {
        v.forEach(item => console.log(item))
      } //use another Object.entries to loop through shakes(object)
      else if (typeof v === 'object') {
        Object.entries(v).forEach(([key, value]) => {
            console.log(key,value)
        })
      }
      else {
        console.log(v)
      }
    })
}

favFood(hwPerson)


/*
Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed.
*/


//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
    const list = []
    const string = n.toString() //convert to string before reversing values
     for (let i = string.length-1; i >= 0; i--) {
      const digit = parseInt(string[i]) //convert back to int
      list.push(digit)
    }
    return list
}

//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
function simpleMultiplication(number) {
    if (number % 2 === 0) {
    return number * 8
  } else {
    return number * 9
  }
}

//https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
function makeUpperCase(str) {
    return str.toUpperCase()
}
