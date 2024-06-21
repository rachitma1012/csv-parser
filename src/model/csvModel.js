import csv from 'csv-parser';
import fs from 'fs';
import { csvModel } from '../config/csvschema.js';


export class CsvModel {
//For getting all the files from the database
  static async allfiles(){
    try{
    const all = await csvModel.find();
    if(all){
      return{
        data:all,
        success:true
      };
    }else{
      return{
      success:false,
      err:"cannot get data from database"
      }
    }
  }catch(err){
    return {
      err:err,
      success:false
    }
  }
  }
  // this function for parsing the csv file 
  static async getOne(id) {
    try{
    const result = await csvModel.findById(id);
     const csvdata = `./src/uploads/${result.csvFile}`;

    // Return a promise that resolves with the parsed data
    return new Promise((resolve, reject) => {
      const parsedData = [];

      fs.createReadStream(csvdata)
        .pipe(csv())
        .on('data', (row) => {
          parsedData.push(row);
          resolve(parsedData)
        })
        .on('error', (error) => {
          console.error('Error while processing CSV file:', error);
          reject(error);
        });
    });
  }catch(err){
    console.log(err);
  }
  }
 
}
















//  import fs from'fs';
//  import csvparser from 'csv-parser';

// // Define the path to your CSV file
// const csvFilePath = '../src/uploads';

// // Create a readable stream from the CSV file
// const readableStream = fs.createReadStream(csvFilePath);

// // Pipe the readable stream through the CSV parser
// readableStream.pipe(csvparser())
//   .on('data', (row) => {
//     // Process each row of the CSV file
//     console.log(row);
//   })
//   .on('end', () => {
//     // This callback function is called when all rows have been read
//     console.log('CSV file successfully processed');
//   });
