console.log("Problem 1");
let sam={
    "firstName": "Sam", 
    "department": "Tech", 
    "designation": "Manager", 
    "salary": 40000, 
    "raiseEligible": "true"

}
let mary = {
    "first name": "Mary", 
    "department": "Finance", 
    "designation": "Trainee", 
    "salary": 18500, 
    "raiseEligible": "true" 
}
let bill = {
    "firstName": "Bill", 
    "department": "HR", 
    "designation": "Executive", 
    "salary": 21200, 
    "raiseEligible": "false"
}
console.log(sam);
console.log(mary);
console.log(bill);

console.log("Problem 2");
let list = { 
    "companyName" : "Tech Stars",
    "CompanySite": "www.techstars.site",
    "Employees":[
        {
            "firstName": "Sam", 
            "department": "Tech", 
            "designation": "Manager", 
            "salary": 40000, 
            "raiseEligible": "true"
        },
        {
            "first name": "Mary", 
            "department": "Finance", 
            "designation": "Trainee", 
            "salary": 18500, 
            "raiseEligible": "true" 
        },
        {
            "firstName": "Bill", 
            "department": "HR", 
            "designation": "Executive", 
            "salary": 21200, 
            "raiseEligible": "false"
        }
        ]
    }
console.log(list);

console.log("Problem 3")
const newHire = 
{
    "firstName": "Anna", 
    "department": "Tech", 
    "designation": "Executive", 
    "salary": 25600, 
    "raiseEligible": "false"
}
function addNewHire (obj){
    list.Employees.push(obj);
}
addNewHire(newHire);

console.log(list);

console.log("Problem 4");

let TotalS = 0;
for(i in list.Employees){
   TotalS= TotalS + list.Employees[i].salary;
}
console.log(TotalS);

console.log("Problem 5");
for(i in list.Employees){
    let salary = list.Employees[i].salary;
    if(list.Employees[i].raiseEligible === "true"){
        Raise(salary, i);
    }     
}
function Raise(cSalary, j){
    let rSalary = cSalary+(cSalary*.1);
    list.Employees[j].salary=rSalary;
    list.Employees[j].raiseEligible === "false";
}

console.log(list);
console.log("Problem 6");

for(i in list.Employees){
    if(list.Employees[i].firstName === "Sam" || list.Employees[i].firstName === "Anna" ){
        list.Employees[i].wfh= "true";
    }
    else{
    list.Employees[i].wfh= "false";
    }   
}
console.log(list);