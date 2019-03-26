/* const getFullName=({firstName:string,lastName:string})=>{
  return `${firstName}  ${lastName}`
}
console.log(getFullName({
  firstName:'haha',
  lastName:'aaa'
})); */
/*  const getFullName = ({ firstName:any, lastName:any }) => {
     return `${firstName} ${lastName}`
}
 console.log(getFullName({
     firstName: 'haha',
     lastName: 18,
 }))
 getFull */
 // 方法中的接口参数个数和类型必须严格按照接口的约定来
/*  interface INameInfo {
  firstName:string,
  lastName:number
 }
 const getFullName = ({ firstName, lastName }:INameInfo):string => {
  return `${firstName} ${lastName}`;
}

console.log(getFullName({
  firstName:"hjaha",
  lastName:17
}))
 */
/* interface IVegetable {
  color?:string,
  readonly type:string
}

let vegetableObj:IVegetable={
  type: 'tomato'
}
vegetableObj.type="123" */

/* const getVegetables=({color,type}:IVegetable)=>{
  return `A ${color ? (color + ' ') : ''}${type}`
}
const vegetableInfo = {
  type: 'tomato',
  color:'red'
}
vegetableInfo.type='123'

console.log(getVegetables(vegetableInfo)); */

/* interface ArrInter {
  0:number,
 readonly 1:string
}

let arr:ArrInter=[1, "3", 3 , 4 ];
arr[1]="asd"
console.log(arr); */
/* interface RoleDic{
  [id:number]: string 
}
const role1:RoleDic={
  3:'123'
}
console.log(role1); */
//对象的键只能为数字类型 值为string 类型
/* interface IRoleDic {
  [id: string]: string
}
const role2: IRoleDic = {
  a: 'super_admin',
  1: 'admin',
  "456":"44444",
  456:'dada'
}
console.log(role2)
//
const role2 = {
  a: 'super_admin',
  1: 'admin',
  "456":"44444",
  456:'dada'
}
//字符串类型的key和number 类型的key 最后在 对象上体现的都一样。 最后只会有最后一个key 对应的值 第一个键被覆盖
console.log(role2);
 */
interface Vegetables {
  color: string
}
interface Tomato extends  Vegetables{
  radius: number
}
interface Carrot extends Vegetables{
  length:number
}

const tomato:Tomato={
  radius:1,
  color:'asda'
}
const carrot:Carrot={
  length:123,
  color:"123"
}