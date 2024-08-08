import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations:ValidationChain[])=>{
    return async (req,res,next) => {
        for(let validation of validations){
            const result = await validation.run(req);
            if(!result.isEmpty){
                break;
            }
        }
            const errors = validationResult(req);
            if(errors.isEmpty()){
               return next()
            }
            res.status(422).json({
                success: false,
                errors: errors.array(),
            })
        
    }
};

export const loginValidator = [
    body("email").trim().isEmail().withMessage("email is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("password is should contain alteast 8 character"),
]

export const signUpValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("email is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("password is should contain alteast 8 character"),
]

export const chatValidator = [
    body("name").notEmpty().withMessage("Message is required"),
   
]