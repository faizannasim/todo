
 
 
 


const mynums = [1,2,3,4,5,6,7,8,9]
 const nums = []
 
 mynums.forEach((add) =>{
     if(add + 10){
         nums.push(add)
     }
 })
 
 console.log(nums)
 
 
 
 
 const num = [1,2,3,4,5,6,7,8,5,4,5,1,1,5,]

const mynums = []

num.forEach((ok)=>{
    if(ok>6){
        mynums.push(ok)
    }
 
})

console.log(mynums)


var arr = [2,4,5,6,7,8]
let a = arr.map((value)=>{
    console.log(value)
    return value + 1
   
})

console.log(a)


var arr2 = [45,78,5,4,8,7,44,22,55,88,9,1]
let a3 = arr2.filter((value)=>{
    return value>5
})
console.log(a3)


var arr3 = [1,2,4,5,6,7,8]
let var4 = arr3.reduce((value,index) =>{
    return value+index
})
console.log(var4)
///

 const books = [
     {
         title:"abc",genre:"hindi"
     },
     {
         title:"ee",genre:"urdu"
     },
      {
         title:"dd",genre:"hindi"
     },
      {
         title:"ss",genre:"urdu"
     },
      {
         title:"abaac",genre:"hindi"
     },
     
     ];
 const novalfaizan = books.filter((search) =>{
     return search.genre === "hindi" && search.genre === "urdu"
 })
 
 console.log(noval)
