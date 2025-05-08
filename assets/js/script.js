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
];

const chapterFrom = document.querySelector('[name=chapter_from]');
const chapterTo = document.querySelector('[name=chapter_to]');
const verseFrom = document.querySelector('[name=verse_from]');
const verseTo = document.querySelector('[name=verse_to]');
const verseCount = document.querySelector('[name=verse_count]');
const form = document.querySelector('form');
const article = document.querySelector('article');
const loadQuranButton = document.querySelector('.load-quran');

/* Update the verse input based on the selected chapter */
chapterFrom.addEventListener('change', () => {
  verseFrom.value = 1;
  verseFrom.setAttribute('max', chapters[chapterFrom.value - 1].count);

  localStorage.setItem('chapter_from', chapterFrom.value);
});

chapterTo.addEventListener('change', () => {
  verseTo.value = chapters[chapterTo.value - 1].count;
  verseTo.setAttribute('max', chapters[chapterTo.value - 1].count);

  localStorage.setItem('chapter_to', chapterTo.value);
});

/* Populate chapters to the desired inputs */
document.addEventListener('DOMContentLoaded', () => {
  [chapterFrom, chapterTo].forEach((target) => {
    chapters.forEach((chapter, index) => {
      const option = document.createElement('option');

      option.value = (index + 1).toString();
      option.innerText = chapter.name;
      option.setAttribute('ayah-count', chapter.count);

      target.appendChild(option);
    });
  });

  chapterFrom.value = localStorage.getItem('chapter_from') || 1;
  chapterTo.value = localStorage.getItem('chapter_to') || 114;

  [chapterFrom, chapterTo].forEach((target) => {
    target.dispatchEvent(new Event('change'));
  });

  if (!localStorage.getItem('quran-loaded')) {
    loadQuranButton.removeAttribute('hidden');
  }
});

/* Load the Quran */
loadQuranButton.addEventListener('click', async () => {
  loadQuranButton.setAttribute('aria-busy', true);

  for (let i = 1; i <= 114; i++) {
    await fetch(`https://api.alquran.cloud/v1/surah/${i}`);
  }

  loadQuranButton.setAttribute('aria-busy', false);
  localStorage.setItem('quran-loaded', true);

  loadQuranButton.innerText = 'تم التحميل';
  loadQuranButton.setAttribute('disabled', true);
});

/* Get random ayah between the start and end chapters */
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const chapterStart = parseInt(chapterFrom.value);
  const chapterEnd = parseInt(chapterTo.value);
  const verseStart = parseInt(verseFrom.value);
  const verseEnd = parseInt(verseTo.value);
  const count = parseInt(verseCount.value);

  if (
    verseStart > chapters[chapterStart - 1].count ||
    verseEnd > chapters[chapterEnd - 1].count ||
    verseStart > verseEnd
  ) {
    alert('Please make sure the verse range is correct');
    return;
  }

  article.innerHTML = '';
  article.setAttribute('aria-busy', true);

  const chapter = Math.floor(Math.random() * (chapterEnd - chapterStart + 1)) + chapterStart;
  let verse;

  // Get the chapter verses
  let verses = await fetch(`https://api.alquran.cloud/v1/surah/${chapter}`);
  verses = await verses.json();
  verses = verses.data.ayahs;

  if (chapter === chapterStart && chapter === chapterEnd) {
    verse = Math.floor(Math.random() * (verseEnd - count - verseStart + 1)) + verseStart;
  } else if (chapter === chapterStart) {
    verse = Math.floor(Math.random() * (chapters[chapter - 1].count - verseStart + 1)) + verseStart;
  } else if (chapter === chapterEnd) {
    verse = Math.floor(Math.random() * (verseEnd - count - 1 + 1)) + 1;
  } else {
    verse = Math.floor(Math.random() * (chapters[chapter - 1].count - 1 + 1)) + 1;
  }

  for (let i = 0; i < count; i++) {
    // Early return if the verse does not exist
    if (verse > chapters[chapter - 1].count) break;

    article.innerHTML += `<span class="ayah">${verses[verse - 1].text}</span>`;
    article.innerHTML += `<span class="end">${verse}</span>`;

    // Increment the verse number
    verse++;
  }

  // Add the info to the article
  article.innerHTML += `<p class="info">${chapters[chapter - 1].name} - ${verse - count}:${verse - 1}</p>`;

  article.setAttribute('aria-busy', false);

  // Add event listener to the ayah
  article.addEventListener('click', (e) => {
    if (e.target.classList.contains('ayah') && !e.target.classList.contains('active')) {
      e.target.classList.add('active');
    }
  });
});
