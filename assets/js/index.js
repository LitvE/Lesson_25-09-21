

//вычисляемые свойства

const userName = 'Tom';
const userId = 12345;
const obj1 = {};

obj1[userName + userId] = 'object user1';

console.log(obj1);

const value = obj1[userName + userId];

console.log(value);

console.log('********************');

// for .... in.. вывводит свойства 
let obj = {a:1, b:2, c:3};

for (let prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// for .... of.. вывводит значения свойства

function myArray (){
    this.length = 0;
};

const arrayProto = new myArray();

arrayProto.push = function push(){
    for (let value of arguments){
        this[this.length++] = value;
    }
    return this.length;
};

arrayProto.push = function pop(){

    if(this.length > 0){
        const res = this[--this.length];
        delete this[this.length];
        return res;
    }
};

myArray.prototype = arrayProto;
