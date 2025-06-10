const prisma = require('../prisma/prisma')
// Create New 
exports.create =  async(req,res)=>{
    try{
        const {name, price} = req.body
        const newProduct = await prisma.product.create({
             data:{
                name:name,
                price:price
            }
        })
        res.send(newProduct);

    }catch(err){
        //error
        console.log(err)
        res.send('Server Error').status(500)
    }
};


// find All
exports.list = async(req,res)=>{
    try{
        const listProduct = await prisma.product.findMany()
        res.send(listProduct)
    }catch(err){
        console.log(err)
        res.send('Server Error').status(500)
    }
};


// find by each
exports.read = async(req,res)=>{
    try{
        const {productId} = req.params
        const productEach = await prisma.product.findUnique({
            where:{
                id:Number(productId)
            }
        })
    res.send(productEach)
    }catch(err){
        console.log(err)
        res.send('Server Error').status(500)
    }
};


// update data 
exports.update = async(req,res)=>{
    try{
        const {productId} = req.params
        const {name,price} = req.body
        const updateProduct =  await prisma.product.update({
            where:{
                id:Number(productId)
            },
            data:{
                name:name,
                price:price
            }
        })
        res.send(updateProduct)
    }catch(err){
        console.log(err)
        res.send('Server Error').status(500)
    }
};

// delete Data
exports.remove = async(req,res)=>{
    try{
        const {productId} = req.params
        const deleteProduct = await prisma.product.delete({
            where:{
                id:Number(productId)
            }
        })
        res.send(deleteProduct)
    }catch(err){
        console.log(err)
        res.send('Server Error').status(500)
    }
};