// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios(){

  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
//    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const usuarios = await request.json();

  console.log(usuarios);

  let listadoHTML = '';

  for(let usuario of usuarios){

  let usuarioHTML = '<tr><td>'+usuario.id+
                  '</td><td>'+usuario.nombre+''+usuario.apellido+
                  '</td><td>'+usuario.email+
                  '</td><td>'+usuario.telefono+
                  '</td><td><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></td></tr>';

  listadoHTML += usuarioHTML;

  }



  document.querySelector('#usuarios tbody').outerHTML = listadoHTML;

}
