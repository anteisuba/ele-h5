/**
 * 基础概念
 * 基础类型:String,num,boolean
 * 复杂类型:Array,Object
 * 
 * 对象类型:匿名,接口interface,类型别名 type
 * 函数 function
 * 类 class
 * 枚举 enum
 * 
 * 类型判断 type inference
 * 类型断言
 * 泛型 generic:对象类型,函数,类
 * 
 * 
 */

const str1: string = 'hellow world'
const num: number = 1
const bool: boolean = true
const arr: number[] = [1, 2, 3]
arr[0] = 0

const obj: { x: number; y: number } = { x: 1, y: 1 }

//可选字段 ?
const optionalObj: { x: number, y?: number } = { x: 1 }
//optionalObj.y = 'y'
optionalObj.y = 2
//optionalObj.z = 2
console.log(optionalObj.y)

//对象类型
//接口
interface IType {
    str: string
}

//类型别名
type TType = {
    str: string
}

//类型判断
let n = 1

//类型断言
//console.log((x.contents as string).toLowerCase())

//泛型
interface IGeneric<Type> {
    test: Type
}

//特殊类型 void,any,unknown,never
//any
const any:any = {}






