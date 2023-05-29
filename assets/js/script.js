const chapters = [
  {
    name: 'الفاتحة',
    count: 7,
  },
  {
    name: 'البقرة',
    count: 286,
  },
  {
    name: 'آل عمران',
    count: 200,
  },
  {
    name: 'النساء',
    count: 176,
  },
  {
    name: 'المائدة',
    count: 120,
  },
  {
    name: 'الأنعام',
    count: 165,
  },
  {
    name: 'الأعراف',
    count: 206,
  },
  {
    name: 'الأنفال',
    count: 75,
  },
  {
    name: 'التوبة',
    count: 129,
  },
  {
    name: 'يونس',
    count: 109,
  },
  {
    name: 'هود',
    count: 123,
  },
  {
    name: 'يوسف',
    count: 111,
  },
  {
    name: 'الرعد',
    count: 43,
  },
  {
    name: 'ابراهيم',
    count: 52,
  },
  {
    name: 'الحجر',
    count: 99,
  },
  {
    name: 'النحل',
    count: 128,
  },
  {
    name: 'الإسراء',
    count: 111,
  },
  {
    name: 'الكهف',
    count: 110,
  },
  {
    name: 'مريم',
    count: 98,
  },
  {
    name: 'طه',
    count: 135,
  },
  {
    name: 'الأنبياء',
    count: 112,
  },
  {
    name: 'الحج',
    count: 78,
  },
  {
    name: 'المؤمنون',
    count: 118,
  },
  {
    name: 'النور',
    count: 64,
  },
  {
    name: 'الفرقان',
    count: 77,
  },
  {
    name: 'الشعراء',
    count: 227,
  },
  {
    name: 'النمل',
    count: 93,
  },
  {
    name: 'القصص',
    count: 88,
  },
  {
    name: 'العنكبوت',
    count: 69,
  },
  {
    name: 'الروم',
    count: 60,
  },
  {
    name: 'لقمان',
    count: 34,
  },
  {
    name: 'السجدة',
    count: 30,
  },
  {
    name: 'الأحزاب',
    count: 73,
  },
  {
    name: 'سبإ',
    count: 54,
  },
  {
    name: 'فاطر',
    count: 45,
  },
  {
    name: 'يس',
    count: 83,
  },
  {
    name: 'الصافات',
    count: 182,
  },
  {
    name: 'ص',
    count: 88,
  },
  {
    name: 'الزمر',
    count: 75,
  },
  {
    name: 'غافر',
    count: 85,
  },
  {
    name: 'فصلت',
    count: 54,
  },
  {
    name: 'الشورى',
    count: 53,
  },
  {
    name: 'الزخرف',
    count: 89,
  },
  {
    name: 'الدخان',
    count: 59,
  },
  {
    name: 'الجاثية',
    count: 37,
  },
  {
    name: 'الأحقاف',
    count: 35,
  },
  {
    name: 'محمد',
    count: 38,
  },
  {
    name: 'الفتح',
    count: 29,
  },
  {
    name: 'الحجرات',
    count: 18,
  },
  {
    name: 'ق',
    count: 45,
  },
  {
    name: 'الذاريات',
    count: 60,
  },
  {
    name: 'الطور',
    count: 49,
  },
  {
    name: 'النجم',
    count: 62,
  },
  {
    name: 'القمر',
    count: 55,
  },
  {
    name: 'الرحمن',
    count: 78,
  },
  {
    name: 'الواقعة',
    count: 96,
  },
  {
    name: 'الحديد',
    count: 29,
  },
  {
    name: 'المجادلة',
    count: 22,
  },
  {
    name: 'الحشر',
    count: 24,
  },
  {
    name: 'الممتحنة',
    count: 13,
  },
  {
    name: 'الصف',
    count: 14,
  },
  {
    name: 'الجمعة',
    count: 11,
  },
  {
    name: 'المنافقون',
    count: 11,
  },
  {
    name: 'التغابن',
    count: 18,
  },
  {
    name: 'الطلاق',
    count: 12,
  },
  {
    name: 'التحريم',
    count: 12,
  },
  {
    name: 'الملك',
    count: 30,
  },
  {
    name: 'القلم',
    count: 52,
  },
  {
    name: 'الحاقة',
    count: 52,
  },
  {
    name: 'المعارج',
    count: 44,
  },
  {
    name: 'نوح',
    count: 28,
  },
  {
    name: 'الجن',
    count: 28,
  },
  {
    name: 'المزمل',
    count: 20,
  },
  {
    name: 'المدثر',
    count: 56,
  },
  {
    name: 'القيامة',
    count: 40,
  },
  {
    name: 'الانسان',
    count: 31,
  },
  {
    name: 'المرسلات',
    count: 50,
  },
  {
    name: 'النبإ',
    count: 40,
  },
  {
    name: 'النازعات',
    count: 46,
  },
  {
    name: 'عبس',
    count: 42,
  },
  {
    name: 'التكوير',
    count: 29,
  },
  {
    name: 'الإنفطار',
    count: 19,
  },
  {
    name: 'المطففين',
    count: 36,
  },
  {
    name: 'الإنشقاق',
    count: 25,
  },
  {
    name: 'البروج',
    count: 22,
  },
  {
    name: 'الطارق',
    count: 17,
  },
  {
    name: 'الأعلى',
    count: 19,
  },
  {
    name: 'الغاشية',
    count: 26,
  },
  {
    name: 'الفجر',
    count: 30,
  },
  {
    name: 'البلد',
    count: 20,
  },
  {
    name: 'الشمس',
    count: 15,
  },
  {
    name: 'الليل',
    count: 21,
  },
  {
    name: 'الضحى',
    count: 11,
  },
  {
    name: 'الشرح',
    count: 8,
  },
  {
    name: 'التين',
    count: 8,
  },
  {
    name: 'العلق',
    count: 19,
  },
  {
    name: 'القدر',
    count: 5,
  },
  {
    name: 'البينة',
    count: 8,
  },
  {
    name: 'الزلزلة',
    count: 8,
  },
  {
    name: 'العاديات',
    count: 11,
  },
  {
    name: 'القارعة',
    count: 11,
  },
  {
    name: 'التكاثر',
    count: 8,
  },
  {
    name: 'العصر',
    count: 3,
  },
  {
    name: 'الهمزة',
    count: 9,
  },
  {
    name: 'الفيل',
    count: 5,
  },
  {
    name: 'قريش',
    count: 4,
  },
  {
    name: 'الماعون',
    count: 7,
  },
  {
    name: 'الكوثر',
    count: 3,
  },
  {
    name: 'الكافرون',
    count: 6,
  },
  {
    name: 'النصر',
    count: 3,
  },
  {
    name: 'المسد',
    count: 5,
  },
  {
    name: 'الإخلاص',
    count: 4,
  },
  {
    name: 'الفلق',
    count: 5,
  },
  {
    name: 'الناس',
    count: 6,
  },
]

