const BaseModel = require('./BaseModel');
const db = require('../config/db');

class User extends BaseModel {
  constructor() {
    super('users');
  }

  async findByEmail(email) {
    const [rows] = await db.query(`SELECT * FROM ${this.tableName} WHERE email = ?`, [email]);
    return rows[0];
  }
}

module.exports = new User();