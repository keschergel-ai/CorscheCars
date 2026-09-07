document.addEventListener('DOMContentLoaded', () => {
    const vehiculosDB = [
        {
            id: "1",
            nombre: "Suzuki Swift Sport 2023",
            precio: "$11.990.000",
            motor: "1.4L Boosterjet Turbo",
            transmision: "Manual 6 velocidades",
            km: "15.000 km",
            combustible: "Gasolina",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrojVlDC-Y3UGXJKD9qiwhKu-FeHsQbGtZRjGBQpZP_g&s=10",
            categoria: "sports used seminuevos"
        },
        {
            id: "2",
            nombre: "Toyota RAV4 Hybrid 2024",
            precio: "$24.490.000",
            motor: "2.5L Híbrido Dual VVT-i",
            transmision: "Automática eCVT",
            km: "5.000 km",
            combustible: "Híbrido",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjPmaDnh1L9s19QoIPmcEv60Uefx_w8gBL4tj9GnfRQ&s=10",
            categoria: "suv hibrido"
        },
        {
            id: "3",
            nombre: "Ford F-150 Lariat 4x4",
            precio: "$38.990.000",
            motor: "3.5L V6 EcoBoost",
            transmision: "Automática 10 velocidades",
            km: "22.000 km",
            combustible: "Gasolina",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0d-15TVkJjriMNwwTa3EMqM4ROpmpURooUf36OThww&s=10",
            categoria: "electric camioneta camionetas truck"
        },
        {
            id: "4",
            nombre: "Honda Civic Type R 2023",
            precio: "$32.990.000",
            motor: "2.0L VTEC Turbo 315 HP",
            transmision: "Manual 6 velocidades",
            km: "8.500 km",
            combustible: "Gasolina",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0VS4Mow6GeQ6N2bL0K1sHxnNBPEmxxb5ofbRUegZzw&s=10",
            categoria: "sports used seminuevos"
        },
        {
            id: "5",
            nombre: "Porsche 911 Carrera S 2024",
            precio: "$125.000.000",
            motor: "3.0L Boxer Twin-Turbo 443 HP",
            transmision: "Automática PDK 8 vel",
            km: "1.200 km",
            combustible: "Gasolina",
            imagen: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600",
            categoria: "sports"
        }
    ];

    // 1. Redirección y búsqueda
    const btnBuscar = document.getElementById('btnBuscar');
    const buscarTexto = document.getElementById('buscarTexto');

    if (btnBuscar && buscarTexto) {
        btnBuscar.addEventListener('click', (e) => {
            e.preventDefault();
            const busqueda = buscarTexto.value.trim();
            if (busqueda !== '') {
                window.location.href = `vehiculos.html?search=${encodeURIComponent(busqueda)}`;
            } else {
                window.location.href = 'vehiculos.html';
            }
        });
    }

    // 2. Filtrado dinámico en la lista
    const tarjetas = document.querySelectorAll('.card-vehiculo');
    if (tarjetas.length > 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('cat');
        const searchParam = urlParams.get('search');

        tarjetas.forEach(tarjeta => {
            const categoria = tarjeta.getAttribute('data-category') || '';
            const titulo = tarjeta.querySelector('h3').textContent.toLowerCase();
            let mostrar = true;

            if (catParam && !categoria.toLowerCase().includes(catParam.toLowerCase())) {
                mostrar = false;
            }

            if (searchParam && !titulo.includes(searchParam.toLowerCase())) {
                mostrar = false;
            }

            tarjeta.style.display = mostrar ? 'block' : 'none';
        });
    }

    // 3. Cargar detalle dinámico en detalle-vehiculo.html
    const detalleTitulo = document.getElementById('detalleTitulo');
    if (detalleTitulo) {
        const urlParams = new URLSearchParams(window.location.search);
        const autoId = urlParams.get('id');
        const auto = vehiculosDB.find(v => v.id === autoId) || vehiculosDB[0];

        detalleTitulo.textContent = auto.nombre;
        
        const imgElement = document.getElementById('detalleImg');
        if (imgElement) {
            imgElement.src = auto.imagen;
            imgElement.alt = auto.nombre;
            imgElement.setAttribute('referrerpolicy', 'no-referrer');
        }

        const precioElement = document.getElementById('detallePrecio');
        if (precioElement) precioElement.textContent = auto.precio;

        const motorElement = document.getElementById('detalleMotor');
        if (motorElement) motorElement.textContent = auto.motor;

        const transmisionElement = document.getElementById('detalleTransmision');
        if (transmisionElement) transmisionElement.textContent = auto.transmision;

        const kmElement = document.getElementById('detalleKm');
        if (kmElement) kmElement.textContent = auto.km;

        const combustibleElement = document.getElementById('detalleCombustible');
        if (combustibleElement) combustibleElement.textContent = auto.combustible;
    }
});