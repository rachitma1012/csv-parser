// All the required imports 
import multer from 'multer';
import { Csvcontroller } from '../controller/csv.controller.js';
const controller = new Csvcontroller();
// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, './src/uploads'); // Destination folder for uploaded files
  },
  filename: async function (req,file,cb) {
  
       cb(null, file.originalname)
    }
  
})

// File upload limits and storage configuration
export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit file size to  MB
  },
  fileFilter: function (req, file, cb) {
    // Accept only CSV files
    
    if (file.mimetype === 'text/csv' || file.mimetype === 'application/vnd.ms-excel') {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'));
    }
  }
});


