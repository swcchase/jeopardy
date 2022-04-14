initBoard();

function initBoard() {
  let board = document.getElementById("clue-board");

  //generate 5 rows, then place 6 boxes in each row

  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    let boxValue = 200 * (i + 1);
    row.className = "clue-row";

    for (let j = 0; j < 6; j++) {
      let box = document.createElement("div");
      box.className = "clue-box";
      box.textContent = "$" + boxValue;

      //box.appencChild(document.createTextMode(boxValue)) //
      box.addEventListener("click", getClue, false);
    }
  }
}
