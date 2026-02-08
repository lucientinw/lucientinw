// Include this in your HTML head: <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
// Then link to this source.js file: <script src="source.js"></script>

// Generate floating hearts
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heartsContainer.appendChild(heart);
    }
}

createHearts();

// Move "No" button on hover
function moveNoBtn(btnId) {
    const btn = document.getElementById(btnId);
    const container = btn.parentElement.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    let newLeft = Math.random() * (containerRect.width - btnRect.width);
    let newTop = Math.random() * (containerRect.height - btnRect.height - 100) + 50; // Avoid top area

    btn.style.position = 'absolute';
    btn.style.left = newLeft + 'px';
    btn.style.top = newTop + 'px';
}

// Transition to next step
function nextStep(step) {
    const current = document.getElementById('step' + (step - 1));
    const next = document.getElementById('step' + step);

    current.classList.add('hidden');
    next.classList.remove('hidden');
    next.classList.add('fade-in');

    // Trigger confetti on "Yes"
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Final celebration and WhatsApp
function celebrate() {
    confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 }
    });

    // Pre-filled WhatsApp message (replace with actual phone number)
    const message = encodeURIComponent("Hey! I just said yes to your romantic journey! 💕🐻");
    const phone = "1234567890"; // Replace with recipient's phone number
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 2000); // Delay to let confetti finish
}