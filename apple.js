class Apple {
    constructor(x, y, name,trash_tons, food_tons, com_efficiency) {
      this.x = x;
      this.y = y;
      this.name = name;
      this.trash_tons = trash_tons;
      this.food_tons = food_tons;
      this.com_efficiency = com_efficiency;
    }

    display(){
        angleMode(DEGREES)
        noStroke();
        push();
        translate(appleMove + this.x, this.y);
        fill(204 * (this.com_efficiency/10), 55 - (15/this.com_efficiency * 2), 51 - (15/this.com_efficiency * 2));
        if (this.com_efficiency > 50) {
          fill(255, 255, 51);
        }
        ellipseMode(CENTER);
        ellipse(0, 0, 50, 75);
        rotate(10);
        ellipse(-5, 10, 35, 60);
        ellipse(10, -10, 45, 70);
        rotate(-20);
        ellipse(5, 10, 35, 60);
        ellipse(-10, -10, 45, 70);
        noFill();
        stroke(78, 38, 0);
        strokeWeight(5); 
        angleMode(RADIANS)
        rotate(radians(180))
        arc(-30, 30, 50, 50, 0, PI / 2.0); //stem
        noStroke();
        rotate(20);
        fill(39, 166, 21); // green
        if (this.com_efficiency > 50) {
          fill(255, 255, 51);
        }
        ellipse(40, 50, 15, 40) //leaf
        pop();

        text(this.name + '\n' + this.com_efficiency +' % Compost Efficiency' ,appleMove + this.x, this.y + 50);
    }
}