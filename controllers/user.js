const User = require("../services/user")
const utils = require("../utils/utils")
module.exports = {
    add: async function(req,res){
        let result = await User.add(req.body);
        utils.sendResponse(result,req,res);
    },
    login: async function(req,res){
        let result = await User.login(req.body);
        utils.sendResponse(result,req,res);
    }
}