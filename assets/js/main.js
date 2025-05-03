const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$( "#boton1" ).on( "click", function() {
  alert( "El correo fue enviado correctamente..." );
} );

$( "h5" ).on( "dblclick", function() {
  $(this).css( "color", "red" );

} );

$( ".card-titulo" ).click(function(){
  $( ".card-text1" ).toggle()
})