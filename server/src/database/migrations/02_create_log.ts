import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('log', table => {
    table.increments('id').primary();
    table.date('date').notNullable();

    table.integer('mac_id')
      .notNullable()
      .references('id')
      .inTable('mac_address')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.integer('binary_id')
      .notNullable()
      .references('id')
      .inTable('binary')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });

}

export async function down(knex: Knex) {
  return knex.schema.dropTable('log');
}
