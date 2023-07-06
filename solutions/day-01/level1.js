const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]
// Q1.
const empty=[]
// Q2.
const array=[1,2,3,5,6]
//Q3.
console.log(array.length)
//Q4.
console.log(array[0])
console.log(array[array.length-1]);
if((array.length)%2===0){
  console.log(array[array.length/2]);
}
else{
  console.log(array[(array.length-1)/2]);
}
//Q5.
const mixedDataTypes = [1,'abc',2,true,3,'bcd','efgh'];
console.log(mixedDataTypes.length);
//Q6.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
//Q7.
console.log(itCompanies)
//Q8.
console.log(itCompanies.length)
//Q9.
console.log("First Company : "+itCompanies[0]);
if((itCompanies.length)%2===0){
  console.log("Middle Company : " + itCompanies[itCompanies.length/2]);
}
else{
  console.log("Middle Company : " + itCompanies[(itCompanies.length-1)/2]);
}
console.log("Last Company : " + itCompanies[itCompanies.length-1]);
//Q10.
for(i=0;i<itCompanies.length;i++){
  console.log(itCompanies[i]);
}
//Q11.
for(i=0;i<itCompanies.length;i++){
  console.log(itCompanies[i].toUpperCase());
}
//Q12
var str=""
for(i=0;i<itCompanies.length-2;i++){
  str+=itCompanies[i]+", ";
}
str+=itCompanies[itCompanies.length-2]+" and "+itCompanies[itCompanies.length-1]+ " are big IT companies"; 
console.log(str);
