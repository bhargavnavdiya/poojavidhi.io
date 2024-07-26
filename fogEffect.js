// let canvas = document.getElementById("canvas");
// class Fog {
//     constructor(x, y, tamanho, direction, velocity) {
//         this.x = x; // Initial x position
//         this.y = y; // Initial y position
//         this.width = tamanho.w; // Width of the fog element
//         this.height = tamanho.h; // Height of the fog element
//         this.me = document.createElement("div"); // Create the fog element
//         this.direction = direction; // Movement direction (0 for left, 1 for right)
//         this.velocity = velocity; // Speed of movement
//     }
//     create() {
//         this.me.style.width = this.width + "px";
//         this.me.style.height = this.height + "px";
//         this.me.style.backgroundColor = "#b3b8bb";
//         this.me.style.position = "absolute";
//         // Adjust opacity based on y-position to increase density at the bottom
//         this.me.style.opacity = 0.3 + (this.y / canvas.clientHeight) * 1;
//         this.me.style.filter = "blur(40px)";
//         this.me.style.borderRadius = "50%";
//         canvas.appendChild(this.me);
//     }
//     animation() {
//         this.me.style.left = this.x + "px";
//         this.me.style.top = this.y + "px";
//         if (this.direction === 0) {
//             this.x -= this.velocity; // Move left
//             if (this.x + this.width < 0) {
//                 this.x = canvas.clientWidth; // Wrap around to the right
//             }
//         } else {
//             this.x += this.velocity; // Move right
//             if (this.x > canvas.clientWidth) {
//                 this.x = -this.width; // Wrap around to the left
//             }
//         }
//     }
// }

// function CreateNeb() {
//     array.forEach((ele) => {
//         ele.animation(); // Update position of each fog element
//     });
//     requestAnimationFrame(CreateNeb); // Repeat animation
// }

// // Function to generate random fog instances
// function generateFogInstances(num) {
//     const fogArray = [];
//     const maxHeight = canvas.clientHeight * 0.25; // Generate below 75% of the canvas height
//     for (let i = 0; i < num; i++) {
//         const x = Math.random() * canvas.clientWidth; // Random x position
//         const y = Math.random() * (canvas.clientHeight - maxHeight) + maxHeight; // Random y position below maxHeight
//         const width = Math.random() * 150 + 50; // Random width between 50 and 200
//         const height = Math.random() * 150 + 50; // Random height between 50 and 200
//         const direction = Math.random() > 0.5 ? 0 : 1; // Random direction (left or right)
//         const velocity = Math.random() * 0.2 + 0.5; // Random speed between 0.1 and 0.3
//         fogArray.push(new Fog(x, y, { w: width, h: height }, direction, velocity));
//     }
//     return fogArray;
// }

// const array = generateFogInstances(80); // Increase the number of clouds for a denser effect
// array.forEach((ele) => ele.create()); // Create each fog element
// CreateNeb(); // Start animation


class Fog {
    constructor(x, y, tamanho, direction, velocity, canvas) {
        this.x = x;
        this.y = y;
        this.width = tamanho.w;
        this.height = tamanho.h;
        this.canvas = canvas;
        this.me = document.createElement("div");
        this.direction = direction;
        this.velocity = velocity;
    }
    create() {
        this.me.style.width = this.width + "px";
        this.me.style.height = this.height + "px";
        this.me.style.backgroundColor = "#b3b8bb";
        this.me.style.position = "absolute";
        this.me.style.opacity = 0.3 + (this.y / this.canvas.clientHeight) * 1;
        this.me.style.filter = "blur(40px)";
        this.me.style.borderRadius = "50%";
        this.canvas.appendChild(this.me);
    }
    animation() {
        this.me.style.left = this.x + "px";
        this.me.style.top = this.y + "px";
        if (this.direction === 0) {
            this.x -= this.velocity;
            if (this.x + this.width < 0) {
                this.x = this.canvas.clientWidth;
            }
        } else {
            this.x += this.velocity;
            if (this.x > this.canvas.clientWidth) {
                this.x = -this.width;
            }
        }
    }
}

function createFogAnimation(canvas, numFogInstances, maxHeight, velocity) {
    const fogArray = generateFogInstances(canvas, numFogInstances, maxHeight, velocity);
    fogArray.forEach((ele) => ele.create());

    function animateFog() {
        fogArray.forEach((ele) => ele.animation());
        requestAnimationFrame(animateFog);
    }

    animateFog();
}

function generateFogInstances(canvas, num, maxInputHeight, inputVelocity) {
    const fogArray = [];
    const maxHeight = canvas.clientHeight * maxInputHeight; 
    for (let i = 0; i < num; i++) {
        const x = Math.random() * canvas.clientWidth;
        const y = Math.random() * (canvas.clientHeight - maxHeight) + maxHeight;
        const width = Math.random() * 150 + 50;
        const height = Math.random() * 150 + 50;
        const direction = Math.random() > 0.5 ? 0 : 1;
        const velocity = Math.random() * 0.2 + inputVelocity;
        fogArray.push(new Fog(x, y, { w: width, h: height }, direction, velocity, canvas));
    }
    return fogArray;
}

const bottomCanvas = document.getElementById("canvas");
// const topLeftCanvas = document.getElementById("topLeftCanvas");

createFogAnimation(bottomCanvas, 123, 0.25, 0.7);
// createFogAnimation(topLeftCanvas, 11, 0.6, 0.05);