const from = document.querySelector('[name=from]')
const to = document.querySelector('[name=to]')
const submit = document.querySelector('[type=submit]')
const article = document.querySelector('article')

/* Populate chapters to the desired inputs */
document.addEventListener('DOMContentLoaded', () => {
  ;[from, to].forEach((target) => {
    chapters.forEach((chapter, index) => {
      const option = document.createElement('option')

      option.value = (index + 1).toString()
      option.innerText = chapter.name
      option.setAttribute('ayah-count', chapter.count)

      target.appendChild(option)
    })
  })

  document.querySelector('[name=to]').value = 114
})

/* Get random ayah between the start and end chapters */
submit.addEventListener('click', async (e) => {
  e.preventDefault()

  const start = parseInt(from.value)
  const end = parseInt(to.value)

  if (start > end || !start || !end) {
    alert('برجاء اختيار سورة نهاية تقع بعد سورة البداية')
    return
  }

  article.innerHTML = ''
  article.setAttribute('aria-busy', true)

  const chapter = Math.floor(Math.random() * (end - start + 1) + start)
  const verse = Math.floor(Math.random() * chapters[chapter - 1].count + 1)

  await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani_tajweed?verse_key=${chapter}:${verse}`)
    .then((res) => res.json())
    .then((data) => {
      article.innerHTML = data.verses[0].text_uthmani_tajweed;
      article.innerHTML += `<p class="info">${chapters[chapter - 1].name} - ${verse}</p>`
    })

  article.classList.remove('hidden')
  article.setAttribute('aria-busy', false)
})
