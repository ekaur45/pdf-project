const fs = require("fs");
const path = require("path");
const { makeid } = require("./misc.util");
/**
 * 
 * @param {} file 
 */
const uploadFile = async file =>{

    const publicFolder = "/avatars/"
    const fileLocation =  path.resolve("./public")+publicFolder;
    if(!fs.existsSync(fileLocation)) fs.mkdirSync(fileLocation);
    const uid = makeid(12);   
    const fileName = `${uid}${file.originalname}`;
    if(!fs.existsSync(`${fileLocation}${publicFolder}`)) fs.mkdirSync(`${fileLocation}${publicFolder}`);
    fs.writeFileSync(`${fileLocation}${fileName}`,file.buffer)
    const thumb=fileName;
    return {
        fileName:publicFolder+thumb,
        filesLocation:fileLocation
    }



    // var fileName = "avatars/"+(new Date().getMilliseconds()+file.originalname)
    // fs.writeFileSync(path.join("..","public",fileName),file.buffer);
    // return fileName;
}

module.exports = {uploadFile};