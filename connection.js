const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://Admin:Admin123@cluster0.g7kfhqo.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connection established' + ' ' + con.connection.host)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB