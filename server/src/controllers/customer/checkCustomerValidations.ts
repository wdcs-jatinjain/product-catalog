import Joi from 'joi'

export const validateCustomerRegistration = Joi.object().keys({
    name: Joi.string().required().messages({"any.requires":"Please provide valid name"}),
    email: Joi.string().email().required().messages({"any.requires":"Please provide valid EmailID"}),
    password: Joi.string().required().messages({"any.requires":"Please provide Correct Password format"}),
    phone: Joi.string().required().messages({"any.requires":"Please provide valid phone number format"}),
    zipcode: Joi.string().required().messages({"any.requires":"Please provide valid Zipcode"}), 

})