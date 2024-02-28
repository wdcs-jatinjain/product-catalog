import Joi from "joi";

export const validateAddedRole = Joi.object().keys({
  name: Joi.string().required().min(3).messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be an empty field`,
    "string.min": `"name" should have a minimum length of 3`,
    "any.required": `"name" is a required field`,
  }),
//  rolePermissions: Joi.string().required().messages({ "any.required": "Please provide Role to User" })
});
