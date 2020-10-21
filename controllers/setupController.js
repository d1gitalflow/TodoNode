const Todos = require('../models/todoModel.js');

//recebe app
module.exports = (app) => {
    //endpoint
    app.get('/api/setupTodos',(req,res)=>{
        //seed the database
        const starterTodos = [
            {
                username:'John',
                todo: 'buy ps5 pre order',
                isDone: false,
                hasAttachment:false
            },
            {
                username:'James',
                todo: 'buy deamon souls',
                isDone: false,
                hasAttachment:false
            },
            {
                username:'Tiagu',
                todo: 'learning node',
                isDone: false,
                hasAttachment:false
            }
            //https://www.json-generator.com/ for random json
        ];
        Todos.create(starterTodos,(err,results)=>{
            res.send(results);
        });
    });

}