// Delare variable table, with global scope
let table;
let firstTen = 30;
let apples = [];

function preload() {
  // my table is comma separated value "csv"
  // and has a header specifying the columns labels
  table = loadTable('./assets/compost_efficiency_data.csv', 'csv', 'header');
}

let appleMove = 0;
let cnv;

function setup() {
  cnv = createCanvas(windowWidth, 500);
  background(255, 255, 255);
  textSize(12);
  noStroke();
  cnv.parent("sketch-container");
  



  let space = -100
  // loop through table object
for (let r = 0; r < firstTen; r++) {
  let name = table.getString(r, 'municipality_name');
  let trash_tons = table.getNum(r, 'trash_disposal_tonnage');
  let food_tons = table.getNum(r, 'food_waste');
  let com_efficiency = table.getNum(r, 'compost_efficiency');
  let x = space;
  space = space - 200;
  let y = 200;

  //print(name, acres, x, y)
  // Create new instance of park
  let apple = new Apple(x, y, name, trash_tons, food_tons, com_efficiency);
  // Create a list of park objects
  apples.push(apple);
  // print(apples);
  }

  
}


function draw() {
  background(0, 0, 0);
  noStroke();
  //apples
  let stop = appleMove;
  appleMove = appleMove + 1.5
  if (appleMove > 2700) {
    appleMove = 0;
  }
  if (mouseY < 300 && mouseY > 100) { // if the mouse is within the black window, stop the apples
    appleMove = stop;
  }
  
  textAlign(CENTER);
  fill('#B3FD71');

  for (let i = 0; i < firstTen; i++) {
    apples[i].display();
  }
  showStats();
  title();
  citation();
  disclaimer();
  
}

function showStats() {
  for (let i = 0; i < firstTen; i++) {
    if (mouseX < appleMove + apples[i].x + 100 && mouseX > appleMove + apples[i].x - 100 && mouseY < 280 && mouseY > 120) { // if mouse is within this apple
      stats(apples[i]);
    } 
    //apples[i].mouseOver(stats(apples[i]));
  }
}

function stats(Apple) {
  let name = Apple.name;
  let trash_tons = Apple.trash_tons;
  let food_tons = Apple.food_tons;
  let compost_efficiency = Apple.com_efficiency;
  let x = Apple.x;
  let y = Apple.y;
  text('Area: ' + name + '\n' + 'Trash in tons: ' + trash_tons + '\n' + 'Food in tons: ' + food_tons + '\n' + 'Compost/Trash: ' + 
  compost_efficiency, (windowWidth / 2), 350);
}

function citation() {
  fill('#B3FD71');
  textFont('Navigo');
  textSize(10);
  text('Fairbrother, M. (2023, October 12). Municipal solid waste and recycling data. Massachussetts.', (windowWidth / 2), 490);
}

function title() {
  textFont('Navigo');
  textSize(16);
  text('Who Are the Rotten Apples?', (windowWidth / 2), 50);
}

function disclaimer() {
  fill('#B3FD71');
  textFont('Navigo');
  textSize(12);
  text('Compost efficiency = Food Composted (in tons) / Trash (in tons).', (windowWidth / 2), 470);
}