import Joi from 'joi'

export const checkAdminValidator = Joi.object().keys({
    name: Joi.string().messages({"any.requires":"Please provide valid name"}),
    email: Joi.string().email().required(),
    password: Joi.string().required(), 
})