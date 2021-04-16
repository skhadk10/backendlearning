import categorySchema from './Category.Schema.js';

 export const CategoryChoose= catObj=>{
    return new Promise((resolve,reject)=>{
        try {
            const result= categorySchema(catObj)
            .save()
            resolve(result)
            
        } catch (error) {
            reject(error)
        }
    })
}