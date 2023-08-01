// Setzt den Status des Spiels fest.
// 0 := Nicht gestartet
// 1 := Gestartet
let state = 0;

// Initialisiert die neue Squareliste.
let squares = [];

for(let i = 0; i < , i++) {
    var sqdiv = document.createElement("div");
    sqdiv.className = "square";
    sqdiv.id = i;
    sqdiv.style = "margin-top: -742px; margin-left: 320px;"
    document.body.appendChild(sqdiv);


}

// Wenn auf den Bildschirm geklickt wird, wird diese Funktion aufgerufen.
function OnClick(event) {
    // Speichert die X-Koordinate in der Variable xCourser.
    let xCourser = event.clientX;
    // Speichert die Y-Koordinate in der Variable yCounter.
    let yCourser = event.clientY;

    // Wenn der Cursor innerhalb dieser Box ist:
    if ((300 <= xCourser && xCourser <= 1380) && (28 <= yCourser && yCourser <= 768 ))
    {      // Formatiert die neuen Koordinaten des Quadrates.
           cX = xCourser - (xCourser % 20);
           cY = yCourser - (yCourser % 20);

           idx =(cX-300)/(20) ;
           idy = (cY-742)/(20);

           // Erschafft einen neuen div.
           var sqdiv = document.createElement("div");
           sqdiv.className = "square";
           sqdiv.id = idx.toString()+","+idy.toString();
           sqdiv.style = "margin-top: -742px; margin-left: 320px;"
           document.body.appendChild(sqdiv);
    }
}

document.addEventListener("click", OnClick);





