  // let ingreseNombre = prompt("Ingresar nombre");
  // let ingreseApellido = prompt("Ingresar Apellido");
  // let IngreseCorreoElectronico = prompt("Ingrese Correo Electronico");
  //  alert(`Bienvenido ${ingreseNombre} ${ingreseApellido}`);
  // if (ingreseNombre != "" && ingreseApellido != "") {
  //   alert(`Bienvenido ${ingreseNombre} ${ingreseApellido}`);
  // } else {
  // alert("Error: Ingresar nombre y apellido");
  // }

 let n4 = Number;
 let clickboton = Number;
 let cuotasporpagar = Number;
 n4 = 0;
 let element = document.getElementById("boton1");
 let button = document.querySelector(".boton2");
 let button2 = document.querySelector(".boton3");

 function buttonstate() {
   if (n4 == 0) {
     button.disabled = true;
     button2.disabled = true;
   } else {
     button.disabled = false;
     button2.disabled = false;
   }
 }
 function botonCalculo() {
   document.getElementById("tcuerpo").innerHTML = "";
   let montoPrestamo = Number(document.getElementById("montoPrestamo").value);
   let numCuotas = Number(document.getElementById("numCuotas").value);
   let interes = Number;
   if (numCuotas >= 12 && numCuotas != "") {
     interes = 25;
     swal.fire("Como estas pagando a un año, o más, tu interes es del 25%");
   } else if (numCuotas == "") {
     swal.fire("tienes que colocar el numero de cuotas");
   } else {
     interes = 12.5;
     swal.fire(
       "Ya que quieres pagar en menos de un año, tu interes es solo de 12.5% mensual "
     );
   }

   if (montoPrestamo > 0) {
     for (i = 1; i <= numCuotas; i++) {
       ca = montoPrestamo / numCuotas;
       d1 = ca.toFixed(2);
       i2 = (montoPrestamo * interes) / 100 / numCuotas;
       d2 = i2.toFixed(2);
       r = ca + i2;
       d3 = r.toFixed(2);
       document.getElementById("tcuerpo").innerHTML =
         document.getElementById("tcuerpo").innerHTML +
                     `<tr>
                         <td> ${i}</td>
                         <td> ${d1}</td>
                         <td> ${d2}</td>
                         <td> ${d3}</td>
                     </tr>`;
     }
     n1 = montoPrestamo.toFixed(2);
     t_p = r * numCuotas;
     d5 = t_p.toFixed(2);
     n4 = numCuotas;
   } else {
     swal.fire("te falta agregar un numero");
   }
 }
 cuotasporpagar = n4;
 clickboton = 0;

 function pedir_prestamo() {
   if (clickboton == 0) {
     swal.fire("Estamos procesando su solicitud");
     clickboton++;
   } else {
     swal.fire("Seguro quieres hacer un prestamo?");
   }
 }
 function pago_cuota() {
   if (n4 != 0) {
     n4 = n4 - 1;
     for (let counter = 1; counter <= 1; counter++) {
       console.log(counter);
       swal.fire("" + counter + "");
     }
     swal.fire("Gracias por pagar una cuota! te quedan " + n4 + " cuotas por pagar");
   } else {
     swal.fire("Ya pagaste toda tu deuda gracias por preferirnos");
   }
 }
 //----Array Objetos------
 class Producto {
   constructor (nombre, categoria, modelo, precio){
     this.nombre = nombre;
     this.categoria = categoria;
     this.modelo = modelo;
     this.precio = precio;

   }
 }

 let listaAutos = [
    {nombre: "Touareg", categoria:"auto familiar", modelo:"sedan", precio: 8000},
    {nombre: "Amarok", categoria:"auto familiar", modelo:"sedan", precio: 10000},
    {nombre: "Saveiro", categoria:"auto familiar",modelo:"sedan", precio: 12000},
    {nombre: "Vento", categoria:"auto familiar",modelo:"sedan", precio: 9000},
 ];
// //-------agragando objetos al Array
 const agregarAutos =() => {
   let nombre = prompt ("Que Auto es?");
   let categoria = prompt ("Que categoria es?");
   let modelo = prompt("Que modelo es?")
   let precio = parseFloat (prompt ("Cual es el precio?"));
   let prodNuevo = new Producto (nombre, categoria, modelo, precio);
   listaAutos.push(prodNuevo);
   return listaAutos;
 }
// //------console.log del Array AgregarAuto
 for(const producto of listaAutos) {
   console.log (`este Auto es ${producto.nombre} y su precio es ${producto.precio}`)
 }

//SISTEMA DE RESERVA DE AUTOS

class Reseva {
  constructor (nombreCliente, apellidoCliente, numeroReserva, modelo){
    this.nombreCliente = nombreCliente;
    this.apellidoCliente = apellidoCliente;
    this.numeroReserva = numeroReserva;
    this.modelo = modelo;
  }
}

const reservas =[];

// verifico si hay datos en el local storage y los agrego al array

if (localStorage.getItem("reservas")){
  let reserva = JSON.parse(localStorage.getItem("reservas"));
  for (let i = 0; i < reserva.length; i++){
    reservas.push(reserva[i]);
  }
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarReserva();
});

function agregarReserva(){
  const nombre = document.getElementById ("nombre").value;
  const apellido = document.getElementById ("apellido").value;
  const reserva = document.getElementById ("reserva").value;
  const modelo = document.getElementById ("modelo").value;
  const nuevaReserva = new Reseva (nombre, apellido, reserva, modelo);
  reservas.push(nuevaReserva);
  
  
  //Push al local storage

  localStorage.setItem("reservas", JSON.stringify(reservas));
  formulario.reset();


}

const contenedorReservas = document.getElementById("contenedorReservas");

const verReservas = document.getElementById("verReservas");

verReservas.addEventListener("click", () =>{
  mostrarReservas();
});

function mostrarReservas(){
  contenedorReservas.innerHTML ="";
  reservas.forEach((reserva) => {
    const div = document.createElement("div");
    div.innerHTML =`
                      <div>
                        <p> Nombre del Cliente: ${reserva.nombreCliente}</p>
                        <p> Apellido del Cliente: ${reserva.apellidoCliente}</p>
                        <p> Reserva del Cliente: ${reserva.reservaCliente}</p>
                        <p> modelo del Cliente: ${reserva.modelo}</p>
                      </div>
                      `;
    contenedorReservas.appendChild(div);
    

  })
}

  const boton = document.getElementById("btnReserva");
  boton.onclick = () =>{
   Swal.fire({
     title: 'Estas seguro que deseas reservar este vehiculo?',
     showDenyButton: true,
     showCancelButton: true,
     confirmButtonText: 'Si Reservar',
     denyButtonText: `No continuar con  la reserva`,
   }).then((result) => {
     /* Read more about isConfirmed, isDenied below */
     if (result.isConfirmed) {
       Swal.fire('Reservado!', '', 'success')
     } else if (result.isDenied) {
       Swal.fire('Reserva cancelada', '', 'info')
     }
   })

  }
