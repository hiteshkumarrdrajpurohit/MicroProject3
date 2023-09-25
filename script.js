let foodApp = require("./food.json");
//T-1: food items list
let foodItems=foodApp.forEach((item)=>{
console.log(item.foodname);
})
//T-2: food itmes with category vegetables

let foodItmes2=foodApp.filter((item) =>{
    if(item.category==="Vegetable") return item.foodname;
})
//T-3: food itmes with category fruit
let foodItmes3=foodApp.filter((item) =>{
    if(item.category==="Fruit") return item.foodname;
})
//T-4: food itmes with category protien
let foodItmes4=foodApp.filter((item) =>{
     if(item.category==="Protein") return item.foodname;
})
//T-5: food itmes with category nuts
let foodItmes5=foodApp.filter((item) =>{
    if(item.category==="Nuts") return item.foodname;
})
//T-6: food itmes with category grains
let foodItmes6=foodApp.filter((item) =>{
    if(item.category==="Grains") return item.foodname;
})
//T-7: food itmes with category dairy
let foodItmes7=foodApp.filter((item) =>{
    if(item.category==="Dairy") return item.foodname;
})
//T-8: food itmes with  calorie above 100
let foodItmes8=foodApp.filter((item) =>{
    if(item.calorie>100) return item.foodname;
})
//T-9: food itmes with calorie below 100
let foodItmes9=foodApp.filter((item) =>{
    if(item.calorie<100) return item.foodname;
})
//T-10: food itmes with highest protien content to lowest
let foodItmes10=foodApp.sort((a,b) =>{
     return a.protiens-b.protiens;
})
//T-11: food itmes with lowest cab content to highest
let foodItmes11=foodApp.sort((a,b) =>{
    return b.cab-a.cab;
})


