import multer from "multer";


export const uploadFile = multer({dest: './src/database/local-storage'}).single('binary');
