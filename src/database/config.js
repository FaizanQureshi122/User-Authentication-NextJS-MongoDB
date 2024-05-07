import mongoose from 'mongoose'

const Connection = async ()=>{
    try{
   await mongoose.connect(process.env.MONGODB_URI,{ useUnifiedTopology : true });
    console.log('Database connected Successfully ');
    }catch(error){
   console.log('Error while connection with the database', error.message);

    }
}
export default Connection;
