// All imports that are required
import { csvModel } from "../config/csvschema.js";
import { CsvModel } from "../model/csvModel.js";

// class for controller
export class Csvcontroller{
// this function for rendering the home page
   async firstpage(req,res){
      const result = await CsvModel.allfiles();
      if(result.success){
       return res.render('index',{data:result.data})
      }
      
    }
    // This function for rendering the table and for pagination
   async getdata(req,res){
    const {id,page} = req.query;
    const data = await CsvModel.getOne(id);
    const pages = page||1;
    const limit = 50;
    const startIndex = (pages - 1) * limit;
    const endIndex = pages * limit;
    const paginatedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / limit);
    console.log(totalPages)
   return res.render('openTable',
   {data:paginatedData,
    totalPages: totalPages,
    currentPage: pages,
    id:id
   });
  
    }
// this function for uploading the csv file
    async exist(req,res,next){
      const {originalname} = req.file;
      const result = await csvModel.findOne({csvFile:originalname});
      if(result){
        return res.render('exist',{msg:"File is already exist!",code:409});
      }
      else{
        const data = new csvModel({csvFile:originalname});
        await data.save();
      }
      next();
   }
  // This function for searching an specfic memeber on the basis of the email
   async searchElement(req,res){
    const {id} = req.query;
    const {email} = req.body;
    const data = await CsvModel.getOne(id);
    const element  = await data.filter((element)=>element.Email===email);
        if(element.length!=0){
          return res.render('searchElement',{data:element})
        }else{
          return res.render('exist',{msg:"File not Found",code:404});
        }
   }
}