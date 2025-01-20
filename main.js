// For Each Method
// const arr = ["amana" , "piyush" , "amit","Alice","Bob","Charlie","David","Emma","Frank","Grace","Henry","Isabel","Jack","Kate","Liam","Mia","Noah","Olivia","Peter","Quinn","Rachel","Sam","Tina" , "Chandan"]

// arr.forEach(function(val){
//     if (val == "amana")
//         console.log("present")
// })
// const newmap = arr.map(function(value){
//     return (value + " ji")
// })

//  Filter Function 

// const filterarr = arr.filter(function(val){
//     return val.startsWith('C')
// })

//Spread 
// const apple = [...arr]

// //Rest
// function restfunction (a,b,x,...ch){
//     console.log(a,b,x,ch)
// }
// restfunction(1,2,3,4,'amanm')



// const names = ["John", "Jane", "Doe", "Smith"];
// const lastnames = ["Doeiyein", "Smith", "Johnson", "Williams"] ;

// // To add first and last name 
// const fullname = [...names , ...lastnames]
// console.log( fullname);

const products = [
            {name:"Laptop", price: 1000 } ,
            {name:"Phone",  price: 500 } ,
            {name:"Tablet", price: 300 } ,
            {name:"Monitor",price: 200 } ,
]

products.filter(function(value){
    if(value.price >= 300)
        console.log(value.name);
    else 
    console.log('Error');
    
        
})