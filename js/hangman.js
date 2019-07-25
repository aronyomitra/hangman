let canvas_size = [1000, 500];

let canvas;

let usedLetters = [];
let word = ['H', 'A', 'N', 'G', 'M', 'A', 'N'];
wordProgress = [];
word.forEach(function() {
  wordProgress.push('_')
});
wordProgress = wordProgress.join(' ');

function setup()
{
  canvas = createCanvas(canvas_size[0], canvas_size[1]);
  canvas.parent('sketch');

  frameRate(60);

  background(255);
  stroke (0);
  textSize(50);
  textAlign (LEFT, BOTTOM);
  textFont("Monospace");
}

function dislplayWord()
{
  text (wordProgress, 100, 100);
}

function showAvailable()
{
  let start_x = 100; let start_y = 240;
  let currentX = start_x; let currentY = start_y;

  let count = 0;
  for (let i = 65; i <= 90; i++)
  {
    let ch = String.fromCharCode(i);
    if (!usedLetters.includes(ch))
    {
      text(ch, currentX, currentY);
    }
    else
    {
      text(' ', currentX, currentY);
    }
    count++;

    if (count == 6 || count == 12 || count == 18)
    {
      currentX = start_x;
      currentY += 40;
    }
    else if (count != 24)
    {
      currentX += 40;
    }
    else
    {
      currentX = start_x + 2*40;
      currentY += 40;
    }
  }
}

function draw()
{
  background(255);

  dislplayWord();
  showAvailable();
}

function keyTyped()
{
  let key = keyCode;
  let ch;
  if (key >= 65 && key <= 90 || key >= 97 && key <= 122)
  {
    ch = String.fromCharCode(key).toUpperCase();
    if (!usedLetters.includes(ch))
    {
      usedLetters.push(ch);
    }
  }
}
