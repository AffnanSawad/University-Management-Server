import { model, Schema } from "mongoose";
import { Guardian, Student } from "./student.interface";


const GuardianSchema = new Schema<Guardian>({
        
       fatherName : { type: String , required: true },
        fatherOccupation : { type: String , required: true },
        motherNamer : { type: String , required: true },
        motherOccupation :{ type: String , required: true },
        guardianNumber :{ type: String , required: true }  

})


const StudentSchema = new Schema<Student>({

   id : { type: String , required: true },

  name : {
    firstName : { type: String , required: true },
    lastName : { type: String , required: true },
    },


    email : { type: String , required: true },
    gender : ['Male' , 'Female'] ,
    age : { type: Number , required: true },
    presentAddress :{ type: String , required: true },
    permanentAddress :{ type: String , required: true },
    emergencyContactNo :{ type: String , required: true },
    bloodGroup : { type: String , required: true },
    profileImg : { type: String , required: false },

    guardian : GuardianSchema ,

    isActive : ['Active' , 'Blocked']


})

//  Model
export const StudentModel = model<Student>('Student', StudentSchema);