'use strict';

var gMeme = {
  selectedImgId: 0,

  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 40,
      align: 'center',
      font: 'impact',
      color: {
        fill: 'white',
        stroke: 'black',
      },
      x: 250,
      y: 40,
    },
  ],
};

function getMeme() {
  return gMeme;
}
function setImg(imgId) {
  gMeme.selectedImgId = imgId;
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setColor(color, area) {
  // const color = document.querySelector(`.${area}`);
  gMeme.lines[gMeme.selectedLineIdx].color[area] = color;
}
function setAlign(align) {
  gMeme.lines[gMeme.selectedLineIdx].align = align;
}
function setFontSize(size) {
  gMeme.lines[gMeme.selectedLineIdx].size += size;
}

function switchLine(lineIdx) {
  if (gMeme.selectedLineIdx === 0) {
    gMeme.selectedLineIdx = gMeme.lines.length;
  }
  gMeme.selectedLineIdx--;
}
function setFont(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font;
}
function addLine(txt = 'type your Thoughts') {
  let yOffset = checkLinePosition();

  if (!gMeme.lines.length) yOffset = 40;
  const font = document.querySelector('.font').value;
  const line = {
    txt,
    size: 40,
    align: 'center',
    font: font,
    color: {
      fill: 'white',
      stroke: 'black',
    },
    y: yOffset,
  };
  console.log('fonnntntt', font);
  gMeme.lines.push(line);
  gMeme.selectedLineIdx++;
}
function deleteLine() {
  if (gMeme.lines.length === 1) return;
  gMeme.lines.splice(gMeme.selectedLineIdx, 1);

  if (gMeme.selectedLineIdx !== 0) {
    gMeme.selectedLineIdx--;
  }
}

function moveLine(yOffset) {
  gMeme.lines[gMeme.selectedLineIdx].y += yOffset;
}

function checkLinePosition() {
  let isFirst = true;
  let isSecond = true;
  let yOffset = gCanvas.width / 2;
  for (let i = 0; i < gMeme.lines.length; i++) {
    let curLine = gMeme.lines[i];
    if (curLine.y === 40) isFirst = false;
    if (curLine.y === 400) isSecond = false;
  }
  if (isFirst) yOffset = 40;
  if (isSecond) yOffset = 400;
  if (isFirst && isSecond) yOffset = 40;

  return yOffset;
}
function Download(elLink) {
  const data = gCanvas.toDataURL();
  elLink.href = data;
  elLink.download = 'my-canvas';
}
