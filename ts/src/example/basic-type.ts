// 布尔类型
/* let bool:boolean=false;
//bool=true;
//bool=123
console.log(bool);
 */

// 数值类型
// let num:number=123;
// 二进制0b开头
// 八进制0开头
// 十六进制0x开头
/* let  num:number; */
// num='123'
// num=0b1111011; 二进制
// num=0o173; 八进制
// num=0x7b; 十六进制
// num=0b10;
// num=070;
/* num =0x36; */
/*
console.log(num); */
// 字符串类型
/* let str:string;
str='abc';
console.log(str); */
// 数组类型
//写法1
/* let arr1:number[] */
//arr1=[5]
/* arr1=['5'] */
/* console.log(arr1); */
//写法2
/* let arr2:Array<number>; */
/* arr2=[1,3,45];
console.log(arr2); */
/* arr2=['1','3'] */
/* let arr3:(string|number)[]; */
//arr3=[1,"asd"];
//console.log(arr3);
//arr3=[1,"asd",true];
//arr3=["ssdert",1,"gogo",99];
//console.log(arr3);
//元祖类型

/* let tuple:[string,number,boolean]; */
/* tuple=[1,23,34,"3"] */
/* tuple=["1",2,true,444] */
/* tuple=[true,"1",3]
 */
// 枚举类型
/* enum Roles{
  SUPER_ADMIN,
  ADMIN ,
  USER
}
console.log(Roles.SUPER_ADMIN);
console.log(Roles.ADMIN);
console.log(Roles[0]); */
//any 类型
//let value:any;
// value='123';
// value=456;
// value=true;
//console.log(value);
//const arr4:any[]=[1,"we",true,{a:1}]

//console.log(arr4);
// void 类型
/* const consoleText=(text:string):void=>{
  console.log(text)
}
 
let aa=consoleText('123');
console.log(aa); */
/* let v:void */
/* v=undefined; */
/* v=null; */
/* v=123;
console.log(v); */
/* let u:undefined;
 u=123;
 u=undefined;
 console.log(u);
 let n:null;
 n=123; 
 n=null;
console.log(n); */
//nerver 类型
/* const errorFunc = (message: string): never => {
  throw new Error(message);
}
//函数出错 永远不会有返回值 所以可以使用never 作为返回值
const infite=():never=>{
    while(true){
    }
}
//死循环永远不会有返回值 设置返回值为never
let neverVariable=(()=>{
  while (true) {
    
  }
})();

let num:number;
num=neverVariable;
let n:null;
n=neverVariable;
let u:undefined;
u=neverVariable; */

/* let obj={
  name:'lisi'
}
function getObject(obj:object):void{
   console.log(obj);
}
getObject(obj); */

/* const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}

getLength("asd");

getLength(123); */

/* getLength(true); */