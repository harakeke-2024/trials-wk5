/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('places').del()
  await knex('places').insert([
    {
      id: 1,
      film_id: 1,
      name: "Howl's Moving Castle",
      image_url: 'https://www.ghibli.jp/gallery/howl049.jpg',
      original_name: 'ハウルの動く城',
      description:
        "Wizard Howl's home. It moves around the wasteland with four bird-like legs. To the naked eye, it appears more like a collection of junk and a living creature than a traditional 'castle'. Few know the precise location of the castle, but eyewitnesses claim to have seen it pass by several towns from time to time. The fire demon Calcifer supplies all the energy to the castle, which supports its basic functions such as walking, lighting, cooking and bathing.",
    },
    {
      id: 2,
      film_id: 2,
      name: "Sosuke's House",
      image_url: 'https://www.ghibli.jp/gallery/ponyo006.jpg',
      original_name: '宗介の家',
      description:
        "Sosuke's cozy house located by the sea, where he lives with his mother Lisa. The house has a picturesque view of the ocean and a strong connection to Ponyo and her magical origins.",
    },
    {
      id: 3,
      film_id: 3,
      name: 'Kusakabe Residence',
      image_url: 'https://www.ghibli.jp/gallery/totoro001.jpg',
      original_name: '草壁家',
      description:
        'The Kusakabe Residence is a charming countryside house surrounded by nature. It is home to Satsuki, Mei, and their father Tatsuo. The nearby forest hides magical creatures called Totoros, who become friends with the family and help them in times of need.',
    },
    {
      id: 4,
      film_id: 5,
      name: 'The Okino Residence',
      image_url: 'https://www.ghibli.jp/gallery/majo002.jpg',
      original_name: '沖野家',
      description:
        "The Okino Residence is located in the small town of Karikiya and is home to Kiki's family, which includes her father, Okino and her mother, Kokiri. The house is surrounded by gardens and flowers, and includes a sun room and a potion-making workshop. Kiki's bedroom room is located on the second floor.",
    },
    {
      id: 5,
      film_id: 6,
      name: "Nishi's Antique Shop",
      image_url: 'https://www.ghibli.jp/gallery/mimi011.jpg',
      original_name: '西の骨董屋',
      description:
        "Nishi's Antique Shop is a quaint store filled with rare and intriguing artifacts from around the world. Its owner, Nishi, is known for his knowledge and passion for antiques, making the shop a favorite spot for collectors and adventurers alike.",
    },
    {
      id: 6,
      film_id: 8,
      name: "Jiro Horikoshi's House",
      image_url: 'https://www.ghibli.jp/gallery/kazetachinu042.jpg',
      original_name: '堀越二郎の家',
      description:
        "Jiro Horikoshi's house is a traditional Japanese home where the renowned aircraft designer lives with his family. Surrounded by gardens and inspired by the beauty of nature, it reflects Jiro's love for aviation and his dedication to creating innovative aircraft designs.",
    },
    {
      id: 7,
      film_id: 5,
      name: 'Himawari Nursery School',
      image_url: 'https://www.ghibli.jp/gallery/ponyo013.jpg',
      original_name: 'ひまわり園',
      description:
        "The nursery is located in Tomonoura next to Lisa's workplace, the Himawari Service Center. Sōsuke often crawls through a hole in the fence to get to the home for the elderly.",
    },
    {
      id: 8,
      film_id: 4,
      name: 'Sea Railway',
      image_url: 'https://www.ghibli.jp/gallery/chihiro043.jpg',
      original_name: '海の鉄道',
      description:
        "No-Face and Chihiro take the train to Zeniba's faraway cottage at Swamp Bottom.",
    },
  ])
}
