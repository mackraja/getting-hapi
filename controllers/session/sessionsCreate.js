/**
 * @author: Monty Khanna
 */
import joi from 'joi';
import Boom from 'boom';
import jwt from 'jsonwebtoken';
import { sessionService } from '../../services'; // eslint-disable-line
import { hashPassword, i18n } from '../../helpers'; // eslint-disable-line

const { comparePass } = hashPassword;

module.exports = {
  plugins: {
    'hapi-swagger': {
      payloadType: 'form',
    },
  },

  tags: ['api', 'Session'],

  description: 'Authenticate User',

  notes: 'Authenticate User',

  validate: {
    payload: {
      username: joi.string()
        .max(250)
        .required()
        .description(i18n.__('controllers.session.payload.username')),

      password: joi.string()
        .max(250)
        .required()
        .description(i18n.__('controllers.session.payload.password')),
    },
    options: { abortEarly: false },
  },

  handler: async (request, h) => {
    const { payload } = request;
    const { username, password } = payload;
    let data = {};

    try {
      const user = await sessionService.authenticate(username);

      // Check User Exist or Not
      if (!user) {
        return Boom.unauthorized(i18n.__('controllers.session.invalidUsername'));
      }

      // Match Password
      const match = await comparePass(password, user.password);
      if (!match) {
        return Boom.badRequest(i18n.__('controllers.session.invalidPassword'));
      }

      /**
       * Authentications Methods: Hapi Auth Jwt2
       */

      //  If encrypted password not saved in db then uncomment below lines and define "generatePass" method
      //  const newpass = await generatePass(password);
      //  console.log('newpass ----- ', newpass);

      const credentials = { id: user.id, username };
      const Token = jwt.sign(credentials, process.env.JWT_KEY, { algorithm: 'HS256', expiresIn: '1h' });
      data = { id: user.id, Token };
    } catch (e) {
      // throw new Boom(e);
      Boom.badRequest(i18n.__('controllers.session.createUser'), e);
    }
    return h.response(data);
  },
};
