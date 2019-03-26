/* function add(arg1: number, arg2: number): number {
  return arg1 + arg2
}
const add = (arg1: number, arg2: number) => arg1 + arg2 */
/* let add:(x:number,y:number)=>number
add=(arg1:number,arg2:number):number=>arg1+arg2
add=(arg1:string,arg2:string)=>arg1+arg2 */
/* interface Add {
  (x: number, y: number): number
}
 */
/* type Add=(x:number,y:number)=>number
let addFunc:Add
addFunc=(arg1:number,arg2:number)=>arg1+arg2; */
/* 
type AddFunction = (arg1: number, arg2: number, arg3: number) => number
let addFunction: AddFunction
addFunction = (x: number, y: number) => x + y
addFunction = (x: number, y: number, z: number) => x + y + z */
/* let addFunction = (x: number, y: number = 3) => x + y */
/* console.log(addFunction(1, 7)); */
/* console.log(addFunction(1, '4')); */
/* const handleData=(arg1:number,...args:number[])=>{
   console.log(args);
}

handleData(1,2,3,4) */
/* function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map((item) => Number(item))
  }
} */
/* let add: (x: number, y: number) => number
add = (arg1: number, arg2: number): number => arg1 + arg2
add = (arg1: number, arg2: number) => arg1 + arg2; */
/* interface Add {
  (x: number, y: number) => number
} */
/* let addFunc:Add
addFunc=(arg1:number,arg2:number)=>arg1+arg2
console.log(addFunc(1, 2)) */
/* type Add = (x: number, y: number) => number

let addFunc: Add
addFunc = (arg1: number, arg2: number) => arg1 + arg2
console.log(addFunc(1,2)); */

/* type Add = (arg1: number, arg2: number=10, arg3?: number) => number
let AddFunc: Add
/* AddFunc = (x: number, y: number) => x + y  */
// AddFunc = (x: number, y: number, z: number) => x + y + z
/* AddFunc = (x: number, y: number, z?: number) => x + y + z */
//console.log(AddFunc(1, 2, 3));
/* 
console.log(AddFunc(1, 2, 4)); */ * /

// const addFunc : (x: number, y: number = 3): number => number
const addFunc1 = (x: number, y: number ) => x + y
//console.log(addFunc1(1, 2))