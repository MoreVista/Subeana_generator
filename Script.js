async function loadFontAndDraw() {
  const font = new FontFace('MyCustomFont', 'url(./GenZenGothicKaiC.ttf)');
  await font.load();
  document.fonts.add(font);
  generateImage();
}

function generateImage() {
  const text = document.getElementById('inputText').value || "全てあなたの所為です。";
  const fontSize = parseInt(document.getElementById('fontSizeInput').value, 10) || 65;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // 背景
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // フォント指定
  ctx.font = `${fontSize}px MyCustomFont`;
  ctx.fillStyle = 'white';
  ctx.textBaseline = "middle";

  // テキストを中央に
  const textWidth = ctx.measureText(text).width;
  const x = (canvas.width - textWidth) / 2;
  const y = canvas.height / 2;

  ctx.fillText(text, x, y);
}

function downloadImage() {
  const canvas = document.getElementById('canvas');
  const image = canvas.toDataURL("image/png");
  const link = document.createElement('a');
  link.download = 'text_image.png';
  link.href = image;
  link.click();
}

// なにこれ?おまじない?
window.addEventListener('DOMContentLoaded', loadFontAndDraw);
