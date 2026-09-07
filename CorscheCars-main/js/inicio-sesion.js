function iniciarSesion() {
    // 1. Capturamos lo que el usuario escribió en las cajas de texto
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // 2. Revisamos que no envíen el formulario en blanco
    if (user === '' || pass === '') {
        alert('Por favor, ingresa tus datos.');
        return;
    }

    // 3. Protección de rutas 
    if (user === 'admin' && pass === '123') {
        alert('Bienvenido Administrador. Redirigiendo al panel de control...');
        window.location.href = 'admin/index.html'; 
    } else {
        alert('Bienvenido Cliente. Redirigiendo al catálogo...');
        window.location.href = 'index.html'; 
    }
}