document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("playButton").addEventListener("click", function () {

      var randomNumber1 = Math.ceil(Math.random() * 6);
      console.log(randomNumber1);
  
      var randomNumber2 = Math.ceil(Math.random() * 6);
      console.log(randomNumber2);
  
      var randomDiceImage1 = "images/dice-game/dice" + randomNumber1 + ".png";
      var randomDiceImage2 = "images/dice-game/dice" + randomNumber2 + ".png";
  
      document.querySelector(".dice-img1").setAttribute("src", randomDiceImage1);
      document.querySelector(".dice-img2").setAttribute("src", randomDiceImage2);
  
      if (randomNumber1 > randomNumber2) {
        document.querySelector(".dice-game").textContent = "Spieler gewinnt!";
      } else if (randomNumber1 < randomNumber2) {
        document.querySelector(".dice-game").textContent = "Computer gewinnt!";
      } else {
        document.querySelector(".dice-game").textContent = "Unentschieden!";
      }
    });
  });