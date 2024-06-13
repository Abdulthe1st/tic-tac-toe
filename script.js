let b1, b2, b3, b4, b5, b6, b7, b8, b9;

function func1() {
  // Variables

  b1 = document.getElementById("btn1").innerHTML;
  b2 = document.getElementById("btn2").innerHTML;
  b3 = document.getElementById("btn3").innerHTML;
  b4 = document.getElementById("btn4").innerHTML;
  b5 = document.getElementById("btn5").innerHTML;
  b6 = document.getElementById("btn6").innerHTML;
  b7 = document.getElementById("btn7").innerHTML;
  b8 = document.getElementById("btn8").innerHTML;
  b9 = document.getElementById("btn9").innerHTML;

  let b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

  b1btn = document.getElementById("btn1");
  b2btn = document.getElementById("btn2");
  b3btn = document.getElementById("btn3");
  b4btn = document.getElementById("btn4");
  b5btn = document.getElementById("btn5");
  b6btn = document.getElementById("btn6");
  b7btn = document.getElementById("btn7");
  b8btn = document.getElementById("btn8");
  b9btn = document.getElementById("btn9");

  // IF PLAYER 1 WINS
  // (player X)

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("output").innerHTML = "Player X won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("output").innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("output").innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.color = "red";
    b5btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("output").innerHTML = "Player X won";
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.color = "red";
    b5btn.style.color = "red";
    b8btn.style.color = "red";
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("output").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.color = "red";
    b6btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("output").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.style.color = "red";
    b5btn.style.color = "red";
    b6btn.style.color = "red";
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("output").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("output").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.color = "red";
    b5btn.style.color = "red";
    b7btn.style.color = "red";
  }

  // Check if player 2 has won
  // (player 0)
  else if (b1 == "0" && b2 == "0" && b3 == "0") {
    document.getElementById("output").innerHTML = "Player 0 won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
  } else if (b1 == "0" && b4 == "0" && b7 == "0") {
    document.getElementById("output").innerHTML = "Player 0 won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    document.getElementById("output").innerHTML = "Player 0 won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.color = "red";
    b5btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    document.getElementById("output").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.color = "red";
    b5btn.style.color = "red";
    b8btn.style.color = "red";
  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    document.getElementById("output").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.color = "red";
    b6btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    document.getElementById("output").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.style.color = "red";
    b5btn.style.color = "red";
    b6btn.style.color = "red";
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    document.getElementById("output").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    document.getElementById("output").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.color = "red";
    b5btn.style.color = "red";
    b7btn.style.color = "red";
  }

  // CHECK FOR TIE
  else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    document.getElementById("output").innerHTML = "Match is a Tie";
    document.getElementById("output").style.color = "red";
  }

  // CHECK FOR TURNS
  else {
    if (user1Turn == true) {
      document.getElementById("output").innerHTML = "Player X Turn";
    } else {
      document.getElementById("output").innerHTML = "Player 0 Turn";
    }
  }
}

// Checking to see whose turn it is
// Also checking what variable to add for each button

user1Turn = true;

function func3() {
  if (user1Turn) {
    document.getElementById("btn1").innerHTML = "X";
    document.getElementById("btn1").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn1").innerHTML = "0";
    document.getElementById("btn1").disabled = true;
    user1Turn = true;
  }
}

function func4() {
  if (user1Turn == true) {
    document.getElementById("btn2").innerHTML = "X";
    document.getElementById("btn2").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn2").innerHTML = "0";
    document.getElementById("btn2").disabled = true;
    user1Turn = true;
  }
}

function func5() {
  if (user1Turn == true) {
    document.getElementById("btn3").innerHTML = "X";
    document.getElementById("btn3").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn3").innerHTML = "0";
    document.getElementById("btn3").disabled = true;
    user1Turn = true;
  }
}

function func6() {
  if (user1Turn == true) {
    document.getElementById("btn4").innerHTML = "X";
    document.getElementById("btn4").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn4").innerHTML = "0";
    document.getElementById("btn4").disabled = true;
    user1Turn = true;
  }
}

function func7() {
  if (user1Turn == true) {
    document.getElementById("btn5").innerHTML = "X";
    document.getElementById("btn5").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn5").innerHTML = "0";
    document.getElementById("btn5").disabled = true;
    user1Turn = true;
  }
}

