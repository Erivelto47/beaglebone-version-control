import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('mac_address', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('mac_address').notNullable();
    table.string('description').notNullable();

    table.integer('binary_id')
      .nullable()
      .references('id')
      .inTable('binary')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('mac_address');
}
