const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      
      function trim(e){
        espacos = /\s/g;
        return e.replace(espacos, "");
      }
      
      const nameFinal = trim(name);

      cb(null, `${nameFinal}-${Date.now()}${ext}`);
    },
  }),
};