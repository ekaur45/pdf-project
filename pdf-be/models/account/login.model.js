class LoginModel {
    constructor(model={}){
        this.email = model.email ??"";
        this.password = model.password??"";
        this.validate =function(){
            return this.email && this.password;
        }
        this.params = [this.email,this.password];
    }
}

module.exports = {LoginModel};