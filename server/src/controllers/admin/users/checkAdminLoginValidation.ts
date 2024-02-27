import Joi from "joi";

export const validateAdminUser = Joi.object().keys({
  name: Joi.string().min(6).messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be an empty field`,
    "string.min": `"name" should have a minimum length of 6`,
    "any.required": `"name" is a required field`,
  }),
  email: Joi.string().email().required().messages({
      "string.base": `"email" should be a type of 'text'`,
      "string.empty": `"email" cannot be an empty field`,
      "any.required": `"email" is a required field`,
    }),
    streetAddress: Joi.string().min(6).messages({
      "string.base": `"streetAddress" should be a type of 'text'`,
      "string.empty": `"streetAddress" cannot be an empty field`,
      "string.min": `"streetAddress" should have a minimum length of 6`,
      "any.required": `"streetAddress" is a required field`,
    }),
    city: Joi.string().min(3).messages({
      "string.base": `"city" should be a type of 'text'`,
      "string.empty": `"city" cannot be an empty field`,
      "string.min": `"city" should have a minimum length of 3`,
      "any.required": `"city" is a required field`,
    }),
    country: Joi.string().min(3).messages({
      "string.base": `"country" should be a type of 'text'`,
      "string.empty": `"country" cannot be an empty field`,
      "string.min": `"country" should have a minimum length of 3`,
      "any.required": `"country" is a required field`,
    }),
    postalCode: Joi.string().max(6).messages({
      "string.empty": `"postalCode" cannot be an empty field`,
      "string.min": `"postalCode" should have a maximum length of 6`,
      "any.required": `"postalCode" is a required field`,
    }),
    phone: Joi.string().max(10).messages({
      "string.empty": `"phone" cannot be an empty field`,
      "string.min": `"phone" should have a maximum length of 10`,
      "any.required": `"phone" is a required field`,
    }),
    password:Joi.string().min(5).required().messages({
      "string.empty": `"password" cannot be an empty field`,
      "string.min": `"password" should have a minimum length of 5`,
      "any.required": `"password" is a required field`,
    }),
    role: Joi.string().messages({ "any.required": "Please provide Role to User" })
});
