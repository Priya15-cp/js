let age ="17"

console.log(typeof(age))
// coversion from string to number
let age_as_number= Number(age)
console.log(typeof(age_as_number))
/* in boolen true=1 and false=0
   "" == false  
   if string like""prita " ==true*/

   console.log(undefined== 0)
console.log(undefined> 0)
console.log(undefined>=0)

/*
%%%%%%% primitive data type %%% 
----they are call by value(cganfe only in copy
---type--string,number,null,undefined,symbol,boolearn,bigint

%%%%%%% non-primitive or (refrence type)
----directly accesd by refermce
----types array, object,function*/

const id=Symbol("675")//id always have to be unique 
console.log(typeof(id))

const hello=Symbol("675")//id always have to be unique 
console.log(typeof(hello))

// symbol always represent uniqueness so while comparing hello and id is gives false even after their value is same
 
console.log(id==hello)