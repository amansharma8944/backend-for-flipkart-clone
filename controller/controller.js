import productsmodel from "../database/model/productSchema.js"
import modelofuser from "../database/model/userSchema.js"



export const signup=async(req,res)=>{

    // console.log(req.body)
try {
  const newdataa=await modelofuser.find({Email:req.body.Email})
  // console.log(newdataa)
  if (newdataa.length>0) {
    // console.log("ander aa gya hu main")
    return res.status(400).json({msg:"already exist"})
  }


let data = await modelofuser(req.body)
// let data =modelofuser.save()
let newdata=await data.save()
// let data=await modelofuser.Save()
// console.log(data)
res.status(200).json(newdata)
  
} catch (error) {
  
}

         
}




export const login=async(req,res)=>{
  // console.log(req.body)
 try {
  const newdata=await modelofuser.findOne({Email:req.body.Email})

  console.log(newdata)
if(newdata?._id){

       if (newdata.Password===req.body.Password) {
            
        return res.status(200).json({msg:newdata})
       }
       else{
        return res.status(400).json({msg:"password wrong"})
       }
 
}
else{
  return res.status(400).json({msg:"email not found"})
}

 } catch (error) {
  
 }


}



export const products=async(req,res)=>{
try {
  let data=  await productsmodel.find({});
// console.log(data)
return res.status(200).send(data)
} catch (error) {
  
}


} 



export const productDetail=async(req,res)=>{
   
   try {
    console.log(req.params.id)
    let data=await productsmodel.find({id:req.params.id})
  return res.send(data)
   } catch (error) {
    
   }
   

}