import multer from "multer";


export const uploadFile = multer({dest: './database/local-storage'}).single('binary');
