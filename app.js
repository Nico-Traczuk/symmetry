document.addEventListener('DOMContentLoaded', enviarEmail);

const inputNombre = document.querySelector('#nombre')
const inputEmail = document.querySelector('#email')
const inputAsunto = document.querySelector('#asunto')
const inputMensaje = document.querySelector('#mensaje')
const inputSubmit = document.querySelector('#enviar')
const form = document.querySelector('#form')
const divAlerta = document.querySelector('#alerta')

 

function enviarEmail() {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        validacion()


        const datos = new FormData();
        datos.append('nombre', inputNombre.value);
        datos.append('email', inputEmail.value);
        datos.append('asunto', inputAsunto.value);
        datos.append('mensaje', inputMensaje.value);

        fetch("email.php", {
            method: "POST",
            body: datos
        })
        .then(function(response) {
            // Manejar la respuesta del servidor
            if (response.ok) {
                console.log('envio el email');
            } else {
                console.log('no se envio el email')
            }
        })
        .catch(function(error) {
            alert("Ocurrió un error al enviar el correo.");
        });

    })
    
}

function validacion() {
    
    if(inputNombre.value === '' || inputEmail.value === '' || inputAsunto.value === '' || inputMensaje.value === '') {
        mostrarAlerta('Todos los campos deben estar completos', 'error');
    } else{
        mostrarAlerta('Mensaje enviado con exito');
    }

}


function mostrarAlerta(mensaje, tipo) {
    limpiarHTML()
    const divMensaje = document.createElement('div')
    divMensaje.textContent = mensaje
    divMensaje.classList.add('animate__bounceIn')
    if(tipo === 'error') {
        inputSubmit.classList.add('animate__flipInX')
        divMensaje.classList.add('error')

        setTimeout(() => {
            divMensaje.classList.add('animate__bounceOut')
        }, 3800);

    } else {
        divMensaje.classList.add('success', 'text-4xl', 'text-center', 'px-2','py-2', 'mt-5', 'bg-lime-400', 'rounded-xl', 'border-2', 'border-black', 'text-white', 'animate__animated','animate__fadeIn' , 'animate__slow');
        setTimeout(() => {
            divMensaje.classList.add('animate__fadeOut');
        }, 3000);
        divMensaje.innerHTML = `${mensaje}<span class="block text-lg mt-2"> En breve nos estaremos contactando con usted</span>`;
    };
    
    inputSubmit.style.display = 'none';
 
    divAlerta.appendChild(divMensaje);   

    setTimeout(() => { 
        inputSubmit.style.display = 'block';
        inputSubmit.classList.add('animate__bounceIn');
        divMensaje.remove();
        inputNombre.value = '';
        inputEmail.value = '';
        inputAsunto.value = '';
        inputMensaje.value = '';
    }, 4500);

};

  
function limpiarHTML() {
    while(divAlerta.firstChild) {
        divAlerta.removeChild(divAlerta.firstChild);
    }
};




