const eyePair = document.getElementById("eyePair");
const sockets = Array.from(document.querySelectorAll(".eye-socket"));
const balls = Array.from(document.querySelectorAll(".eye-ball"));
const eyebrows = Array.from(document.querySelectorAll(".eyebrow"));

const TRACK_SMOOTHNESS = 0.12;

let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let ballOffsetX = 0;
let ballOffsetY = 0;
let idleTime = 0;
let idleTarget = { x: 0, y: 0 };
let trackingActive = false;

const moveBalls = () => {
    const rect = eyePair.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const socketHalfW = sockets[0].offsetWidth / 2;
    const socketHalfH = sockets[0].offsetHeight / 2;
    const ballHalfW = balls[0].offsetWidth / 2;
    const ballHalfH = balls[0].offsetHeight / 2;
    const maxOffsetX = socketHalfW - ballHalfW - 6;
    const maxOffsetY = socketHalfH - ballHalfH - 6;

    if (!trackingActive) {
        idleTime += 0.02;
        if (idleTime > 1 || (idleTarget.x === 0 && idleTarget.y === 0)) {
            idleTime = 0;
            idleTarget = {
                x: (Math.random() * 2 - 1) * maxOffsetX * 0.6,
                y: (Math.random() * 2 - 1) * maxOffsetY * 0.4,
            };
        }
        ballOffsetX += (idleTarget.x - ballOffsetX) * 0.04;
        ballOffsetY += (idleTarget.y - ballOffsetY) * 0.04;
        balls.forEach((ball) => {
            ball.style.transform = `translate(${ballOffsetX}px, ${ballOffsetY}px) rotate(-12deg)`;
        });
        requestAnimationFrame(moveBalls);
        return;
    }

    const dx = pointer.x - centerX;
    const dy = pointer.y - centerY;
    const distance = Math.hypot(dx, dy) || 1;
    const unitX = dx / distance;
    const unitY = dy / distance;
    const targetX = unitX * maxOffsetX;
    const targetY = unitY * maxOffsetY;
    ballOffsetX += (targetX - ballOffsetX) * TRACK_SMOOTHNESS;
    ballOffsetY += (targetY - ballOffsetY) * TRACK_SMOOTHNESS;

    balls.forEach((ball) => {
        ball.style.transform = `translate(${ballOffsetX}px, ${ballOffsetY}px) rotate(-12deg)`;
    });

    const normX = maxOffsetX === 0 ? 0 : ballOffsetX / maxOffsetX;
    const normY = maxOffsetY === 0 ? 0 : ballOffsetY / maxOffsetY;
    const socketShiftX = normX * 4;
    const socketShiftY = normY * 3;

    sockets.forEach((socket) => {
        socket.style.transform = `translate(${socketShiftX}px, ${socketShiftY}px)`;
    });

    eyebrows.forEach((brow, index) => {
        const tiltBase = index === 0 ? -10 : 10;
        const tilt = tiltBase + normX * (index === 0 ? -6 : 6);
        const lift = -4 + normY * 6;
        brow.style.transform = `translateY(${lift}px) rotate(${tilt}deg)`;
    });

    requestAnimationFrame(moveBalls);
};

window.addEventListener("mousemove", (event) => {
    pointer = { x: event.clientX, y: event.clientY };
});

window.addEventListener("mousedown", () => {
    trackingActive = true;
    document.body.classList.add("burger-cursor");
});

window.addEventListener("mouseup", () => {
    trackingActive = false;
    document.body.classList.remove("burger-cursor");
});

requestAnimationFrame(moveBalls);
