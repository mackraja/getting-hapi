/**
 * @author: Monty Khanna
 */
const _getList = async (table, query) => await table.findAll(query);

const _getListWithCount = async (table, query) => await table.findAndCountAll(query);

const _add = async (table, query) => await table.create(query);

const _update = async (table, payload, queryString) => await table.update(payload, queryString)

const _delete = async (table, queryString) => await table.destroy(queryString);

module.exports = {
  _getList,
  _getListWithCount,
  _add,
  _update,
  _delete,
};
