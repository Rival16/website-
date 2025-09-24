function showCake() {
    const giftBox = document.querySelector('.gift-box');
    const cake = document.querySelector('.cake');
    const letters = document.querySelector('.letters');
    giftBox.classList.add('hidden');
    cake.classList.remove('hidden');
    letters.classList.remove('hidden');
    playMusic();
}

function showLetter(letterId) {
    const letter = document.getElementById(`letter-${letterId}`);
    letter.classList.toggle('hidden');
}

function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
}

function startCamera() {
    const cameraSection = document.querySelector('.camera');
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    cameraSection.classList.remove('hidden');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
            video.play();

            // Add birthday hat filter
            video.addEventListener('play', () => {
                const ctx = canvas.getContext('2d');
                const hat = new Image();
                hat.src = 'birthday-hat.png'; // Add your birthday hat image here
                setInterval(() => {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    ctx.drawImage(hat, 150, 20, 100, 100); // Adjust position and size of the hat
                }, 100);
            });
        })
        .catch((err) => {
            console.error('Error accessing camera:', err);
        });
}