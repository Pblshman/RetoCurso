let menu = document.getElementById('menu');
let cerrarMenu = document.getElementById('eliminar');
let navBar = document.getElementById('navbar');

if(menu){

    menu.addEventListener('click', () => {

        navBar.classList.add('activo');

    })

}

if(cerrarMenu){

    cerrarMenu.addEventListener('click', () => {

        navBar.classList.remove('activo');

    })

}