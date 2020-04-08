/**
 * @author: Monty Khanna
 */
import db from '../db'; // eslint-disable-line
import Sequelize from 'sequelize';
const { User } = db.models;
const Op = Sequelize.Op;

exports.authenticate = async username => await User.findOne({
  attributes: ['id', 'password'],
  where: { [Op.or]: { username, email: username } },
});

exports.validUser = async id => await User.findByPk(id);
