

export const addMovies = async (req: Request, res: Response) => {
  try {
    

  } catch (error) {
    
  }
};

/*{
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg',
      genre_ids: [Array],
      id: 1008042,
      original_language: 'en',
      original_title: 'Talk to Me',
      overview: 'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
      popularity: 2019.964,
      poster_path: '/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',
      release_date: '2023-07-26',
      title: 'Talk to Me',
      video: false,
      vote_average: 7.2,
      vote_count: 712
    },
    {
      adult: false,
      backdrop_path: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
      genre_ids: [Array],
      id: 385687,
      original_language: 'en',
      original_title: 'Fast X',
      overview: "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 1871.86,
      poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      release_date: '2023-05-17',
      title: 'Fast X',
      video: false,
      vote_average: 7.3,
      vote_count: 3759
    },
    {
      adult: false,
      backdrop_path: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
      genre_ids: [Array],
      id: 346698,
      original_language: 'en',
      original_title: 'Barbie',
      overview: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      popularity: 1763.378,
      poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      release_date: '2023-07-19',
      title: 'Barbie',
      video: false,
      vote_average: 7.3,
      vote_count: 4800
    },
    {
      adult: false,
      backdrop_path: '/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg',
      genre_ids: [Array],
      id: 615656,
      original_language: 'en',
      original_title: 'Meg 2: The Trench',
      overview: 'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
      popularity: 1672.92,
      poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
      release_date: '2023-08-02',
      title: 'Meg 2: The Trench',
      video: false,
      vote_average: 7,
      vote_count: 1832
    },
    {
      adult: false,
      backdrop_path: '/53z2fXEKfnNg2uSOPss2unPBGX1.jpg',
      genre_ids: [Array],
      id: 968051,
      original_language: 'en',
      original_title: 'The Nun II',
      overview: 'In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.',
      popularity: 1245.738,
      poster_path: '/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg',
      release_date: '2023-09-06',
      title: 'The Nun II',
      video: false,
      vote_average: 6.6,
      vote_count: 242
    },
    {
      adult: false,
      backdrop_path: '/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg',
      genre_ids: [Array],
      id: 717930,
      original_language: 'en',
      original_title: 'Kandahar',
      overview: 'After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.',
      popularity: 1176.457,
      poster_path: '/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg',
      release_date: '2023-05-25',
      title: 'Kandahar',
      video: false,
      vote_average: 6.8,
      vote_count: 510
    },
    {
      adult: false,
      backdrop_path: '/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg',
      genre_ids: [Array],
      id: 565770,
      original_language: 'en',
      original_title: 'Blue Beetle',
      overview: 'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.',
      popularity: 1409.947,
      poster_path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
      release_date: '2023-08-16',
      title: 'Blue Beetle',
      video: false,
      vote_average: 7.1,
      vote_count: 592
    },
    {
      adult: false,
      backdrop_path: '/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg',
      genre_ids: [Array],
      id: 976573,
      original_language: 'en',
      original_title: 'Elemental',
      overview: 'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',  
      popularity: 905.795,
      poster_path: '/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg',
      release_date: '2023-06-14',
      title: 'Elemental',
      video: false,
      vote_average: 7.8,
      vote_count: 2204
    },
    {
      adult: false,
      backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
      genre_ids: [Array],
      id: 569094,
      original_language: 'en',
      original_title: 'Spider-Man: Across the Spider-Verse',
      overview: 'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      popularity: 599.982,
      poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      release_date: '2023-05-31',
      title: 'Spider-Man: Across the Spider-Verse',
      video: false,
      vote_average: 8.5,
      vote_count: 4266
    },
    {
      adult: false,
      backdrop_path: '/9m161GawbY3cWxe6txd1NOHTjd0.jpg',
      genre_ids: [Array],
      id: 335977,
      original_language: 'en',
      original_title: 'Indiana Jones and the Dial of Destiny',
      overview: "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
      popularity: 795.674,
      poster_path: '/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg',
      release_date: '2023-06-28',
      title: 'Indiana Jones and the Dial of Destiny',
      video: false,
      vote_average: 6.7,
      vote_count: 1656
    },
    {
      adult: false,
      backdrop_path: '/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
      genre_ids: [Array],
      id: 762430,
      original_language: 'en',
      original_title: 'Retribution',
      overview: "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
      popularity: 983.814,
      poster_path: '/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg',
      release_date: '2023-08-23',
      title: 'Retribution',
      video: false,
      vote_average: 6.6,
      vote_count: 144
    },
    {
      adult: false,
      backdrop_path: '/waBWlJlMpyFb7STkFHfFvJKgwww.jpg',
      genre_ids: [Array],
      id: 678512,
      original_language: 'en',
      original_title: 'Sound of Freedom',
      overview: 'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
      popularity: 667.659,
      poster_path: '/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg',
      release_date: '2023-07-03',
      title: 'Sound of Freedom',
      video: false,
      vote_average: 8,
      vote_count: 460
    },
    {
      adult: false,
      backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
      genre_ids: [Array],
      id: 667538,
      original_language: 'en',
      original_title: 'Transformers: Rise of the Beasts',
      overview: 'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
      popularity: 622.248,
      poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
      release_date: '2023-06-06',
      title: 'Transformers: Rise of the Beasts',
      video: false,
      vote_average: 7.5,
      vote_count: 3193
    },
    {
      adult: false,
      backdrop_path: '/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg',
      genre_ids: [Array],
      id: 820525,
      original_language: 'en',
      original_title: 'After Everything',
      overview: 'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
      popularity: 600.971,
      poster_path: '/gZLGCibvFY4zmt8sWUZcbBTHRtk.jpg',
      release_date: '2023-09-13',
      title: 'After Everything',
      video: false,
      vote_average: 6.4,
      vote_count: 27
    },
    {
      adult: false,
      backdrop_path: '/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg',
      genre_ids: [Array],
      id: 614930,
      original_language: 'en',
      original_title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
      overview: "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
      popularity: 597.799,
      poster_path: '/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg',
      release_date: '2023-07-31',
      title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
      video: false,
      vote_average: 7.4,
      vote_count: 553
    },
    {
      adult: false,
      backdrop_path: '/9fOfsVHZHig6MHPHczv0zMY6cKc.jpg',
      genre_ids: [Array],
      id: 1880,
      original_language: 'en',
      original_title: 'Red Dawn',
      overview: 'It is the dawn of World War III. In mid-western America, a group of teenagers band together to defend their town—and their country—from invading Soviet forces.',
      popularity: 580.804,
      poster_path: '/a2GkHcioc2QEFJbQk1NTB85u3vD.jpg',
      release_date: '1984-08-10',
      title: 'Red Dawn',
      video: false,
      vote_average: 6.3,
      vote_count: 670
    },
    {
      adult: false,
      backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      genre_ids: [Array],
      id: 298618,
      original_language: 'en',
      original_title: 'The Flash',
      overview: "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      popularity: 562.82,
      poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      release_date: '2023-06-13',
      title: 'The Flash',
      video: false,
      vote_average: 6.9,
      vote_count: 2878
    },
    {
      adult: false,
      backdrop_path: '/cStOy6KckiZjxZJStHiCCHNRW9t.jpg',
      genre_ids: [Array],
      id: 696002,
      original_language: 'en',
      original_title: 'Paydirt',
      overview: 'A parolee teams up with his old crew determined to find a buried bag of cash stolen a decade ago from a DEA bust gone bad, while being tracked by a retired Sheriff.',
      popularity: 519.196,
      poster_path: '/jAGGV80ZO10YcmUJXK7YSBh1yvK.jpg',
      release_date: '2020-08-07',
      title: 'Paydirt',
      video: false,
      vote_average: 5.7,
      vote_count: 46
    },
    {
      adult: false,
      backdrop_path: '/3mYCjwll5RG342Dz1f8HcnT8tV.jpg',
      genre_ids: [Array],
      id: 606403,
      original_language: 'ko',
      original_title: '특송',
      overview: "Eun-ha, who is a normal junkyard employee, secretly works as a delivery clerk that deals with unusual delivery requests. One day, Eun-ha heads to Seoul to pick up a client who is involved in a gambling crime that wants to flee overseas. However, Eun-ha meets the client's young son at the pick-up point, instead of the client himself. Kyeong-pil, a current police officer who is actually masterminding the whole gambling crime, chases after the missing child who has the security key to the bank account that holds 30 million dollars.",
      popularity: 556.367,
      poster_path: '/fYT7JB4sU1XXeawEXOdQ3TtkFB2.jpg',
      release_date: '2022-01-12',
      title: 'Special Delivery',
      video: false,
      vote_average: 6.9,
      vote_count: 105
    },
    {
      adult: false,
      backdrop_path: '/4wVFtesa5YEWuAUHRcxoCN1Y1uN.jpg',
      genre_ids: [Array],
      id: 1085218,
      original_language: 'da',
      original_title: 'Underverden 2',
      overview: "Seven years ago, Zaid went to war against the Copenhagen underworld to avenge his dead brother. His identity as a respected doctor of cardiology and life as a family man is but a fading dream, and in prison Zaid suffers the loss of his son Noah, whom he barely knows. When a police agent approaches Zaid and offers him a deal to be released in exchange for infiltrating the Copenhagen underworld, he sees his chance to reclaim the remnants of the family life he left behind. But everything has a price, and Zaid realizes that he has now seriously endangered his son's life. After all, once you become part of the underworld, is there any way out?",
      popularity: 510.841,
      poster_path: '/c8B4DsVcFVDLVmbpHMHU3RjLNAV.jpg',
      release_date: '2023-04-13',
      title: 'Darkland: The Return',
      video: false,
      vote_average: 6.3,
      vote_count: 75
    }
  ],
  total_pages: 40166,
  total_results: 803308
}*/