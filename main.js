// Game variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let ship;
let asteroids = [];
let keys = {};

// Ship class
class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
  }

  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (keys['ArrowLeft']) {
      this.x -= 5;
    }
    if (keys['ArrowRight']) {
      this.x += 5;
    }
    if (keys['ArrowUp']) {
      this.y -= 5;
    }
    if (keys['ArrowDown']) {
      this.y += 5;
    }
  }
}

// Asteroid class
class Asteroid {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'gray';
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.y += 2;
  }
}

// Event listeners
window.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

// Game functions
function createAsteroids() {
  for (let i = 0; i < 10; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * -canvas.height;
    let size = Math.random() * 20 + 10;
    asteroids.push(new Asteroid(x, y, size));
  }
}

function update() {
  ship.update();
  asteroids.forEach((asteroid) => asteroid.update());
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ship.draw();
  asteroids.forEach((asteroid) => asteroid.draw());
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Initialize game
function init() {
  ship = new Ship(canvas.width / 2, canvas.height - 30);
  createAsteroids();
  gameLoop();
}

init();