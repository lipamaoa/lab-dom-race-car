class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 80;
        this.heigth = 150;
        this.top = 450;
        this.left = 180;
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement('img');

        this.element.src = './images/car.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.heigth = `${this.heigth}px`;

        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element);
    }
    move(){
        this.left += this.directionX;
        this.top += this.directionY;

        if(this.left <10 ){
            this.left = 10;
        }
        if(this.top < 0 ){
            this.top = 0;
        }
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
          }
          if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10;
          }        
       
          this.updatePosition();
    }
    updatePosition() {
        
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
      didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }
}
}