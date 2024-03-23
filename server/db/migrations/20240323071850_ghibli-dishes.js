/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('dishes', (table) => {
    table.increments('id').primary()
    table.integer('film_id').references('films.id').onDelete('CASCADE')
    table.string('name')
    table.string('image_url')
    table.string('original_name')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('dishes')
}
