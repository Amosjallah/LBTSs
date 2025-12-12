const db = require('../config/db');

class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async findAll(filters = {}, limit = 100, offset = 0) {
    let query = `SELECT * FROM ${this.tableName}`;
    const params = [];

    if (Object.keys(filters).length > 0) {
      const conditions = Object.keys(filters)
        .map((key) => `${key} = ?`)
        .join(' AND ');
      query += ` WHERE ${conditions}`;
      Object.values(filters).forEach((val) => params.push(val));
    }

    query += ` LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    const [rows] = await db.query(query, params);
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
    return rows[0];
  }

  async create(data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map(() => '?').join(', ');

    const query = `INSERT INTO ${this.tableName} (${keys.join(', ')}) VALUES (${placeholders})`;
    const [result] = await db.query(query, values);
    
    return { id: result.insertId, ...data };
  }

  async update(id, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    
    if (keys.length === 0) return null;

    const setClause = keys.map((key) => `${key} = ?`).join(', ');
    const query = `UPDATE ${this.tableName} SET ${setClause} WHERE id = ?`;
    
    // Add id to the end of values array
    values.push(id);

    await db.query(query, values);
    return this.findById(id);
  }

  async delete(id) {
    const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
    const [result] = await db.query(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = BaseModel;