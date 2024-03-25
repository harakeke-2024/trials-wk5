/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('characters').del()
  await knex('characters').insert([
    {
      id: 1,
      name: 'Totoro',
      film_id: 3,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/totoro030.jpg',
    },
    {
      id: 2,
      name: 'Chihiro Ogino',
      film_id: 4,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/chihiro019.jpg',
    },
    {
      id: 3,
      name: 'No Face',
      film_id: 4,
      description: 'under construction',
      image_url:
        'https://images.ciatr.jp/2020/10/w_640/mPEbw1nfhbapdjtsd0kULQ84HCCfXb2OwnuZ7jEu.jpeg',
    },
    {
      id: 4,
      name: 'Catbus',
      film_id: 3,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/totoro044.jpg',
    },
    {
      id: 5,
      name: 'Calcifer',
      film_id: 1,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/howl012.jpg',
    },
    {
      id: 6,
      name: 'Soot Sprites',
      film_id: 3,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/chihiro014.jpg',
    },
    {
      id: 7,
      name: 'Yubaba',
      film_id: 4,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/chihiro017.jpg',
    },
    {
      id: 8,
      name: 'The Baron',
      film_id: 1,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/mimi013.jpg',
    },
    {
      id: 9,
      name: 'Howl',
      film_id: 1,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/howl027.jpg',
    },
    {
      id: 10,
      name: 'Sophie Hatter',
      film_id: 1,
      description: 'under construction',
      image_url:
        'https://wegotthiscovered.com/wp-content/uploads/2023/09/Sophie-Howls-Moving-Castle.jpg',
    },
    {
      id: 11,
      name: 'Kiki',
      film_id: 5,
      description: 'under construction',
      image_url:
        'https://miro.medium.com/v2/resize:fit:2560/format:webp/0*H6X1KQzdLZTz3-fV.jpeg',
    },
    {
      id: 12,
      name: 'Mei',
      film_id: 3,
      description: 'under construction',
      image_url:
        'https://i.pinimg.com/564x/56/9e/1f/569e1f617f987afbe8489e84ee64f412.jpg',
    },
    {
      id: 13,
      name: 'Shizuku',
      film_id: 1,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/mimi049.jpg',
    },
    {
      id: 14,
      name: 'Haku',
      film_id: 1,
      description: 'under construction',
      image_url: 'https://www.ghibli.jp/gallery/chihiro005.jpg',
    },
  ])
}
