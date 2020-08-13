import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('binary', table => {
    table.increments('id').primary();
    table.string('version').notNullable();
    table.string('filename').notNullable();
    table.string('originalname').notNullable();
    table.string('destination').notNullable();
    table.string('size').notNullable();

  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('binary');
}
