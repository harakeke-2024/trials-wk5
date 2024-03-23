/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('films').del()
  await knex('films').insert([
    {
      id: 1,
      title: "Howl's Moving Castle ",
      release_year: '2004',
      banner_url: 'https://www.ghibli.jp/images/howl.jpg',
      director: 'Hayao Miyazaki',
      original_title: 'ハウルの動く城',
      description:
        "Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the help of Howl's friends, Calcifer and Markl.",
    },
    {
      id: 2,
      title: 'Ponyo',
      release_year: '2008',
      banner_url: 'https://www.ghibli.jp/images/ponyo.jpg',
      director: 'Hayao Miyazaki',
      original_title: '崖の上のポニョ',
      description:
        "Sosuke rescues a goldfish trapped in a bottle. The goldfish, who is the daughter of a wizard, transforms herself into a young girl with her father's magic and falls in love with Sosuke.",
    },
    {
      id: 3,
      title: 'My Neighbor Totoro',
      release_year: '1988',
      banner_url: 'https://www.ghibli.jp/images/totoro.jpg',
      director: 'Hayao Miyazaki',
      original_title: 'となりのトトロ',
      description:
        'Two sisters relocate to rural Japan with their father to spend time with their ill mother. They face a mythical forest sprite and its woodland friends with whom they have many magical adventures.',
    },
    {
      id: 4,
      title: 'Spirited Away',
      release_year: '2001',
      banner_url: 'https://www.ghibli.jp/images/chihiro.jpg',
      director: 'Hayao Miyazaki',
      original_title: '千と千尋の神隠し',
      description:
        'Ten-year-old Chihiro and her parents end up at an abandoned amusement park inhabited by supernatural beings. Soon, she learns that she must work to free her parents who have been turned into pigs.',
    },
    {
      id: 5,
      title: "Kiki's Delivery Service",
      release_year: '1989',
      banner_url: 'https://www.ghibli.jp/images/majo.jpg',
      director: 'Hayao Miyazaki',
      original_title: '魔女の宅急便',
      description:
        'Thirteen-year-old Kiki tries to become an independent witch and gets a job at a delivery service. She wakes up one day to find that she can neither fly her broom nor talk to her cat.',
    },
  ])
}
