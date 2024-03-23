/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary()
    table.integer('dish_id').references('dishes.id').onDelete('CASCADE')
    table.string('name')
    table.string('description')
    table.string('ingredients')
    table.string('instructions')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('recipes')
}
