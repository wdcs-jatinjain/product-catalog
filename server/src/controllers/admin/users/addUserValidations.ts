import Joi from "joi";

export const validateAddedUser = Joi.object().keys({
  name: Joi.string().required().min(6).messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be an empty field`,
    "string.min": `"name" should have a minimum length of 6`,
    "any.required": `"name" is a required field`,
  }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.base": `"email" should be a type of 'text'`,
      "string.empty": `"email" cannot be an empty field`,
      "any.required": `"email" is a required field`,
    }),
  role: Joi.string()
    .required()
    .messages({ "any.required": "Please provide Role to User" }),
});
