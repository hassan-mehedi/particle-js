const canvas = document.getElementsByClassName("canva")[0];
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: undefined,
    y: undefined,
};

canvas.addEventListener("click", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

    for (let i = 0; i < 50; i++) {
        arrayOfBalls.push(new Balls());
    }
});

canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

    for (let i = 0; i < 50; i++) {
        arrayOfBalls.push(new Balls());
    }
});

let arrayOfBalls = [];
let colorValue = 0;

class Balls {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 6 + 1;
        this.speedX = Math.random() * 3 - 1;
        this.speedY = Math.random() * 2 - 1;
    }
    changeDirection() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.3) {
            this.size -= 0.1;
        }
    }
    drawCircleAt() {
        ctx.fillStyle = `hsl(${colorValue}, 100%, 50%`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function draw() {
    for (let i in arrayOfBalls) {
        arrayOfBalls[i].changeDirection();
        arrayOfBalls[i].drawCircleAt();
        if (arrayOfBalls[i].size <= 0.3) {
            arrayOfBalls.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    colorValue++;
    requestAnimationFrame(animate);
}

animate();
