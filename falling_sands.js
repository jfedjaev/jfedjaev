class FallingSandsGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = window.innerWidth * 0.8;
        this.height = this.canvas.height = window.innerHeight * 0.8;
        this.particles = [];
        this.gravity = 0.5;
        this.mousePos = { x: 0, y: 0 };
        this.isMouseDown = false;
        this.lastTime = 0;
        this.colors = [
            '#FFD700', // Gold
            '#FDB813', // Darker gold
            '#F4C430', // Saffron
            '#FFB90F', // Dark goldenrod
        ];
        
        // Grid system for collision detection
        this.gridSize = 5;
        this.grid = Array(Math.ceil(this.width / this.gridSize))
            .fill()
            .map(() => Array(Math.ceil(this.height / this.gridSize)).fill(null));

        this.setupEventListeners();
        this.animate(0);
        
        // Start continuous sand generation
        this.generateSand();
    }

    generateSand() {
        // Continuously generate sand at the top
        if (this.particles.length < 2000) { // Limit total particles
            for (let i = 0; i < 5; i++) { // Generate 5 particles per frame
                const x = Math.random() * this.width;
                const color = this.colors[Math.floor(Math.random() * this.colors.length)];
                this.addParticle(x, 0, color);
            }
        }
        requestAnimationFrame(() => this.generateSand());
    }

    addParticle(x, y, color) {
        const particle = {
            x,
            y,
            prevX: x,
            prevY: y,
            size: this.gridSize,
            color,
            velocity: { x: 0, y: 0 }
        };
        this.particles.push(particle);
    }

    setupEventListeners() {
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mousePos.x = e.clientX - rect.left;
            this.mousePos.y = e.clientY - rect.top;
            
            if (this.isMouseDown) {
                for (let i = 0; i < 5; i++) {
                    const offsetX = (Math.random() - 0.5) * 20;
                    const offsetY = (Math.random() - 0.5) * 20;
                    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
                    this.addParticle(
                        this.mousePos.x + offsetX,
                        this.mousePos.y + offsetY,
                        color
                    );
                }
            }
        });

        this.canvas.addEventListener('mousedown', () => this.isMouseDown = true);
        this.canvas.addEventListener('mouseup', () => this.isMouseDown = false);
        this.canvas.addEventListener('mouseleave', () => this.isMouseDown = false);

        // Touch events
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.isMouseDown = true;
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            this.mousePos.x = touch.clientX - rect.left;
            this.mousePos.y = touch.clientY - rect.top;
        });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            this.mousePos.x = touch.clientX - rect.left;
            this.mousePos.y = touch.clientY - rect.top;
        });

        this.canvas.addEventListener('touchend', () => this.isMouseDown = false);
    }

    updateGrid() {
        // Clear grid
        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.grid[x].length; y++) {
                this.grid[x][y] = null;
            }
        }

        // Update grid with particle positions
        for (const particle of this.particles) {
            const gridX = Math.floor(particle.x / this.gridSize);
            const gridY = Math.floor(particle.y / this.gridSize);
            if (gridX >= 0 && gridX < this.grid.length && 
                gridY >= 0 && gridY < this.grid[0].length) {
                this.grid[gridX][gridY] = particle;
            }
        }
    }

    update(deltaTime) {
        this.updateGrid();

        for (const particle of this.particles) {
            particle.prevX = particle.x;
            particle.prevY = particle.y;

            // Apply gravity
            particle.velocity.y += this.gravity;

            // Update position
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;

            // Check boundaries
            if (particle.x < 0) particle.x = 0;
            if (particle.x > this.width - particle.size) particle.x = this.width - particle.size;
            if (particle.y > this.height - particle.size) {
                particle.y = this.height - particle.size;
                particle.velocity.y *= -0.1; // Slight bounce
            }

            // Grid-based collision detection
            const gridX = Math.floor(particle.x / this.gridSize);
            const gridY = Math.floor(particle.y / this.gridSize);

            // Check below
            if (gridY + 1 < this.grid[0].length && this.grid[gridX][gridY + 1]) {
                particle.y = gridY * this.gridSize;
                particle.velocity.y = 0;
                
                // Try to slide left or right
                const goLeft = Math.random() < 0.5;
                if (goLeft && !this.grid[gridX - 1]?.[gridY]) {
                    particle.velocity.x = -1;
                } else if (!goLeft && !this.grid[gridX + 1]?.[gridY]) {
                    particle.velocity.x = 1;
                } else {
                    particle.velocity.x = 0;
                }
            }
        }

        // Remove particles that are off-screen
        this.particles = this.particles.filter(p => 
            p.y >= 0 && p.y <= this.height && 
            p.x >= 0 && p.x <= this.width
        );
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        for (const particle of this.particles) {
            this.ctx.fillStyle = particle.color;
            this.ctx.fillRect(
                particle.x, 
                particle.y, 
                particle.size - 1, 
                particle.size - 1
            );
        }
    }

    animate(timestamp) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.update(deltaTime);
        this.draw();
        requestAnimationFrame((timestamp) => this.animate(timestamp));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FallingSandsGame();
}); 