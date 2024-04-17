require('dotenv').config()

const connectDB=require('./db/connect');
const Product=require('./models/product');

const jsonProducts=require('./products.json');

const start=async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Sucess!');
        process.exit(0); //0(zero) means that everything went well and we´re exiting the process

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start() //at terminal: node populate.js