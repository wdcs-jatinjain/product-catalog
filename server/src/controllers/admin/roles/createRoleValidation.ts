import Joi from "joi";

export const validateRole = Joi.object().keys({
  name: Joi.string().required().min(3).messages({
    "string.base": `"role" should be a type of 'text'`,
    "string.empty": `"role" cannot be an empty field`,
    "string.min": `"role" should have a minimum length of 6`,
    "any.required": `"role" is a required field`,
  }),
  rolePermissions: Joi.array().items(Joi.string()).required().messages({
    "array.base": `"rolePermissions" should be an array`,
    "array.empty": `"rolePermissions" cannot be an empty field`,
  })
  });
