const configValues = require('./config.json');

module.exports = {
    getDbConnectionString(){
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0.yovzy.mongodb.net/nodetodosample?retryWrites=true&w=majority`
    }
}