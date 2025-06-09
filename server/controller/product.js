exports.create =  async(req,res)=>{
    try{
        const {name, price} = req.body
        console.log(name)
        res.send('Hello Controller Create')
    }catch(err){
        //error
        console.log(err)
    }

};
exports.list = async(req,res)=>{
    try{
        res.send('Hello Controller List Get')
    }catch(err){
        console.log(err)
    }
};
exports.read = async(req,res)=>{
    try{
        res.send('Hello Controller Read')
    }catch(err){
        console.log(err)
    }
};
exports.update = async(req,res)=>{
    try{
        res.send('Hello Controller Update')
    }catch(err){
        console.log(err)
    }
};
exports.remove = async(req,res)=>{
    try{
           res.send('Hello Controller Delete')
    }catch(err){
        console.log(err)
    }
};