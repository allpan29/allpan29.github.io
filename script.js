let clickCount = 0;
  const popcatElement = document.getElementById('popcat');
  const clickCountElement = document.getElementById('clickCount');

  popcatElement.addEventListener('click', () => {
    clickCount++;
    updatePopcat();
  });

  function updatePopcat() {
    // Update the popcat image based on click count
    const popcatImage = document.querySelector('#popcat img');
    popcatImage.src = 'closed_minha.jps';
    popcatImage.src = clickCount % 2 === 0 ? 'closed_minha.jpg' : 'pop_minha.jpg';
    clickCountElement.textContent = clickCount

    // Send click count to server (you can implement this part if needed)
    // Example: sendClickCountToServer(clickCount);
  }