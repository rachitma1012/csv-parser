// All imports that are required
import mongoose from 'mongoose';

// Schema for csv file
const csvSchema = new mongoose.Schema({
    csvFile:{type:String,required:true},
    createdAt:{type:Date,default: Date.now()
    }
})
// Model for csv file
export const csvModel = mongoose.model('file',csvSchema);