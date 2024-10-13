class CelestialObject {
    constructor(x, y, speed, type) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.type = type;
    }

    update(width, height) {
        this.x -= this.speed;
        this.y += this.speed * 0.5;

        if (this.x < 0 || this.y > height) {
            this.x = width + Math.random() * 100;
            this.y = Math.random() * -100;
        }
    }

    draw(ctx) {
        switch(this.type) {
            case 'star':
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'shootingStar':
                ctx.strokeStyle = '#fff';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + 10, this.y - 5);
                ctx.stroke();
                break;
            case 'planet':
                ctx.fillStyle = ['#ff9999', '#99ff99', '#9999ff'][Math.floor(Math.random() * 3)];
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'rocket':
                ctx.fillStyle = '#ff0000';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - 10, this.y + 5);
                ctx.lineTo(this.x - 10, this.y - 5);
                ctx.closePath();
                ctx.fill();
                break;
        }
    }
}

class Starfield {
    constructor() {
        this.canvas = document.getElementById('starfield');
        this.ctx = this.canvas.getContext('2d');
        this.celestialObjects = [];
        this.resize();
        this.init();
    }

    init() {
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.celestialObjects = this.createCelestialObjects();
    }

    createCelestialObjects() {
        const objects = [];
        const starCount = Math.floor(this.width * 0.2);
        for (let i = 0; i < starCount; i++) {
            objects.push(new CelestialObject(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 2 + 1,
                'star'
            ));
        }
        for (let i = 0; i < 5; i++) {
            objects.push(new CelestialObject(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 4 + 2,
                'shootingStar'
            ));
        }
        for (let i = 0; i < 3; i++) {
            objects.push(new CelestialObject(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 0.5 + 0.1,
                'planet'
            ));
        }
        for (let i = 0; i < 2; i++) {
            objects.push(new CelestialObject(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 1 + 0.5,
                'rocket'
            ));
        }
        return objects;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.celestialObjects.forEach(obj => {
            obj.update(this.width, this.height);
            obj.draw(this.ctx);
        });
        requestAnimationFrame(() => this.animate());
    }
}

// Wait for the DOM to be fully loaded before initializing the Starfield
document.addEventListener('DOMContentLoaded', () => {
    new Starfield();
});
