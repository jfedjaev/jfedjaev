class PlaygroundEffects {
    constructor() {
        this.canvas = document.getElementById('starfield');
        this.ctx = this.canvas.getContext('2d');
        this.mouseX = 0;
        this.mouseY = 0;
        this.ripples = [];
        
        this.setupEventListeners();
        this.animate();
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.createRipple(e.clientX, e.clientY);
        });
    }

    createRipple(x, y) {
        this.ripples.push({
            x,
            y,
            radius: 0,
            opacity: 0.5,
            maxRadius: 50
        });
    }

    drawRipples() {
        this.ripples.forEach((ripple, index) => {
            ripple.radius += 2;
            ripple.opacity -= 0.01;

            this.ctx.beginPath();
            this.ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
            this.ctx.stroke();

            if (ripple.opacity <= 0 || ripple.radius >= ripple.maxRadius) {
                this.ripples.splice(index, 1);
            }
        });
    }

    animate() {
        // Don't clear the canvas here - let starfield handle that
        this.drawRipples();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PlaygroundEffects();
}); 