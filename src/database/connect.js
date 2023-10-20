const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.jcppsou.mongodb.net/database?retryWrites=true&w=majority`);
        return console.log('Conexão com banco de dados realizada com sucesso!');
    } catch (error){
            if (error) {
                return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error);
            }   
    }
}

module.exports = connectToDatabase;