const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const email = formulario.email.value;
    const password = formulario.password.value;

    const response = await fetch('https://sheet.best/api/sheets/c983d20b-2b9b-4fbd-8dc4-5cbac94d7789', {
        method: 'GET',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        }
    })

    if(response.ok){
        const data = await response.json();

        // Busca si existe un registro que coincida con el email y password proporcionados
        const user = data.find(user => user.correo === email && user.password === password);

        if (user) {
            alert("Inicio de sesión exitoso");
            window.location.href = '../../dashboard/dashboard.html';
        } else {
            alert("Correo o contraseña incorrectos");
        }
    }else{
        alert("Hubo un problema con la base de datos")
    }
})