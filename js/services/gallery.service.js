'use strict';
let gKeywords = [];
let gImgs = [
  {
    id: 1,
    url: './img/memes/1.jpg',
    keywords: ['popular', 'celebrity'],
  },
  {
    id: 2,
    url: './img/memes/2.jpg',
    keywords: ['cute', 'animal'],
  },
  {
    id: 3,
    url: './img/memes/3.jpg',
    keywords: ['cute', 'baby', 'animal'],
  },
  {
    id: 4,
    url: './img/memes/4.jpg',
    keywords: ['cute', 'animal', 'cat'],
  },
  {
    id: 5,
    url: './img/memes/5.jpg',
    keywords: ['cute', 'baby'],
  },
  {
    id: 6,
    url: './img/memes/6.jpg',
    keywords: ['popular'],
  },
  {
    id: 7,
    url: './img/memes/7.jpg',
    keywords: ['cute', 'baby', 'funny'],
  },
  {
    id: 8,
    url: './img/memes/8.jpg',
    keywords: ['popular', 'celebrity'],
  },
  {
    id: 9,
    url: './img/memes/9.jpg',
    keywords: ['cute', 'cat', 'funny'],
  },
  {
    id: 10,
    url: './img/memes/10.jpg',
    keywords: ['popular', 'celebrity', 'funny'],
  },
  {
    id: 11,
    url: './img/memes/11.jpg',
    keywords: ['popular', 'celebrity'],
  },
  {
    id: 12,
    url: './img/memes/12.jpg',
    keywords: ['popular', 'celebrity'],
  },
  {
    id: 13,
    url: './img/memes/13.jpg',
    keywords: ['popular', 'celebrity'],
  },
  {
    id: 14,
    url: './img/memes/14.jpg',
    keywords: ['popular', 'celebrity'],
  },
  {
    id: 15,
    url: './img/memes/15.jpg',
    keywords: ['popular', 'celebrity'],
  },
  {
    id: 16,
    url: './img/memes/16.jpg',
    keywords: ['popular', 'celebrity', 'funny'],
  },
  {
    id: 17,
    url: './img/memes/17.jpg',
    keywords: ['popular', 'celebrity'],
  },
  {
    id: 18,
    url: './img/memes/18.jpg',
    keywords: ['funny', 'celebrity'],
  },
];
// getKeywords();
// console.log(gKeywords);
function getKeywords() {
  return gKeywords;
}
function getImgs(keyword) {
  if (!keyword) return gImgs;

  return gImgs.filter((img) => {
    return img.keywords.includes(keyword);
  });
}
function createKeywords() {
  const set = new Set();
  gImgs.forEach((img) => img.keywords.forEach((keyword) => set.add(keyword)));
  set.forEach((keyword) =>
    gKeywords.push({ name: keyword, searchCount: getRandomArbitrary(7, 15) })
  );
}

function updateKeywordCount(keywordSearched) {
  let keywordObj = gKeywords.find(
    (keyword) => keyword.name === keywordSearched
  );
  if (keywordObj.searchCount === 20) return;
  keywordObj.searchCount++;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
