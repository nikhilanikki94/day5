// function multiply(num1,num2){
//     return num1*num2;
// }
// let result=multiply(2,5);
// console.log(result);

// let mul= function(num1,num2){
//     return num1*num2;
// }
// let result=mul(5,5);
// console.log(result);

// ARROW FUNCTION
//  let mul=(num1,num2)=>{
//      return num1*num2;
//  }
//  let result=mul(10,5);
// console.log(result);

// let sq=(num)=>{
//     return num*num;
// }
// let square=sq(15);
// console.log(square);

// let getDetails=(id,callback)=>{
//     console.log(" inside the function");
//     console.log("id:"+id);
//     callback();
// }
// getDetails(1,()=>{
//  console.log("finished");
// });

// let getData=(id,callback)=>{
//     console.log("inside the function");
//     console.log("id:"+id);
//     callback({id:id,name:'meera'});
// }
// getData(1,(person)=>{
//     console.log(person);
//     console.log("finished");
// });


//ASYNC

// console.log("before");
// setTimeout(()=>{
//     console.log("inside");
// },2000);
// console.log("after");
// console.log("tody");


//ASYNC USING FUNCTIONS


// function getUser(id){
//     setTimeout(()=>{
//         return ({id:id,name:'meera'});
//     },2000);
// }
// console.log("before");
// const user=getUser(1);
// console.log(user);
// console.log("after");


// async with callback

// function getUser(id,callback){
//     setTimeout(()=>{
//         callback({id:id,name:"meera"});
//     },2000);
// }
// console.log("before");
// getUser(1,function(user){
//     console.log(user);
// });
// console.log("after");




// var person=new Object();
// person.setValues=function(n,a){
//    this.name=n;
//    this.age=a;
// };
// person.getValues=function(){
//     console.log("name is: "+this.name);
//     console.log("age is : "+this.age);
// };
// person.setValues("nikhila",28);
// person.getValues();


//USING CONSTRUCTOR

// function person(fname,lname){
//     this.f_name=fname;
//     this.l_name=lname;
// }
// person.prototype.getDetails=function(){
//     console.log(" the name of the person is "+this.f_name+ this.l_name);
// }
// let person1=new person("mukil","latiyan");
// let person2=new person("rahul","avasti");
// person1.getDetails();
// person2.getDetails();




// const coder={
//     isStudying : false,
//     PrintIntroduction:function(){
//         console.log(`my name is ${this.name}. Am I Studying?:${this.isStudying}.` )
//     }
// }
// var m1=Object.create(coder);
// m1.name="nikhila";
// m1.isStudying='true';
// m1.PrintIntroduction();


//USING CLASS
//  class vehicle{
//      constructor(name,maker,engine){
//          this.name=name;
//          this.maker=maker;
//          this.engine=engine;
//      }
//      getDetails(){
//          return(` the name of the bike is ${this.name}.`)
//      }
//      }
//      // making object with the help of constructor
//      let bike1= new vehicle('hayabusa','suzuki','1340cc');
//      let bike2=new vehicle('ninja','kawasaki','998cc');
//      console.log(bike1.name);
//      console.log(bike2.maker);
//      console.log(bike1.getDetails());


//INHERITANCE

class person{
    constructor(name){
        this.name=name;
    }
}
class student extends person{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    toString(){
        return (`name of the person :${this.name},Student id:${this.id}`);
    }
}
let student1=new student("mukil",22);
console.log(student1.toString());
