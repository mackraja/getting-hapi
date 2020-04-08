/**
 * @author {[Monty Khanna]}
 */
import db from './db';
import { API_BASE_PATH, constants } from '../constants';

module.exports = {
  basePath: API_BASE_PATH,
  db: db.development,
  constants,
};