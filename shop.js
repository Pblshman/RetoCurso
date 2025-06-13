const products = [
    { id: 1, nombre: 'Celular Xiaomi', precio: 3000, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Xiaomi', tipo: 'Celular' },
    { id: 2, nombre: 'iPhone 13', precio: 1000, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Apple', tipo: 'Celular'  },
    { id: 3, nombre: 'Samsung Galaxy S21', precio: 500, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Samsung', tipo: 'Celular'  },
    { id: 4, nombre: 'Celular Xiaomi', precio: 3000, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Xiaomi', tipo: 'Celular' },
    { id: 5, nombre: 'iPhone 13', precio: 1000, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Apple', tipo: 'Celular'  },
    { id: 6, nombre: 'Samsung Galaxy S21', precio: 500, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Samsung', tipo: 'Celular'  },
    { id: 7, nombre: 'Celular Xiaomi', precio: 3000, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Xiaomi', tipo: 'Celular' },
    { id: 8, nombre: 'iPhone 13', precio: 1000, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Apple', tipo: 'Celular'  },
    { id: 9, nombre: 'Samsung Galaxy S21', precio: 500, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Samsung', tipo: 'Celular'  },
    { id: 10, nombre: 'Celular Xiaomi', precio: 3000, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Xiaomi', tipo: 'Celular' },
    { id: 11, nombre: 'iPhone 13', precio: 1000, imagen: 'assets/imagenes/ImagenProductoShop.jpg', marca: 'Apple', tipo: 'Celular'  }
];

function crearProducto(productoInfo){

    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    const divImagen = document.createElement("div");
    divImagen.classList.add("imagenProductoDiv");
    const divTexto = document.createElement("div");
    divTexto.classList.add("textoInfo");

    const img = document.createElement('img');
    img.src = productoInfo.imagen;  
    img.alt = productoInfo.nombre;
    divImagen.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = productoInfo.nombre;

    const price = document.createElement('p');
    price.textContent = `$${productoInfo.precio}`;

    divTexto.appendChild(name);
    divTexto.appendChild(price);

    divProducto.appendChild(divImagen);  
    divProducto.appendChild(divTexto);

    return divProducto;


}

    const divProductos = document.getElementById('divProductos');

    products.forEach(producto => {
        const productElem = crearProducto(producto);
        divProductos.appendChild(productElem);
    });
