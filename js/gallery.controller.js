'use strict';
function init() {
  createKeywords();
  renderGallery('');
  renderKeywords();
}

function renderGallery(gKeyWord) {
  let imgs = getImgs(gKeyWord);
  // console.log(imgs);
  const imgsHTMLs = imgs.map((img) => {
    return `<img src=" ${img.url}" onclick="onImgSelect(${img.id})">`;
  });
  document.querySelector('.gallery').innerHTML = imgsHTMLs.join('');
}

function renderKeywords() {
  let keywords = getKeywords();
  console.log(keywords);
  let txtHTMLs = keywords.map((keyword) => {
    return `
      <button 
      class="keyword-btn"
      style="font-size:${keyword.searchCount + 15}px" 
      onclick="onKeywordClick('${keyword.name}')"
      >
      ${keyword.name}
     </button>`;
  });
  document.querySelector('.keyword').innerHTML = txtHTMLs.join('');
}

function onKeywordClick(keyword) {
  document.querySelector('.search').value = keyword;
  updateKeywordCount(keyword);
  renderKeywords();
  renderGallery(keyword);
}
function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function toggleMenu() {
  document.querySelector('.main-nav').classList.toggle('menu-open');
  document.querySelector('li').classList.toggle('menu-open');
}
