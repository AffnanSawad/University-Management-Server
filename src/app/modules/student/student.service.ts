import { Student } from "./student.interface"
import { StudentModel } from "./student.schema_model"

const getStudentIntoDB = async( student : Student)=>{
   
 const result = await StudentModel.create(student);

 return result ;
}


const getAllStudentIntoDB = async()=>{
   
    const result = await StudentModel.find();
   
    return result ;
   }

export const StudentServices = {
     getStudentIntoDB,
     getAllStudentIntoDB
}