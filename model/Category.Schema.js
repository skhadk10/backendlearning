import mongoose from 'mongoose'
const CategorySchema= mongoose.Schema({
    men:{
        type:String,
        require:true,
        default:""
    },
    women:{
        type:String,
        require:true,
        default:""
    },
},
{
        timestamp:true,
    
})
const categoryModel=mongoose.model("Categorychoose", CategorySchema)
export default categoryModel;