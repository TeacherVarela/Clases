const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


    const email = formulario.email.value;
    const password = formulario.password.value;

    // Debugging
    console.log("Email:", email);
    console.log("Password:", password);

    const response = await fetch('https://sheet.best/api/sheets/c983d20b-2b9b-4fbd-8dc4-5cbac94d7789', {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "correo": email,
            "password": password
        })
    })

    if(response.ok){
        alert("Se ha registrado con exito");
        window.location.href = '../../index.html';
    }else{
        alert("Hubo un problema al enviar los datos")
    }
})