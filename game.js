const canvas = document.getElementById("game-area");
const context = canvas.getContext("2d");

// Set canvas size
canvas.width = 500;
canvas.height = 150;

// Draw the ground
context.fillStyle = "green";
context.fillRect(0, canvas.height - 50, canvas.width, 50);

// Draw the dinosaur
context.fillStyle = "brown";
context.fillRect(100, canvas.height - 100, 50, 50);