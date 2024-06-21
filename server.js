// all imports that are required
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { Csvcontroller } from './src/controller/csv.controller.js';
import ejslayout from 'express-ejs-layouts'
import { upload } from './src/model/multer.config.js';
import { connectdb } from './src/config/dbconnection.js';
import delefile from './src/model/delefile.js';
dotenv.config();

const app = express();
// Parses URL-encoded bodies (as sent by HTML forms).
app.use(express.urlencoded({extended:true}));
//Parses JSON bodies (as sent by API clients).
app.use(express.json());
// Configures the app to use EJS as the view engine.
app.set('view engine','ejs');

app.set('views',path.join(path.resolve(),'src','views'));
// this is to specify whre static file is located
app.use(express.static('src/views'));
app.use(ejslayout)
// stance of the controller class
const csvcontroller = new Csvcontroller();


// Route to handle file upload
app.get('/',csvcontroller.firstpage)
 app.post('/upload', upload.single('csvFile'),csvcontroller.exist,csvcontroller.firstpage);
 
app.get('/openFile',csvcontroller.getdata);
app.post('/openFile',csvcontroller.searchElement);
app.delete('/deleteCsv',delefile);


  
app.listen(process.env.PORT,()=>{
    console.log(`Server is up and running on port ${process.env.PORT}!`);
    // function for connection a database
    connectdb();
})