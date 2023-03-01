const bcrypt = require("bcrypt");
class UserModel{
    constructor(obj={}){
        this.firstName = obj.firstName??"";
        this.lastName = obj.lastName??"";
        this.username = obj.username??"";
        this.email = obj.email??"";
        this.userType = obj.userType??2;
        this.password = obj.password??"";
        this.validate = function(){
            return this.username && this.email && this.userType && this.password;
        }
        this.params =[this.firstName,this.lastName,this.username,this.email,this.userType,bcrypt.hashSync(this.password,10)];

    }
}
module.exports = {UserModel};