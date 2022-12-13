const { application } = require('express');
const { TopologyDescriptionChangedEvent } = require('mongodb');
const Todo=require('../models/Todo')
const router=require('express').Router()
const bosyParser=require('body-parser');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended:true}));


//routes
router.post('/add/todo',(req,resp)=>{
    const {todo}=req.body;

    const newTodo=new Todo({todo})

    //save todo
    newTodo.save()
    .then(()=>{
        console.log("Successfully added Todo");
        resp.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.get('/delete/todos/:_id',(req,resp)=>{
    const{_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log('deleted Todo Successfully');
        resp.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post('/update/todo/:_id',(req,resp)=>{
    const{_id}=req.params;
    Todo.updateOne({_id},{$set:{todo:req.body.todo}})
    .then(()=>{
        console.log("task Update successfully");
        resp.redirect('/')
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post('/completed/:_id',(req,resp)=>{
    const{_id}=req.params;
    Todo.updateOne({_id},{$set:{isCompleted:true,todo:"Task Competed!!"}})
    .then(()=>{
        resp.redirect('/');
    })
})

module.exports=router;