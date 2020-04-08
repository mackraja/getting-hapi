/**
 * @author: Monty Khanna
 */
import bcrypt from 'bcrypt';

const generatePass = async (pass) => {
  const generateSalt = await bcrypt.genSalt(10);
  const generateHash = await bcrypt.hash(pass, generateSalt);

  return generateHash;
};

const comparePass = async (requestPass, dbPass) => await bcrypt.compare(requestPass, dbPass);

module.exports = {
  generatePass,
  comparePass,
};