function func8() {
  if (user1Turn == true) {
    document.getElementById("btn6").innerHTML = "X";
    document.getElementById("btn6").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn6").innerHTML = "0";
    document.getElementById("btn6").disabled = true;
    user1Turn = true;
  }
}

function func9() {
  if (user1Turn == true) {
    document.getElementById("btn7").innerHTML = "X";
    document.getElementById("btn7").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn7").innerHTML = "0";
    document.getElementById("btn7").disabled = true;
    user1Turn = true;
  }
}

function func10() {
  if (user1Turn == true) {
    document.getElementById("btn8").innerHTML = "X";
    document.getElementById("btn8").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn8").innerHTML = "0";
    document.getElementById("btn8").disabled = true;
    user1Turn = true;
  }
}

function func11() {
  if (user1Turn == true) {
    document.getElementById("btn9").innerHTML = "X";
    document.getElementById("btn9").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn9").innerHTML = "0";
    document.getElementById("btn9").disabled = true;
    user1Turn = true;
  }
}

function func2() {
  window.location.reload();
}

//////////////
//          //
//  /   /   //
//          //
// /     /  //
//  /////   //
//          //
// Secret C:<

console.log(
  "%cDid you know you could do this?!",
  "color: #f709bb; font-family: italic;  font-size: 1.5rem;"
);

console.log(
  `\n%c⚠️ Warning ⚠️%c \n%cDon't trust anyone that tells you to play with your console!`,
  "color:#ceb73f; background: #ceb73f33; font-size:1.5rem; padding:0.15rem; margin: 1rem auto; font-family: Rockwell, Tahoma, 'Trebuchet MS', Helvetica; border: 2px solid #ceb73f; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 1px #000000bf;",
  "font-weight: bold; font-size: 1rem;color: #ceb73f;",
  "color: #ceb73f; font-size: 0.75rem; font-family: Tahoma, 'Trebuchet MS', Helvetica;"
);

console.log(
  "%cThis was made by Abdul.J!",
  "color: blue; font-family: italic;  font-size: 1.2rem;"
);

console.log("%c😊👍", "font-size: 2rem;");

// What is a rem ? it is root em
// Basicly if the original size of a text is 16 px. then 1 rem = 16px!
// Cool right?

///

//
//
//
//
//
//
//
//
// VS AIIIIIIIIII

