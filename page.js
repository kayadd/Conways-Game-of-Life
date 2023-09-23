// Setzt den Status des Spiels fest.
// 0 := Nicht gestartet
// 1 := Gestartet
let state = 0;

// Initialisiert die neue Squareliste.
let squares = new Array(54);

// Initialisiert einen zweidimensionalen Array.
for (var i = 0; i < squares.length; i++) {
    squares[i] = new Array(38).fill(0);
}

// Displayed den gesamten zweidimensionalen Array.
function graph(){
    console.log(squares);
    const canvas = document.getElementById("box");
    const ctx = canvas.getContext("2d");

    for(var i = 0; i < 54; i++){
        for(var j = 0; j < 38; j++){
            c = squares[i][j];
            if(c == 1){
                ctx.fillStyle = "black";
            }else{
                ctx.fillStyle = "white";
            }

            ctx.fillRect(20*i, 20*j, 20, 20);

        }
    }
}



// Wenn auf den Bildschirm geklickt wird, wird diese Funktion aufgerufen.
function OnClick(event) {
    // Speichert den Offset des Canvas und verschiebt die Quadrate gegebenenfalls.
    let OffsetX = -8;
    let OffsetY = -8;
    // Speichert die X-Koordinate in der Variable xCourser.
    let xCourser = event.clientX + OffsetX;
    // Speichert die Y-Koordinate in der Variable yCounter.
    let yCourser = event.clientY + OffsetY;

    // Wenn der Cursor innerhalb dieser Box ist:
    if ((0 <= xCourser <=1080 ) && (0<= yCourser <=760))
    {   // Formatiert die neuen Koordinaten des Quadrates.
        idx = (xCourser - (xCourser % 20))/(20);
        idy = (yCourser - (yCourser % 20))/(20);

        // Ändert die Farbe des Squares.
        squares[idx][idy] = 2-2**(squares[idx][idy]);
    }

    graph();
}

document.addEventListener("click", OnClick);