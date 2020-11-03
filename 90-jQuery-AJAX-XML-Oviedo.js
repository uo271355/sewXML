/* 90-jQuery-AJAX-XML-Oviedo.js */
// Carga un archivo XML del servidor Web denominado Oviedo.xml
// Version 1.0. 24/11/2017. Juan Manuel Cueva Lovelle. Universidad de Oviedo
"use strict";
class ArchivoXML {
    constructor(nombre){
        this.nombre = nombre;
        this.correcto = "¡Todo correcto! archivo XML cargado"
    }
    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.nombre,
            method: 'GET',
            success: function(datos){
                
                    //Pasar el archivo XML a un string
                    var str = (new XMLSerializer()).serializeToString(datos);
                    
                    $("h5").text(str);
                
                    //Extracción de los datos contenidos en el XML
                    var totalNodos            = $('*',datos).length; // cuenta el número de elementos: son los nodos del DOM de XML
                    //    var rutas                = $('rutas',datos).text();
                    var ruta                 = $('ruta',datos).attr("nombre");
                    var tipo               = $('tipo',datos).text();
                    var dificultad            = $('dificultad',datos).text();
                    var fechaInicio           = $('fechaInicio',datos).text();
                    var horaInicio            = $('horaInicio',datos).text();
                    var duracion              = $('duracion',datos).text();
                    var agencia               = $('agencia',datos).text();
                    var descripcion           = $('descripcion',datos).text();       
                    var personasaptas         = $('personasaptas',datos).text();
                    var lugarInicio           = $('lugarInicio',datos).text();
                    var direccionInicio       = $('direccionInicio',datos).text();
                    //   var coordenadasInicio     = $('coordenadasInicio',datos).text();
                    var longitud              = $('longitud',datos).text();
                    var latitud       = $('latitud',datos).text();
                    var altitud               = $('altitud',datos).attr("unidades");
                     // var referencias           = $('referencias',datos).text();
                    var enlace               = $('enlace',datos).text();
                    var recomendacion           = $('recomendacion',datos).text();
                    var nombreHito       = $('nombreHito',datos).text();
                    var descripcionHito          = $('descripcionHito',datos).text();
                    var longitudHito              = $('longitudHito',datos).text();
                    var latitudHito       = $('latitudHito',datos).text();
                    var altitudHito               = $('altitudHito',datos).attr("unidades");
                    var distanciaHitoAnterior       = $('distanciaHitoAnterior',datos).attr("unidades");
                    var tiempoHitoAnterior          = $('tiempoHitoAnterior',datos).text();
                    var foto = $('foto',datos).text();
                 
                    var stringDatos =  "<ul><li>Número de elementos del archivo XML: " + totalNodos + "</li> ";
                        stringDatos += "<li>Ruta: " + ruta + "</li>";
                        stringDatos += "<li>Tipo: " + tipo + " grados</li>";
                        stringDatos += "<li>Dificultad: " + dificultad + " grados</li>";
                        stringDatos += "<li>Fecha de inicio: " + fechaInicio + "</li>";
                        stringDatos += "<li>Hora de inicio: " + horaInicio + "</li>";
                        stringDatos += "<li>Duracion: " + duracion + "</li>";
                        stringDatos += "<li>Agencia: " + agencia + " grados Celsius</li>";
                        stringDatos += "<li>Descripcion: " + descripcion + " grados Celsius</li>";
                        stringDatos += "<li>Personas aptas: " + personasaptas + " grados Celsius</li>";
                        stringDatos += "<li>Lugar de inicio: " + lugarInicio + "</li>";
                        stringDatos += "<li>Direccion de inicio: " +direccionInicio+ "</li>";
                        stringDatos += "<li>Longitud: "+ longitud+"</li>";
                        stringDatos += "<li>Latitud: " + latitud + " metros/segundo</li>";
                        stringDatos += "<li>Altitud: " + altitud + "</li>";
                        stringDatos += "<li>Enlace: " + enlace + " grados</li>";
                        stringDatos += "<li>Recomendacion: " + recomendacion + "</li>";
                        stringDatos += "<li>Nombre del hito: " + nombreHito + "</li>";
                        stringDatos += "<li>Descripcion hito: " + descripcionHito + "</li>";
                        stringDatos += "<li>Longitud hito: " + longitudHito + "</li>";
                        stringDatos += "<li>Latitud hito: " + latitudHito + " metros</li>";
                        stringDatos += "<li>Altitud hito: " + altitudHito + "</li>";
                        stringDatos += "<li>Distancia desde el hito anterior: " + distanciaHitoAnterior + "</li>";
                        stringDatos += "<li>Tiempo desde el hito anterior: " + tiempoHitoAnterior + "</li>";
                        stringDatos += "<li>Foto: " + foto + "</li><ul>";
                    
                    $("p").html(stringDatos);                  
                },
                error:function(){
                      $("h3").html("¡Tenemos problemas! No se pudo cargar el archivo XML"); 
                      $("h4").remove();
                      $("h5").remove();
                      $("p").remove();
                }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe){
        // Crea un nuevo elemento modificando el árbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verXML(){
        //Muestra el archivo JSON recibido
        this.crearElemento("h2","Archivo XML","footer"); 
        this.crearElemento("h3",this.correcto,"footer"); // Crea un elemento con DOM 
        this.crearElemento("h4","XML","footer"); // Crea un elemento con DOM        
        this.crearElemento("h5","","footer"); // Crea un elemento con DOM para el string con XML
        this.crearElemento("h4","Datos","footer"); // Crea un elemento con DOM 
        this.crearElemento("p","","footer"); // Crea un elemento con DOM para los datos obtenidos con XML
        this.cargarDatos();
        $("button").attr("disabled","disabled");
    }
}
var rutas = new ArchivoXML("Rutas.xml");

/*Archivo XML Oviedo.xml
<?xml version="1.0" encoding="UTF-8"?>
<current>
    <city id="3114711" name="Oviedo">
        <coord lon="-5.84" lat="43.36"/>
        <country>ES</country>
        <sun rise="2017-11-19T07:23:01" set="2017-11-19T16:54:35"/>
    </city>
    <temperature value="10" min="10" max="10" unit="metric"/>
    <humidity value="81" unit="%"/>
    <pressure value="1023" unit="hPa"/>
    <wind>
        <speed value="2.6" name="Light breeze"/>
        <gusts/>
        <direction value="160" code="SSE" name="South-southeast"/>
    </wind>
    <clouds value="0" name="clear sky"/>
    <visibility value="10000"/>
    <precipitation mode="no"/>
    <weather number="800" value="cielo claro" icon="01n"/>
    <lastupdate value="2017-11-19T22:30:00"/>
</current>
 */