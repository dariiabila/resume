// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$',
  address: 'Kyiv, Khreschatyk street 666',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані'

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development.
        Whenever I start to work on a new project I learn the domain and try to understand the idea of the project.
        Good team player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: ` Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані'

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Terminal & NPM',
          point: 12,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 4,
          isTop: false,
        },
        {
          name: 'Git & VsCode',
          point: 6,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Sport',
          isMain: true,
        },
        {
          name: 'Music',
          isMain: true,
        },
        {
          name: 'Art',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані'

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      education: [
        {
          name: 'IT Brains',
          isEnd: true,
        },
        {
          name: 'IT School 2',
          isEnd: true,
        },
        {
          name: 'Oxford',
          isEnd: false,
        },
        {
          name: 'Cambridge',
          isEnd: false,
        },
        {
          name: 'Kyiv IT School',
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'The Best project of the World',
          id: '77777',
        },
        {
          name: 'Ukraine Awards 2050',
          id: '55555',
        },
        {
          name: 'Genious',
          id: '010101',
        },
      ],
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані'

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Terminal & NPM',
          point: 12,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 4,
          isTop: false,
        },
        {
          name: 'Git & VsCode',
          point: 6,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Sport',
          isMain: true,
        },
        {
          name: 'Music',
          isMain: true,
        },
        {
          name: 'Art',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані'

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT-Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'My first CV',
              url: 'https://resume.com.ua/',
              about: 'Web page for CV',
              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Oscar',
                },
                {
                  name: 'Nobel premia',
                },
              ],
              stackAmount: 3,
              awardAmount: 6,
            },
          ],
        },
      ],
    },

    footer,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
