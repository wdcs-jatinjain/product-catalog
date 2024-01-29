import Joi from 'joi'

export const checkAdminValidator = Joi.object().keys({
    name: Joi.string().messages({"any.requires":"Please provide valid name"}),
    email: Joi.string().email().required(),
    password: Joi.string().required(), 
<<<<<<< HEAD
})
=======
})
>>>>>>> 97462e939d33d92d290a993a0f7e18414737dd0a
