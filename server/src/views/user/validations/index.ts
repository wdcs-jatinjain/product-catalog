import Joi from 'joi'

export const checkAdminValidator = Joi.object().keys({
    name: Joi.string().messages({"any.requires":"Please provide valid name"}),
    email: Joi.string().email().required(),
    password: Joi.string().required(), 
})


export const checkCustomerValidator = Joi.object().keys({
    name: Joi.string().required().messages({"any.requires":"Please provide valid name"}),
    email: Joi.string().email().required().messages({"any.requires":"Please provide valid EmailID"}),
    password: Joi.string().required().messages({"any.requires":"Please provide Correct Password format"}),
    phone: Joi.string().required().messages({"any.requires":"Please provide valid phone number format"}),
    zipcode: Joi.string().required().messages({"any.requires":"Please provide valid Zipcode"}), 

})