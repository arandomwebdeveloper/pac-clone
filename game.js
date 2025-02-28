const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 20;
let player = { x: 1, y: 1 };

function drawPlayer() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(player.x * tileSize + tileSize / 2, player.y * tileSize + tileSize / 2, tileSize / 2, 0, Math.PI * 2);
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') player.y--;
    if (e.key === 'ArrowDown') player.y++;
    if (e.key === 'ArrowLeft') player.x--;
    if (e.key === 'ArrowRight') player.x++;
});

update();
