import { Schema, model, connect } from 'mongoose';


// interface : type o use kora jai

// guarduian type:
export type Guardian = {
    fatherName : string ;
    fatherOccupation : string ;
    motherNamer : string ;
    motherOccupation : string ;
    guardianNumber : string 
}

//  Main Interface : 
export type Student = {
      
    id : string ;
    name : {
       firstName : string ;
       lastName : string ;
    },

    email : string ;
    gender : 'Male' | 'Female' ;
    age : number ;
    presentAddress : string ;
    permanentAddress : string;
    emergencyContactNo : string ;
    bloodGroup : string ;
    profileImg? : string ;

    guardian : Guardian ;
    isActive : 'Active' | 'Blocked'

}