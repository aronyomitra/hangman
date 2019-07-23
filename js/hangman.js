let canvas_size = [1000, 500];

let canvas;

function setup()
{
  canvas = createCanvas(canvas_size[0], canvas_size[1]);
  canvas.parent('sketch');

  frameRate(60);

  background(100, 100, 100);
}
