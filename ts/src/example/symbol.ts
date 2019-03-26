/* const s=Symbol();
console.log(s);

const s2=Symbol();
console.log(s2); */



//console.log(s===s2);
/* const s4=Symbol('lison'); */

/* const s4=Symbol('lison');

console.log(s3===s4);

const s5=Symbol({a:"123"});
console.log(s5); */
/* console.log(s4.toString());
console.log(Boolean(!s4)); */ 
/* let prop='name'
const info={
  //name:'lison'
  [`My${prop}is`]:'lison'
}
/* console.log(info); */
/* const s5=Symbol('name'); */
/* const info2={
   [s5]:'lison',
   age:18,
   sex:"man"
}
console.log(info2);
info2[s5]='hahaaaa'; */
/*console.log(info2); */
/* info2.s5='123' */
/* for(const key in info2){
  console.log(key);
} */
/* console.log(Object.keys(info2)); */
/* console.log(Object.getOwnPropertyNames(info2)); */
// 将对象转化为json 字符串
/* console.log(JSON.stringify(info2)) */
/* console.log(Object.getOwnPropertySymbols(info2)); */
/* console.log(Reflect.ownKeys(info2)); */

/* const s1=Symbol("hehe");
const s8=Symbol.for('lison');
const s9=Symbol.for('aaa'); */
/* console.log(s8===s9); */

// console.log(Symbol.keyFor(s1));

/* const obj1={
  [Symbol.hasInstance] (otherObj){
        console.log(otherObj);
  }
}

console.log({a:'a'} instanceof <any>obj1 ); */
/* let arr=[1,2];
console.log([].concat(arr,[3,4]))
arr[Symbol.isConcatSpreadable]=false
console.log([].concat(arr,[3,4]))  */

//Symbol.search
/* let obj3={
  [Symbol.match](string){
      console.log(string.length);
  },
  [Symbol.split](string){
    console.log('split',string.length)
  }
}
'abcde'.match(<RegExp>obj3); 

'abcde'.split(<any>obj3); */