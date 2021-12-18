'use strict';
let gCanvas;
let gCtx;
const gStickers = ['💙', '😂', '😎', '😍', '👌🏼', '🤙🏼', '💪🏼'];
let gStickersIdx = 0;
function onImgSelect(imgId) {
  renderCanvas();
  moveTo();
  setImg(imgId);
  renderMeme();
  renderStickers();
}

function renderCanvas() {
  gCanvas = document.getElementById('canvas');
  gCtx = gCanvas.getContext('2d');
}

function renderMeme() {
  // document.querySelector('.fill').value = '#ffffff';
  const meme = getMeme();

  const img = new Image();
  img.src = `./img/memes/${meme.selectedImgId}.jpg`;

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    console.log(meme.lines.length);
    if (meme.lines.length < 1) {
      return;
    }
    meme.lines.forEach((line) => drawLine(line));
  };
}

function markLine(line) {
  console.log(line);
  const y = line.y;
  const x = gCanvas.width / 2;
  const lineHeight = line.size + 20;
  const lineWidth = line.txt.length * (line.size * 0.5);
  gCtx.rect(x - lineWidth / 2, y - lineHeight / 2, lineWidth, lineHeight);
  gCtx.fillStyle = 'rgba(176,176,176,0.3)';
  gCtx.fillRect(x - lineWidth / 2, y - lineHeight / 2, lineWidth, lineHeight);
}

function drawLine(line, x = gCanvas.width / 2) {
  console.log(line);
  const meme = getMeme();
  const curLine = meme.selectedLineIdx;
  console.log(curLine);
  const y = line.y;
  gCtx.textBaseline = 'middle';
  gCtx.textAlign = line.align;
  gCtx.lineWidth = 1;
  gCtx.strokeStyle = line.color.stroke;
  gCtx.font = `${line.size}px ${line.font}`;
  gCtx.fillStyle = line.color.fill;
  gCtx.fillText(line.txt, x, y);
  gCtx.strokeText(line.txt, x, y);
  console.log('hi');
  if (curLine === -1) {
    curLine = 1;
  }
  markLine(meme.lines[curLine]);
}
function setAlign(align) {
  gMeme.lines[gMeme.selectedLineIdx].align = align;
}
function onSetText(txt) {
  setLineTxt(txt);
  renderMeme();
}

function onSetColor(color, area) {
  setColor(color, area);
  renderMeme();
}

function onSetFontSize(size) {
  setFontSize(size);
  renderMeme();
}

function onSwitchLine() {
  switchLine();
  renderMeme();
}

function onSetAlign(align) {
  setAlign(align);
  renderMeme();
}
function onAddLine() {
  addLine();
  renderMeme();
}
function onDeleteLine() {
  deleteLine();
  renderMeme();
}
function onMoveLine(yOffset) {
  moveLine(yOffset);
  renderMeme();
}
function onDownload(elLink) {
  const meme = getMeme();
  meme.selectedLineIdx = 100;
  onSwitchLine();
  Download(elLink);
}
function onSetFont(font) {
  setFont(font);
  renderMeme();
}

// function closeGallery() {
//   document.querySelector('.gallery').classList.add('hidden');
//   document.querySelector('.main-editor').classList.remove('hidden');
// }

// function openGallery() {
//   renderGallery('');
//   document.querySelector('.main-editor').classList.add('hidden');
// }
function renderStickers() {
  let strHTMLs = '';
  for (var i = gStickersIdx; i < gStickersIdx + 2; i++) {
    strHTMLs += `<button class="sticker" onclick="onAddSticker('${gStickers[i]}')">${gStickers[i]}</button>`;
  }
  document.querySelector('.stickers').innerHTML = strHTMLs;
}
function onAddSticker(sticker) {
  addLine(sticker);
  renderMeme();
}

function onScrollStickers(value) {
  const stickersIdx = gStickersIdx + value;
  if (stickersIdx < 0) gStickersIdx = gStickers.length - 2;
  else if (stickersIdx > gStickers.length - 2) gStickersIdx = 0;
  else gStickersIdx = stickersIdx;
  renderStickers();
}
function moveTo() {
  document.querySelector('.main-gallery').classList.toggle('hidden');
  document.querySelector('.main-search').classList.toggle('hidden');
  document.querySelector('.main-editor').classList.toggle('hidden');
  document.querySelector('.main-about').classList.toggle('hidden');
}
// function closeEditor() {
//   document.querySelector('.main-gallery').classList.remove('hidden');
//   document.querySelector('.main-search').classList.remove('hidden');
//   document.querySelector('.main-editor').classList.add('hidden');
//   document.querySelector('.main-about').classList.remove('hidden');
// }
