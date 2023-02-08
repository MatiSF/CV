function boton() {
    alert("hola")
};

function asd() {
    alert('Preparece para lo que esta a punto de ver!')
    document.getElementById("disfrute").innerHTML = "Espero lo haya disfrutado" ;
};

fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(res=>console.log(res.results))

