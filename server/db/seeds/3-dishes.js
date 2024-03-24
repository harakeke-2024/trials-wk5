/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('dishes').del()
  await knex('dishes').insert([
    {
      id: 1,
      film_id: 1,
      name: 'Bacon and egg breakfast',
      image_url: 'https://www.ghibli.jp/gallery/howl016.jpg',
      original_name: 'ベーコンエッグ',
      description: 'ベーコンエッグ',
    },
    {
      id: 2,
      film_id: 2,
      name: 'Ramen',
      image_url: 'https://www.ghibli.jp/gallery/ponyo035.jpg',
      original_name: 'ラーメン',
      description: 'ラーメン',
    },
    {
      id: 3,
      film_id: 3,
      name: 'Bento Box',
      image_url: 'https://www.ghibli.jp/gallery/totoro015.jpg',
      original_name: 'お弁当',
      description: 'お弁当',
    },
    {
      id: 5,
      film_id: 3,
      name: 'Chocolate Cake',
      image_url: 'https://www.ghibli.jp/gallery/majo043.jpg',
      original_name: 'チョコレートケーキ',
      description: 'チョコレートケーキ',
    },
  ])
}
