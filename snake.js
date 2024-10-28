class SnakeGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 20;
        this.tileCount = 20;
        this.direction = { x: 0, y: 0 };
        this.score = 0;
        this.gameOver = false;
        
        this.setupCanvas();
        this.setupEventListeners();
        this.initGame();
        this.gameLoop();
    }

    setupCanvas() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.tileSize = this.canvas.width / this.tileCount;
    }

    initGame() {
        this.snake = [{ x: Math.floor(this.tileCount / 2), y: Math.floor(this.tileCount / 2) }];
        this.direction = { x: 0, y: 0 };
        this.score = 0;
        this.gameOver = false;
        this.food = this.generateFood();
        document.getElementById('score').textContent = '0';
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (this.gameOver) return;
            this.handleKeyPress(e.key);
        });

        document.getElementById('restartButton').addEventListener('click', () => {
            this.restart();
        });

        // Add event listeners for virtual buttons
        document.getElementById('upButton').addEventListener('click', () => {
            if (this.direction.y !== 1) this.direction = { x: 0, y: -1 };
        });
        document.getElementById('downButton').addEventListener('click', () => {
            if (this.direction.y !== -1) this.direction = { x: 0, y: 1 };
        });
        document.getElementById('leftButton').addEventListener('click', () => {
            if (this.direction.x !== 1) this.direction = { x: -1, y: 0 };
        });
        document.getElementById('rightButton').addEventListener('click', () => {
            if (this.direction.x !== -1) this.direction = { x: 1, y: 0 };
        });
    }

    handleKeyPress(key) {
        switch (key) {
            case 'ArrowUp':
                if (this.direction.y !== 1) this.direction = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                if (this.direction.y !== -1) this.direction = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                if (this.direction.x !== 1) this.direction = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
                if (this.direction.x !== -1) this.direction = { x: 1, y: 0 };
                break;
        }
    }

    generateFood() {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * this.tileCount),
                y: Math.floor(Math.random() * this.tileCount)
            };
        } while (this.snake.some(segment => 
            segment.x === newFood.x && segment.y === newFood.y));
        return newFood;
    }

    update() {
        if (this.gameOver) return;
        
        // Only update if there's movement
        if (this.direction.x === 0 && this.direction.y === 0) return;

        const head = {
            x: this.snake[0].x + this.direction.x,
            y: this.snake[0].y + this.direction.y
        };

        // Check for collisions with walls
        if (head.x < 0 || head.x >= this.tileCount || 
            head.y < 0 || head.y >= this.tileCount) {
            this.endGame();
            return;
        }

        // Check for collisions with self
        if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            this.endGame();
            return;
        }

        this.snake.unshift(head);

        // Check if food is eaten
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            document.getElementById('score').textContent = this.score;
            this.food = this.generateFood();
        } else {
            this.snake.pop();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw snake
        this.ctx.fillStyle = '#4CAF50';
        this.snake.forEach((segment, index) => {
            // Make head slightly darker
            if (index === 0) {
                this.ctx.fillStyle = '#388E3C';
            } else {
                this.ctx.fillStyle = '#4CAF50';
            }
            this.ctx.fillRect(
                segment.x * this.tileSize,
                segment.y * this.tileSize,
                this.tileSize - 1,
                this.tileSize - 1
            );
        });

        // Draw food
        this.ctx.fillStyle = '#FF5252';
        this.ctx.fillRect(
            this.food.x * this.tileSize,
            this.food.y * this.tileSize,
            this.tileSize - 1,
            this.tileSize - 1
        );
    }

    gameLoop() {
        this.update();
        this.draw();
        setTimeout(() => requestAnimationFrame(() => this.gameLoop()), 1000/10);
    }

    endGame() {
        this.gameOver = true;
        document.getElementById('finalScore').textContent = this.score;
        document.querySelector('.game-over').classList.remove('hidden');
    }

    restart() {
        this.initGame();
        document.querySelector('.game-over').classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SnakeGame();
}); 