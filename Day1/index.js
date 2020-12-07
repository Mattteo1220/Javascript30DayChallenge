function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`kbd[data-key="${e.keyCode}"]`);
    if (!audio || audio == null) {
        return;
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  console.log(keys);
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  window.addEventListener("keyup", removeTransition);