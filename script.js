

//Skapa en array, en UL med ID "Hobby", lägga till på body sidan.

let hobby = ['Gå på bio', 'Äta mat', 'Kolla på film', 'Spela brädspel', 'resa'];
let ul = document.createElement("ul");
ul.setAttribute("id", "hobby");
document.body.appendChild(ul);

//Loopar igenom array tills i inte är mindre än array.
for (let i = 0; i < hobby.length; i++) {
    var a = document.getElementById("hobby");
    var b = document.createElement("li");
    
    a.appendChild(b).innerHTML = hobby[i];
}