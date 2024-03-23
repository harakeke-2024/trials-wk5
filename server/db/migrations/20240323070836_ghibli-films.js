/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('films', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('release_year')
    table.string('banner_url')
    table.string('director')
    table.string('original_title')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('films')
}
