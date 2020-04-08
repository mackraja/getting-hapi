/**
 * @author: Monty Khanna
 */
module.exports = {
  // auth: 'jwt',

  tags: ['api', 'Session'],

  description: 'Destroy Session',

  notes: 'Logout user from system',

  handler: (request, h) => {
    // Hapi Auth Jwt2
    // unset the state from client side.

    return h.response('User Successfully Logout.');
  },
};
