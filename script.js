function playMusic() {
    let music = document.getElementById("bgMusic");
    music.play();
}

function createHearts() {
    let container = document.getElementById("hearts-container");

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heart.style.fontSize = Math.random() * 25 + 15 + "px";
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

setInterval(createHearts, 1000);
