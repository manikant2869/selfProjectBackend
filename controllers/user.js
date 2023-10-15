const User = require("../services/user")
const utils = require("../utils/utils")
const monitor = require("../monitoring/monitor");
const { TIME } = require("sequelize");

module.exports = {
    add: async function(req,res){
       
        let result = await User.add(req.body);
        await new Promise((r)=>{
            setTimeout(5000)
            
        })
         monitor.count_signup.inc({"route":"/user/signup","method":"POST"})
        monitor.gauge.dec({route: "/user/signup" , method : "POST"})
        utils.sendResponse(result,req,res);
    },
    login: async function(req,res){
        
        monitor.gauge.inc({route: "/user/signup" , method: "POST"})
        
        let result = await User.login(req.body);
        let Success = ()=> {}
        await new Promise((success)=>{
            setTimeout(()=> {
                success()
            },5000)


        //    success()
        })
        monitor.h.labels({code: "anything"}).observe(0.4)
        const end  = monitor.summary.startTimer();
        end()
        monitor.count_login.inc({"route":"/user/login","method":"POST"})
        monitor.gauge.dec({route: "/user/signup" , method : "POST"})
        utils.sendResponse(result,req,res);
    }
}