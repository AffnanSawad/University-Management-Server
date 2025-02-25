import { Request, Response } from "express"
import { StudentServices } from "./student.service"



const CreateStudent = async( req : Request , res : Response)=>{
    
    // Try-Catch
    try{
      
         
        const student = req.body.student 
    
        // will send service func();
        const result = await StudentServices.getStudentIntoDB(student)
    
    
        res.status(200).json({
            success : true ,
            message : 'Student Is Created Successfully',
            data:result
        })
    


    }
    catch(error){
        console.log(error)
    }


   
}


//  get data from service

const getAllStudents = async(req : Request , res: Response)=> {

try{
    const  result = await StudentServices.getAllStudentIntoDB();

    res.status(200).json({
        success : true ,
        message : 'Student retrieved Successfully',
        data:result
    })
}
catch(error){
    console.log(error)
}
}

// exporting
export const studentControllers = {
    CreateStudent ,
    getAllStudents
}