const Todos = require('../models/todoModel.js');
const bodyParser = require('body-parser'); 

module.exports = (app) => {
    //define middleware
    //These two parse whats inside the http request 
    const jsonParser = bodyParser.json();
    app.use(jsonParser);
    const urlencodedParser = bodyParser.urlencoded({ extended: false });
    app.use(urlencodedParser);

    //The /:uname/ api.
    app.get('/api/todos/:uname',(req,res)=>{
        //pass an obj that finds the params im looking for
        //whatever is inside ':/uname/' will find
        //here is 1st parameter a JS obj because its a 'get' http req(it comes from URL':/uname/)
        Todos.find({username:req.params.uname},(err,todos)=>{
            if(err) throw err;
            res.send(todos)
        })
    });
    //The /:id/ api.
    app.get('/api/todo/:id',(req,res)=>{
        Todos.findById({_id:req.params.id},(err,todo)=>{
            if(err) throw err;
            res.send(todo);
        });
    });

    //posting 'todo' has to use .post, has a http req and if it has an id it updates the props
    app.post('/api/todo',(req,res)=>{
        //HTTP req body by id
        //body is going receive JSON, but 'body' is going to be converted to a Js obj
        //req.body.id -> string
        //if it exists -> update
        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id,{
                ///props that are going to be updated
                todo: req.body.todo, isDone: req.body.isDone,
                hasAttachment:req.body.hasAttachment},(err,todo)=>{
                    if(err) throw err;

                    res.send('Success!')
                });
        }
        //no id, creates a newTodo and save to mongoDB
        else{
            let newTodo = Todos({
                username:'Test',
                todo: req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            })
            newTodo.save((err)=>{
                if(err) throw err;
                res.send('Sucess!!');
            })
        }
        //http req who's method is delete, so it can have the same url
        //remove by existing ID
        app.delete('/api/todo',(req,res)=>{
            Todos.findByIdAndRemove(req.body.id,(err)=>{
                if(err) throw err;
                res.send('Sucess!!!');
            })
        })

    })








}