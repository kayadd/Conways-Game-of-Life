// Setzt den Status des Spiels fest.
// 0 := Nicht gestartet
// 1 := Gestartet
let state = 0;

// Initialisiert die neue Squareliste.
let xSquares = [];
let squares = [];

// Initialisiert jede Zelle als Zelle mit weißem Hintergrund.
for(let rows = 0; rows < 54; rows++) {
    xSquares.push(0);
}

for(let columns = 0; columns < 38; columns++) {
    squares.push(xSquares);
}

function graph(){
    const canvas = document.getElementById("box");
    const ctx = canvas.getContext("2d");

    for(let rows = 0; rows < 54 ; rows++) {
        for(let columns = 0; columns < 38 ; columns++) {
            ctx.fillStyle = "white";
            if (squares[columns][rows] == 1)
            {
                ctx.fillStyle = "black";
            }

            ctx.fillRect(20*rows, 20*columns, 20, 20);

        }
    }
}

// Wenn auf den Bildschirm geklickt wird, wird diese Funktion aufgerufen.
function OnClick(event) {
    // Speichert die X-Koordinate in der Variable xCourser.
    let xCourser = event.clientX;
    // Speichert die Y-Koordinate in der Variable yCounter.
    let yCourser = event.clientY;

    // Wenn der Cursor innerhalb dieser Box ist:
    if ((0 <= xCourser && xCourser <= 1080) && (0 <= yCourser && yCourser <= 760 ))
    {   // Formatiert die neuen Koordinaten des Quadrates.
        idx = (xCourser - (xCourser % 20))/(20);
        idy = (yCourser - (yCourser % 20))/(20);

        if (squares[idx][idy] == 0)
        {
            squares[idx][idy] = 1;
        } else
        {
            squares[idx][idy] = 0;
        }
    }

    graph();
}

document.addEventListener("click", OnClick);





