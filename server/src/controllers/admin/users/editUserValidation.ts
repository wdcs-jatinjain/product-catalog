import Joi, { LanguageMessages } from "joi";

export const validateEditUser = Joi.object().keys({
  name: Joi.string()

    .min(3)
    .messages({
      "string.base": `"name" should be a type of 'text'`,
      "string.empty": `"name" cannot be an empty field`,
      "string.min": `"name" should have a minimum length of 6`,
    }),
  email: Joi.string()
    .email()

    .messages({
      "string.base": `"email" should be a type of 'text'`,
      "string.empty": `"email" cannot be an empty field`,
    }),
  role: Joi.string().messages({
    "string.empty": `"role" cannot be an empty field`,
  }),
});