function func() {
  // Variables
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("btn10").innerHTML;
  b2 = document.getElementById("btn12").innerHTML;
  b3 = document.getElementById("btn13").innerHTML;
  b4 = document.getElementById("btn14").innerHTML;
  b5 = document.getElementById("btn15").innerHTML;
  b6 = document.getElementById("btn16").innerHTML;
  b7 = document.getElementById("btn17").innerHTML;
  b8 = document.getElementById("btn18").innerHTML;
  b9 = document.getElementById("btn19").innerHTML;

  let b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

  b1btn = document.getElementById("btn10");
  b2btn = document.getElementById("btn12");
  b3btn = document.getElementById("btn13");
  b4btn = document.getElementById("btn14");
  b5btn = document.getElementById("btn15");
  b6btn = document.getElementById("btn16");
  b7btn = document.getElementById("btn17");
  b8btn = document.getElementById("btn18");
  b9btn = document.getElementById("btn19");

  // IF PLAYER 1 WINS
  // (player X)

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.color = "red";
    b5btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.color = "red";
    b5btn.style.color = "red";
    b8btn.style.color = "red";
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.color = "red";
    b6btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.style.color = "red";
    b5btn.style.color = "red";
    b6btn.style.color = "red";
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.color = "red";
    b5btn.style.color = "red";
    b7btn.style.color = "red";
  }

  // Check if player 2 has won
  // (player 0)
  else if (b1 == "0" && b2 == "0" && b3 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
  } else if (b1 == "0" && b4 == "0" && b7 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.color = "red";
    b5btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.color = "red";
    b5btn.style.color = "red";
    b8btn.style.color = "red";
  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.color = "red";
    b6btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.style.color = "red";
    b5btn.style.color = "red";
    b6btn.style.color = "red";
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.color = "red";
    b5btn.style.color = "red";
    b7btn.style.color = "red";
  }

  // CHECK FOR TIE
  else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    document.getElementById("output2").innerHTML = "Match is a Tie";
    document.getElementById("output2").style.color = "red";
  }

  // CHECK FOR TURNS
  else {
    if (user1Turn == true) {
      document.getElementById("output2").innerHTML = "Player X Turn";
    } else {
      document.getElementById("output2").innerHTML = "Player 0 Turn";
    }
  }
}
// ROBOT
function robo() {
  // Variables
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("btn10").innerHTML;
  b2 = document.getElementById("btn12").innerHTML;
  b3 = document.getElementById("btn13").innerHTML;
  b4 = document.getElementById("btn14").innerHTML;
  b5 = document.getElementById("btn15").innerHTML;
  b6 = document.getElementById("btn16").innerHTML;
  b7 = document.getElementById("btn17").innerHTML;
  b8 = document.getElementById("btn18").innerHTML;
  b9 = document.getElementById("btn19").innerHTML;

  let b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

  b1btn = document.getElementById("btn10");
  b2btn = document.getElementById("btn12");
  b3btn = document.getElementById("btn13");
  b4btn = document.getElementById("btn14");
  b5btn = document.getElementById("btn15");
  b6btn = document.getElementById("btn16");
  b7btn = document.getElementById("btn17");
  b8btn = document.getElementById("btn18");
  b9btn = document.getElementById("btn19");

  if (b6 == "0" && b5 == "0" && b4 == "" && user1Turn == false) {
    document.getElementById("btn14").innerHTML = "0";
    b4btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b4 == "0" && b5 == "0" && b6 == "" && user1Turn == false) {
    document.getElementById("btn16").innerHTML = "0";
    b6btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "0" && b3 == "0" && b2 == "" && user1Turn == false) {
    document.getElementById("btn12").innerHTML = "0";
    b2btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b5 == "0" && b8 == "0" && b2 == "" && user1Turn == false) {
    document.getElementById("btn12").innerHTML = "0";
    b2btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "0" && b7 == "0" && b4 == "" && user1Turn == false) {
    document.getElementById("btn14").innerHTML = "0";
    b4btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b2 == "0" && b5 == "0" && b8 == "" && user1Turn == false) {
    document.getElementById("btn18").innerHTML = "0";
    b8btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (
    b4 == "X" &&
    b3 == "X" &&
    b9 == "X" &&
    b1 == "X" &&
    b2 == "" &&
    user1Turn == false
  ) {
    document.getElementById("btn12").innerHTML = "0";
    b2btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "X" && b2 == "X" && b3 == "" && user1Turn == false) {
    document.getElementById("btn13").innerHTML = "0";
    b3btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "X" && b3 == "X" && b1 == "" && user1Turn == false) {
    document.getElementById("btn10").innerHTML = "0";
    b1btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b2 == "X" && b3 == "X" && b1 == "" && user1Turn == false) {
    document.getElementById("btn10").innerHTML = "0";
    b1btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "X" && b9 == "X" && b8 == "" && user1Turn == false) {
    document.getElementById("btn18").innerHTML = "0";
    b8btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b8 == "X" && b9 == "X" && b7 == "" && user1Turn == false) {
    document.getElementById("btn17").innerHTML = "0";
    b7btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b4 == "X" && b7 == "X" && b1 == "" && user1Turn == false) {
    document.getElementById("btn10").innerHTML = "0";
    b1btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b9 == "X" && b6 == "X" && b3 == "" && user1Turn == false) {
    document.getElementById("btn13").innerHTML = "0";
    b3btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b3 == "X" && b9 == "X" && b6 == "" && user1Turn == false) {
    document.getElementById("btn16").innerHTML = "0";
    b6btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b5 == "X" && b6 == "X" && b4 == "" && user1Turn == false) {
    document.getElementById("btn14").innerHTML = "0";
    b4btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "X" && b4 == "X" && b7 == "" && user1Turn == false) {
    document.getElementById("btn17").innerHTML = "0";
    b7btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "X" && b5 == "X" && b9 == "" && user1Turn == false) {
    document.getElementById("btn19").innerHTML = "0";
    b9btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b2 == "X" && b5 == "X" && b8 == "" && user1Turn == false) {
    document.getElementById("btn18").innerHTML = "0";
    b8btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b3 == "X" && b6 == "X" && b9 == "" && user1Turn == false) {
    document.getElementById("btn19").innerHTML = "0";
    b9btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b4 == "X" && b5 == "X" && b6 == "" && user1Turn == false) {
    document.getElementById("btn16").innerHTML = "0";
    b6btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b7 == "X" && b8 == "X" && b9 == "" && user1Turn == false) {
    document.getElementById("btn19").innerHTML = "0";
    b9btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b7 == "X" && b5 == "X" && b3 == "" && user1Turn == false) {
    document.getElementById("btn13").innerHTML = "0";
    b3btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b3 == "X" && b5 == "X" && b7 == "" && user1Turn == false) {
    document.getElementById("btn17").innerHTML = "0";
    b7btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b3 == "X" && b9 == "X" && b7 == "" && user1Turn == false) {
    document.getElementById("btn17").innerHTML = "0";
    b7btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "X" && b7 == "X" && b4 == "" && user1Turn == false) {
    document.getElementById("btn14").innerHTML = "0";
    b4btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b2 == "X" && b8 == "X" && b5 == "" && user1Turn == false) {
    document.getElementById("btn15").innerHTML = "0";
    b5btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b3 == "X" && b9 == "X" && b6 == "" && user1Turn == false) {
    document.getElementById("btn16").innerHTML = "0";
    b6btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "X" && b3 == "X" && b2 == "" && user1Turn == false) {
    document.getElementById("btn12").innerHTML = "0";
    b2btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b4 == "X" && b6 == "X" && b5 == "" && user1Turn == false) {
    document.getElementById("btn15").innerHTML = "0";
    b5btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b9 == "X" && b7 == "X" && b8 == "" && user1Turn == false) {
    document.getElementById("btn18").innerHTML = "0";
    b8btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b3 == "X" && b7 == "X" && b5 == "" && user1Turn == false) {
    document.getElementById("btn15").innerHTML = "0";
    b5btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "X" && b9 == "X" && b5 == "" && user1Turn == false) {
    document.getElementById("btn15").innerHTML = "0";
    b5btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b5 == "X" && b9 == "X" && b1 == "" && user1Turn == false) {
    document.getElementById("btn10").innerHTML = "0";
    b1btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b7 == "X" && b3 == "X" && b6 == "" && user1Turn == false) {
    document.getElementById("btn16").innerHTML = "0";
    b6btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b3 == "X" && b9 == "X" && b4 == "" && user1Turn == false) {
    document.getElementById("btn14").innerHTML = "0";
    b4btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b5 == "" && user1Turn == false) {
    document.getElementById("btn15").innerHTML = "0";
    b5btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b1 == "" && user1Turn == false) {
    document.getElementById("btn10").innerHTML = "0";
    b1btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b3 == "" && user1Turn == false) {
    document.getElementById("btn13").innerHTML = "0";
    b3btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b4 == "" && user1Turn == false) {
    document.getElementById("btn14").innerHTML = "0";
    b4btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b2 == "" && user1Turn == false) {
    document.getElementById("btn12").innerHTML = "0";
    b2btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b6 == "" && user1Turn == false) {
    document.getElementById("btn16").innerHTML = "0";
    b6btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b7 == "" && user1Turn == false) {
    document.getElementById("btn17").innerHTML = "0";
    b7btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b8 == "" && user1Turn == false) {
    document.getElementById("btn18").innerHTML = "0";
    b8btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  } else if (b9 == "" && user1Turn == false) {
    document.getElementById("btn19").innerHTML = "0";
    b9btn.disabled = true;
    user1Turn = true;
    checkForWinner();
  }
}

// Checking to see whose turn it is
// Also checking what variable to add for each button

user1Turn = true;
let turn = document.getElementById("turn").innerHTML;

function func13() {
  if (user1Turn) {
    document.getElementById("btn10").innerHTML = "X";
    document.getElementById("btn10").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn10").innerHTML = "0";
    document.getElementById("btn10").disabled = true;
    user1Turn = true;
  }
}

function func14() {
  if (user1Turn == true) {
    document.getElementById("btn12").innerHTML = "X";
    document.getElementById("btn12").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn12").innerHTML = "0";
    document.getElementById("btn12").disabled = true;
    user1Turn = true;
  }
}

function func15() {
  if (user1Turn == true) {
    document.getElementById("btn13").innerHTML = "X";
    document.getElementById("btn13").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn13").innerHTML = "0";
    document.getElementById("btn13").disabled = true;
    user1Turn = true;
  }
}

function func16() {
  if (user1Turn == true) {
    document.getElementById("btn14").innerHTML = "X";
    document.getElementById("btn14").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn14").innerHTML = "0";
    document.getElementById("btn14").disabled = true;
    user1Turn = true;
  }
}

function func17() {
  if (user1Turn == true) {
    document.getElementById("btn15").innerHTML = "X";
    document.getElementById("btn15").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn15").innerHTML = "0";
    document.getElementById("btn15").disabled = true;
    user1Turn = true;
  }
}

function func18() {
  if (user1Turn == true) {
    document.getElementById("btn16").innerHTML = "X";
    document.getElementById("btn16").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn16").innerHTML = "0";
    document.getElementById("btn16").disabled = true;
    user1Turn = true;
  }
}

function func19() {
  if (user1Turn == true) {
    document.getElementById("btn17").innerHTML = "X";
    document.getElementById("btn17").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn17").innerHTML = "0";
    document.getElementById("btn17").disabled = true;
    user1Turn = true;
  }
}

function func110() {
  if (user1Turn == true) {
    document.getElementById("btn18").innerHTML = "X";
    document.getElementById("btn18").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn18").innerHTML = "0";
    document.getElementById("btn18").disabled = true;
    user1Turn = true;
  }
}

function func111() {
  if (user1Turn == true) {
    document.getElementById("btn19").innerHTML = "X";
    document.getElementById("btn19").disabled = true;
    user1Turn = false;
  } else {
    document.getElementById("btn19").innerHTML = "0";
    document.getElementById("btn19").disabled = true;
    user1Turn = true;
  }
}

function funcr() {
  window.location.reload();
}

function checkForWinner() {
  // Variables

  b1 = document.getElementById("btn10").innerHTML;
  b2 = document.getElementById("btn12").innerHTML;
  b3 = document.getElementById("btn13").innerHTML;
  b4 = document.getElementById("btn14").innerHTML;
  b5 = document.getElementById("btn15").innerHTML;
  b6 = document.getElementById("btn16").innerHTML;
  b7 = document.getElementById("btn17").innerHTML;
  b8 = document.getElementById("btn18").innerHTML;
  b9 = document.getElementById("btn19").innerHTML;

  let b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

  b1btn = document.getElementById("btn10");
  b2btn = document.getElementById("btn12");
  b3btn = document.getElementById("btn13");
  b4btn = document.getElementById("btn14");
  b5btn = document.getElementById("btn15");
  b6btn = document.getElementById("btn16");
  b7btn = document.getElementById("btn17");
  b8btn = document.getElementById("btn18");
  b9btn = document.getElementById("btn19");

  // IF PLAYER 1 WINS
  // (player X)

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.color = "red";
    b5btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.color = "red";
    b5btn.style.color = "red";
    b8btn.style.color = "red";
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.color = "red";
    b6btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.style.color = "red";
    b5btn.style.color = "red";
    b6btn.style.color = "red";
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("output2").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.color = "red";
    b5btn.style.color = "red";
    b7btn.style.color = "red";
  }

  // Check if player 2 has won
  // (player 0)
  else if (b1 == "0" && b2 == "0" && b3 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
  } else if (b1 == "0" && b4 == "0" && b7 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.color = "red";
    b5btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.color = "red";
    b5btn.style.color = "red";
    b8btn.style.color = "red";
  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.color = "red";
    b6btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.style.color = "red";
    b5btn.style.color = "red";
    b6btn.style.color = "red";
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    document.getElementById("output2").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.color = "red";
    b5btn.style.color = "red";
    b7btn.style.color = "red";
  }

  // CHECK FOR TIE
  else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    document.getElementById("output2").innerHTML = "Match is a Tie";
    document.getElementById("output2").style.color = "red";
  }
}
