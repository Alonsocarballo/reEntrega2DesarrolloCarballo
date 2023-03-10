const boton = document.getElementById("btn");
const contenedor = document.querySelector("#fetch");

boton.onclick = () => {
  obtenerDatos();
}


// async espera ---------------- prueba... capturar datos
const obtenerDatos = async ()=> {
  try {
      let response = await fetch("https://randomuser.me/api");
      let resultado = await response.json();
      // console.log(resultado.results)
      resultado.results.forEach(persona => {
              contenedor.innerHTML += `
                  <div>
                      <img src="${persona.picture.thumbnail}" />
                      <h3>${persona.name.first} ${persona.name.last}</h3>
                      <p>Tel: ${persona.phone}</p>
                      <span>email: ${persona.email}</span>
                  </div>
              `
          }
      )

  } catch (error) {
      console.log(error)
  }
}