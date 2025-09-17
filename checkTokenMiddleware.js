// let myToken="12345"

let checkToken=(req,res,next)=>{
    console.log(req.query.token)
    if(req.query.token==" " || req.query.token==undefined){
        return res.send(
        {
        status:0,
        // msg:"Please fill the token"
        }
    )
    }
    if(req.query.token!=process.env.myToken){
        return res.send(
        {
        status:2,
        msg:"Please fill the correct token"
        }
    )
    }
    next();
}

module.exports={checkToken}
