import express from 'express';
import { CategoryChoose } from '../model/Category.model.js';
const router=express.Router()

router.all("*", (req,res,next)=>{
    next()
})
router.get("/",(req,res)=>{

})

router.post("/", async (req, res) => {
    try {
      const result = await CategoryChoose(res.body);
      res.json({
        status: "success",
        message: "New category success",
        result,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  });
  export default router;