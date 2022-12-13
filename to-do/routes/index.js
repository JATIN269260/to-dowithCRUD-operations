const router=require('express').Router()
const Todo=require('../models/Todo')

//routes will be here...

router.get('/',async (req,resp)=>{
    const allTodo=await Todo.find();
    resp.render('index',{todo:allTodo});
})






module.exports=router;