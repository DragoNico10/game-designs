function setup() {
    createCanvas(400, 400);
    textAlign(CENTER)
  }
  
  function draw() {
    clear()
    push()
    translate(50, 50)
    text("Triplicate", 0, -35)
    text('ball', 0, -25)
    fill('green')
    rectMode(CENTER)
    noStroke()
    rect(0, 0, 40, 40)
    fill('white')
    ellipse(0, -10, 7)
    ellipse(10, 10, 7)
    ellipse(-10, 10, 7)
    stroke(255)
    line(4, -5, 9, 8)
    line(-4, -5, -9, 8)
    pop()
    
    
    
    
    
    
    
    
    
    
    
    
    push()
    translate(100, 50)
    text("Launch", 0, -35)
    text('more', 0, -25)
    rectMode(CENTER)
    fill('green')
    noStroke()
    rect(0, 0, 40, 40)
    fill('white')
    ellipse(10, -10, 7)
    ellipse(-10, -10, 7)
    rect(0, 10, 25, 5)
    stroke(255)
    line(10, -10, 3, 5)
    line(-10, -10, -3, 5)
    pop()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    push()
    translate(150, 50)
    text('Explotion', 0, -35)
    text('ball', 0, -25)
    rectMode(CENTER)
    fill('cyan')
    noStroke()
    rect(0, 0, 40, 40)
    fill('white')
    triangle(5, 0, 0, -20, -5, 0)
    triangle(0, 0, 10, -15, -5, -5)
    triangle(0, 3, 0, -7, 15, -5)
    triangle(15, 15, 0, -15, -5, 0)
    triangle(5, 0, 0, 15, -5, 0)
    triangle(5, 0, -10, -15, -5, 0)
    triangle(15, 15, 0, -15, -5, 0)
    triangle(0, 3, 0, -7, -15, 3)
    fill('orange')
    ellipse(0.5, -2.5, 7)
    pop()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    push()
    translate(200, 50)
    text('Lenghten', 0, -35)
    text('paddle', 0, -25)
    fill('blue')
    rectMode(CENTER)
    noStroke()
    rect(0, 0, 40)
    fill('white')
    rect(0, 0, 15, 5)
    stroke(255)
    line(10, 0, 15, 0)
    line(15, 0, 12, -3)
    line(15, 0, 12, 3)
    line(-10, 0, -15, 0)
    line(-15, 0, -12, -3)
    line(-15, 0, -12, 3)
    pop()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    push()
    translate(250, 50)
    text('Shorten', 0, -35)
    text('paddle', 0, -25)
    fill('red')
    rectMode(CENTER)
    noStroke()
    rect(0, 0, 40)
    fill('white')
    rect(0, 0, 15, 5)
    stroke(255)
    line(10, 0, 15, 0)
    line(10, 0, 13, -3)
    line(10, 0, 13, 3)
    line(-10, 0, -15, 0)
    line(-10, 0, -13, -3)
    line(-10, 0, -13, 3)
    pop()
    
    
    
    
    
    
    
    
    
    push()
    translate(300, 50)
    text('Finish', 0, -40)
    text('level', 0, -30)
    text('(rare)', 0, -20)
    fill('gold')
    rectMode(CENTER)
    noStroke()
    rect(0, 0, 40)
    fill('white')
    rect(-3, 3, 50/3, 25/3)
    let r1=2
    let r2=10
    translate(-20, -20)
    strokeWeight(1)
    stroke(0)
    beginShape();
    vertex(0-r1, 0-r1);
    vertex(0, 0-r2)
    vertex(r1, 0-r1)
    vertex(r2, 0)
    vertex(r1, r1)
    vertex(0, r2)
    vertex(0-r1, r1)
    vertex(0-r2, 0)
    endShape(CLOSE);
    translate(40, 40)
    beginShape();
    vertex(0-r1, 0-r1);
    vertex(0, 0-r2)
    vertex(r1, 0-r1)
    vertex(r2, 0)
    vertex(r1, r1)
    vertex(0, r2)
    vertex(0-r1, r1)
    vertex(0-r2, 0)
    endShape(CLOSE);
    noStroke()
    translate(-20,-20)
    fill('red')
    ellipse(3, -3, 15)
    fill('gold')
    ellipse(3, -3, 10)
    stroke('red')
    strokeWeight(3)
    line(0, -8.5, 6, 2.5)
    pop()
    
    
    
    
    
    
    push()
    translate(350, 50)
    text('Break', 0, -35)
    text('paddle', 0, -25)
    rectMode(CENTER)
    noStroke()
    fill('red')
    rect(0, 0, 40)
    fill('white')
    rect(0, 0, 35, 15)
    stroke('red')
    line(-2, -10, 2, -2)
    line(2, -2, -2, 2)
    line(-2, 2, 2, 10)
    pop()
    
    
    
    
    
    
    
    
    
    
    
    push()
    translate(50, 120)
    text('Fast', 0, -35)
    text('ball', 0, -25)
    rectMode(CENTER)
    noStroke()
    fill('pink')
    rect(0, 0, 40)
    fill('red')
    ellipse(10, 10, 10)
    stroke(255)
    line(-15, -15, 5, 5)
    line(-10, -5, 4, 8)
    line(-5, -10, 8, 4)
    pop()
  }