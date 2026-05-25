const lever = document.getElementById('leverContainer');

  const title = 'Ehab and Habiba Wedding';
  const location = 'Royal Palace Ballroom, Cairo';
  const details = 'Join us for our wedding celebration!';

  const startDate = '20260922T190000';
  const endDate = '20260922T230000';

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

  window.open(googleCalendarUrl, '_blank');
});

function createConfetti() {

  for (let i = 0; i < 120; i++) {

    const confetti = document.createElement('div');

    confetti.classList.add('confetti');

    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-20px';

    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';

    confetti.style.opacity = Math.random();

    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    confetti.style.background = Math.random() > 0.5
      ? '#d4af37'
      : '#ffffff';

    confetti.style.width = Math.random() * 10 + 6 + 'px';
    confetti.style.height = Math.random() * 10 + 6 + 'px';

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

const style = document.createElement('style');
style.innerHTML = `

.confetti {
  position: fixed;
  z-index: 999;
  border-radius: 3px;
  animation: fall linear forwards;
}

@keyframes fall {
  to {
    transform: translateY(110vh) rotate(720deg);
  }
}

`;

document.head.appendChild(style);
