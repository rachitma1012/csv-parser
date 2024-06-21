// All the required imports 
import fs from 'fs';
import { csvModel } from '../config/csvschema.js';
 // this function for deleting the csv file
 const deletefile= async(req,res)=>{
    const id = req.query.id
    try {
      const result = await csvModel.findByIdAndDelete(id);
      if (result) {
        const filepath = `./src/uploads/${result.csvFile}`
        fs.unlink(filepath, (err) => {
          if (err) {
            console.log(err);
          }
        });
        return res.json({
          success: true,
          data: result,
          msg: 'File deleted successfully'
        });
      } else {
        return res.json({
          success: false,
          msg: 'File not found'
        });
      }
    } catch (err) {
      console.error(err);
      return res.json({
        success: false,
        msg: 'Error while deleting the file',
        err: err
      });
    }
    
   }

export default deletefile

