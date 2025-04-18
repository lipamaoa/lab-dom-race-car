window.addEventListener('load', () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game = null;

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  document.addEventListener('keydown', event => {
    const key = event.key;
    const possibleKeystrokes = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
    ];

    if (possibleKeystrokes.includes(key)) {

      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }

    }
  });

  document.addEventListener('keyup', event => {
    const key = event.key;
    const possibleKeystrokes = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
    ];

    if (possibleKeystrokes.includes(key)) {

      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
        case "ArrowRight":
          game.player.directionX = 0;
          break;
        case "ArrowUp":
        case "ArrowDown":
          game.player.directionY = 0;
          break;
      }

    }
    })
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    startGame();
    //location.reload()
  });
});
