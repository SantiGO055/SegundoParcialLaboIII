namespace SegundoParcialLabo3{
    var id = 0;
    var idPerro = 0;
    var idGato = 0;
    var idPajaro = 0;
    
    window.addEventListener("load",ejecutarBoton);
    var listaVehiculos:Array<Vehiculo> = new Array<Vehiculo>();
    let vehiculoPrueba:Auto = new Auto(0,"ford","mustang",123456,5);
    let vehiculoPrueba2:Auto = new Auto(1,"chevrolet","onix",123456,5);
    // listaVehiculos.push(vehiculoPrueba);
    // listaVehiculos.push(vehiculoPrueba2);
    
    export function ejecutarBoton(){
        // let mascota:Perro = new Perro(); //por que el constructor lo declare con ? que no es obligatorio el nombre

        

        var select = document.getElementById("select");

        select.addEventListener("click",prepararCampos);
        
        let filter = document.getElementById("selectFilter");
        var inputNombre = (<HTMLInputElement>document.getElementById("inputNombre"));;
        var inputDetalle = (<HTMLInputElement>document.getElementById("inputDetalle"));;
        let botonAgregar = document.getElementById("btnAgregar");
        let botonPromedio = document.getElementById("btnCalcularPromedio");
        // inputNombre.addEventListener("blur",validarCampoNombre);
        botonPromedio.addEventListener("click",calcularPromedio);
        inputDetalle.addEventListener("blur",validarCampoDetalle);
        // filter.addEventListener("change",filterList);


        // botonAgregar.addEventListener("click",agregarPerroALaLista);
        filter.addEventListener("change",filterList);
        // botonAgregarGato.addEventListener("click",AgregarAnimal);
        // botonAgregarPajaro.addEventListener("click",AgregarAnimal);
        
        
        
    }
    
    export function notificacion(bool:boolean){
        
        var divNotificacion = document.createElement("div");
        divNotificacion.setAttribute("id","divNotificacion");
        divNotificacion.setAttribute("class","divNotificacion notificacionSinError");
        divNotificacion.setAttribute("hidden","true");
        var body = document.getElementById("body");
        
        divNotificacion.hidden = false;
        if(bool){
            var textoMensaje = document.createTextNode("Vehiculo dado de alta correctamente");
        }
        else{
            divNotificacion.setAttribute("class","divNotificacion notificacionConError");
            textoMensaje = document.createTextNode("Error! Complete los campos correctamente");
        }
        
        // divNotificacion.hidden = true;
        divNotificacion.appendChild(textoMensaje);
        body.appendChild(divNotificacion);
    }
    export function notificacionFiltro(bool:boolean){
        
        var divNotificacion = document.createElement("div");
        divNotificacion.setAttribute("id","divNotificacion");
        divNotificacion.setAttribute("class","divNotificacion notificacionSinError");
        divNotificacion.setAttribute("hidden","true");
        var body = document.getElementById("body");
        
        divNotificacion.hidden = false;
        if(bool){
            var textoMensaje = document.createTextNode("Se filtro la lista correctamente");
        }
        else{
            divNotificacion.setAttribute("class","divNotificacion notificacionConError");
            textoMensaje = document.createTextNode("No hay ninguna lista a filtrar");
        }
        
        // divNotificacion.hidden = true;
        divNotificacion.appendChild(textoMensaje);
        body.appendChild(divNotificacion);
    }

    export function prepararCampos(event){
        event.preventDefault();
        
        let mostrarCamposAgregar = (<HTMLInputElement>document.getElementById("agregarVehiculo"));
        
        // console.log("asd");
        let botonAgregar = document.getElementById("btnAgregar");
        
        let titulo = (<HTMLInputElement>document.getElementById("titulo"));
        
        let labelDetalle = (<HTMLInputElement>document.getElementById("labelDetalle"));
        let inputDetalle = (<HTMLInputElement>document.getElementById("inputDetalle"));
        let inputID = (<HTMLInputElement>document.getElementById("inputID"));
        var selectTraccion = (<HTMLInputElement>document.getElementById("selectTraccion"));
        selectTraccion.hidden = true;
        
        var inputTraccion = (<HTMLInputElement>document.getElementById("inputDetalle"));
        inputTraccion.hidden = false;
        let ID = calcularID();
        // console.log(ID);
        inputID.value = ID.toString();

        // let marca = (<HTMLInputElement>document.getElementById("inputMarca"));
        // let modelo = (<HTMLInputElement>document.getElementById("inputModelo"));
        // let precio = (<HTMLInputElement>document.getElementById("inputPrecio"));

        
        // inputNombre.addEventListener("blur",validarCampoNombre);
        // inputDetalle.addEventListener("blur",validarCampoDetalle);

        if(event.target.value === "Auto"){
            

            mostrarCamposAgregar.hidden = false;
            titulo.textContent = "Agregar Auto";
            labelDetalle.textContent = "Cantidad de puertas";
            inputDetalle.setAttribute("type","number");

            // inputNombre.addEventListener("blur",validarCampoNombre);
            inputDetalle.addEventListener("blur",validarCampoDetalle);
            botonAgregar.addEventListener("click",agregarVehiculoALaLista);
            
            
            
        }
        else if(event.target.value === "Camioneta"){
            var selectTraccion = (<HTMLInputElement>document.getElementById("selectTraccion"));
            selectTraccion.hidden = false;
            inputTraccion.hidden = true;
            // console.log(div.childNodes[25]);
            // var selectTraccion = document.createElement("select");
            // var textOptionSi = document.createTextNode("Si");
            // var textOptionNo = document.createTextNode("No");
            // var valorSi = document.createElement("option");
            // var valorNo = document.createElement("option");
            // valorSi.appendChild(textOptionSi);
            // valorNo.appendChild(textOptionNo);
            // valorSi.setAttribute("value","optionSi");
            // valorNo.setAttribute("value","optionNo");
            // selectTraccion.appendChild(valorSi);
            // selectTraccion.appendChild(valorNo);

            // <option value="" selected>Seleccione un vehiculo</option>
            // div.appendChild(selectTraccion);
            mostrarCamposAgregar.hidden = false;
            titulo.textContent = "Agregar Camioneta";
            labelDetalle.textContent = "Cuatro por Cuatro";

            inputDetalle.setAttribute("type","select");
            botonAgregar.addEventListener("click",agregarVehiculoALaLista);
            inputDetalle.addEventListener("blur",validarCampoDetalle);
            

        }
        else{
            mostrarCamposAgregar.hidden = true;
        }
        // console.log(event.target.value);

        // inputDetalle.setAttribute("id","raza");
        

    }
    export function validarCampoDetalle(){
        // console.log(event.target.value);
        var detalle = (<HTMLInputElement>document.getElementById("inputDetalle"));
        if(detalle.value == ""){
            detalle.className = "inputError";
            return false;
        }
        else{
            detalle.className = " inputSinError";
            return true;
            // campoDetalle.className.replace(" inputError","inputSinError");
        }
    }
    export function validarCampoNombre(){
        
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre"));
        
        if(nombre.value == ""){
            nombre.className = " inputError";
            return false;
        }
        else{
            nombre.className = " inputSinError";
            return true;
            // campoDetalle.className.replace(" inputError","inputSinError");
        }
    }
    export function agregarVehiculoALaLista(){
        
        
        var IDInput = (<HTMLInputElement>document.getElementById("inputID")).value;
        var marca = (<HTMLInputElement>document.getElementById("inputMarca")).value;
        var modelo = (<HTMLInputElement>document.getElementById("inputModelo")).value;
        var precio = (<HTMLInputElement>document.getElementById("inputPrecio")).value;
        var detalle = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        let tipo = (<HTMLInputElement>document.getElementById("select")).value;
        let traccion = (<HTMLInputElement>document.getElementById("selectTraccion")).value;

        
        

        if(tipo==="Auto"){
            
            let vehiculoAuto:Auto = new Auto(Number(IDInput),marca,modelo,Number(precio),Number(detalle));
            console.log(vehiculoAuto);
            AgregarVehiculo(vehiculoAuto);
            notificacion(true);
            // if(validarCampoNombre() && validarCampoDetalle()){
            // }
            // else{
            //     notificacion(false);
            // }
        }
        else if(tipo==="Camioneta"){
            var traccionBool = false;
            if(traccion == "Si"){
                traccionBool = true;
            }
            else if(traccion == "No"){
                traccionBool = false;
            }
            
            let vehiculoCamioneta:Camioneta = new Camioneta(id,marca,modelo,Number(precio),traccionBool);
            console.log(vehiculoCamioneta);
            AgregarVehiculo(vehiculoCamioneta);
            notificacion(true);
        }
        var btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
    }

    /**El id se debe calcular buscando el id más alto de la lista de vehiculos y
    sumándole 1 (Utilizar reduce). */
    export function calcularID(){
        return listaVehiculos.reduce((acum, item)=>{
            return acum = acum + 1;
          },0);
    }
    export function calcularPromedio(){
        var inputPromedio = (<HTMLInputElement>document.getElementById("inputPromedio"));

        var len = listaVehiculos.map((item)=>{
            return item;
          });
        var promedioCalculado = listaVehiculos.reduce((cantidad, item)=>{
            cantidad += item.precio;
            var promedio = cantidad / len.length;
            return promedio;
          },0);
        inputPromedio.value = "" + Math.round(promedioCalculado);
        
    }
    
    
    export function AgregarVehiculo(vehiculo:Vehiculo){

        listaVehiculos.push(vehiculo);
        
        agregarTabla();
        
    }
    export function filterList(event){


        event.preventDefault();
        var tablaFiltrada = (<HTMLInputElement>document.getElementById("tablaFiltrada"));
        var h3ListaFiltrada = (<HTMLInputElement>document.getElementById("h3ListaFiltrada"));
        tablaFiltrada.hidden = false;
        h3ListaFiltrada.hidden = false;
        // console.log(listaMascotas);
        
        var tcuerpoFiltrado = (<HTMLInputElement>document.getElementById("tcuerpoFiltrado"));
        // tcuerpoFiltrado.parentElement.removeChild(tcuerpoFiltrado);
        tcuerpoFiltrado.innerHTML = "";

        if(listaVehiculos!=null){
            console.log(event.target.value);
            if(event.target.value == "Auto"){
                
                var autoFiltrado = listaVehiculos.filter((item)=>{
                    return item.tipo == tipoVehiculo.Auto;
                });
                if(autoFiltrado.length>=1){
                    agregarTablaFiltrada(autoFiltrado);
                }
                else{
                    notificacionFiltro(false);
                }
                // console.log(autoFiltrado.length);
            }
            else if(event.target.value == "Camioneta"){
                var camionetaFiltrada = listaVehiculos.filter((item)=>{
                    return item.tipo == tipoVehiculo.Camioneta;
                });
                console.log(camionetaFiltrada.length);
                if(camionetaFiltrada.length>=1){
                    agregarTablaFiltrada(camionetaFiltrada);
                }
                else{
                    tablaFiltrada.hidden = true;
                    notificacionFiltro(false);
                }
            }
            else{
                tablaFiltrada.hidden = true;
                h3ListaFiltrada.hidden = true;
            }
        }
        else{
            // console.log(listaMascotas);
        }
        
    }
    
    export function agregarTablaFiltrada(filtrado:Array<Vehiculo>){
        
        var tcuerpoFiltrado = (<HTMLInputElement>document.getElementById("tcuerpoFiltrado"));
        
        filtrado.forEach((item) => {
            if(item.tipo === tipoVehiculo.Auto){
                
                let auxAuto = <Auto>item;
                
                // console.log(item.nombre);

                var row = document.createElement("tr");

                

                var colID = document.createElement("td");
                var textId = document.createTextNode(String(auxAuto.id));
                colID.appendChild(textId);
                row.appendChild(colID);

                var colMarca = document.createElement("td");
                var textMarca = document.createTextNode(auxAuto.marca);
                colMarca.appendChild(textMarca);
                row.appendChild(colMarca);

                var colModelo = document.createElement("td");
                var textModelo = document.createTextNode(auxAuto.modelo);
                colModelo.appendChild(textModelo);
                row.appendChild(colModelo);

                var colPrecio = document.createElement("td");
                var textPrecio = document.createTextNode("" +auxAuto.precio);
                colPrecio.appendChild(textPrecio);
                row.appendChild(colPrecio);

                var colDetalle = document.createElement("td");
                var textDetalle = document.createTextNode("" +auxAuto.cantidadPuertas);
                colDetalle.appendChild(textDetalle);
                row.appendChild(colDetalle);

                var colTipo = document.createElement("td");
                var textTipo = document.createTextNode(item.tipo);
                
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                tcuerpoFiltrado.appendChild(row);
            }
            else if(item.tipo === tipoVehiculo.Camioneta){
                tcuerpoFiltrado.innerHTML = "";
                var id = 0;
                let auxCamioneta = <Camioneta>item;
                var tcuerpo = (<HTMLInputElement>document.getElementById("tcuerpo"));
                var row = document.createElement("tr");

                

                var colID = document.createElement("td");
                var textId = document.createTextNode(String(auxCamioneta.id));
                colID.appendChild(textId);
                row.appendChild(colID);

                var colMarca = document.createElement("td");
                var textMarca = document.createTextNode(auxCamioneta.marca);
                colMarca.appendChild(textMarca);
                row.appendChild(colMarca);

                var colModelo = document.createElement("td");
                var textModelo = document.createTextNode(auxCamioneta.modelo);
                colModelo.appendChild(textModelo);
                row.appendChild(colModelo);

                var colPrecio = document.createElement("td");
                var textPrecio = document.createTextNode("" +auxCamioneta.precio);
                colPrecio.appendChild(textPrecio);
                row.appendChild(colPrecio);

                var colDetalle = document.createElement("td");
                var textDetalle = document.createTextNode("" +auxCamioneta.cuatroPorCuatro);
                colDetalle.appendChild(textDetalle);
                row.appendChild(colDetalle);

                var colTipo = document.createElement("td");
                var textTipo = document.createTextNode(item.tipo);
                
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                tcuerpoFiltrado.appendChild(row);
            }
            // console.log(item);
            
        });
    }
    
    export function modificarDatos(event){
            // var index = celda.parentNode.parentNode.rowIndex;
            
            event.preventDefault();
            var divModificar = (<HTMLInputElement>document.getElementById("divCampos"));
            var botonModificar = (<HTMLInputElement>document.getElementById("botonModificar"));
            var botonEliminar = (<HTMLInputElement>document.getElementById("botonEliminar"));
            
            var listaVehiculosHtml = event.target.parentNode.parentNode.childNodes;
            var fila = event.target.parentNode.childNodes;
            
            var sacoID = event.target.parentNode;
            
            
            var id = fila[0].textContent;
            var marca = fila[1].textContent;
            var modelo = fila[2].textContent;
            var precio = fila[3].textContent;
            var detalle = fila[4].textContent;
            var tipo = fila[5].textContent;
            // var id = sacoID.getAttribute("id");
            
            // console.log(sacoID);
            
            divModificar.hidden = false;
            var idNumber = parseInt(id);
            console.log(id);
            console.log("id a eliminar: "+id);
            (<HTMLInputElement>document.getElementById("id")).value = id;
            (<HTMLInputElement>document.getElementById("marca")).value = marca;
            (<HTMLInputElement>document.getElementById("modelo")).value = modelo;
            (<HTMLInputElement>document.getElementById("precio")).value = precio;
            (<HTMLInputElement>document.getElementById("detalle")).value = detalle;
            
            botonModificar.addEventListener("click",()=>{
                let id = (<HTMLInputElement>document.getElementById("id")).value;
                let marca = (<HTMLInputElement>document.getElementById("marca")).value;
                let modelo = (<HTMLInputElement>document.getElementById("modelo")).value;
                let precio = (<HTMLInputElement>document.getElementById("precio")).value;
                let detalle = (<HTMLInputElement>document.getElementById("detalle")).value;

                // console.log(listaMascotas);
                // console.log("asd");
                listaVehiculos.forEach(item => {
                    // console.log(item);
                    if(item.tipo == tipoVehiculo.Auto){
                    // console.log(item.id);
                    // console.log(id);

                        if(item.id == Number(id)){
                            (<Auto>item).id = Number(id);
                            (<Auto>item).marca = marca;
                            (<Auto>item).modelo = modelo;
                            (<Auto>item).precio = Number(precio);
                            (<Auto>item).cantidadPuertas = Number(detalle);
                            // console.log(item);
                        }
                    }
                    else if(item.tipo == tipoVehiculo.Camioneta){
                        // console.log(item.id);
                        // console.log(id);
                        if(item.id == Number(id) && typeof(detalle) === 'number'){
                            (<Camioneta>item).id = Number(id);
                            (<Camioneta>item).marca = marca;
                            (<Camioneta>item).modelo = modelo;
                            (<Camioneta>item).precio = Number(precio);
                            (<Camioneta>item).cuatroPorCuatro = Boolean(detalle);
                        }
                        else{
                            notificacion(false);
                        }
                    }
                    
                });
                
                for (let index = 1; index < listaVehiculosHtml.length; index++) {
                    console.log(listaVehiculosHtml[index].childNodes[0].textContent);
                    divModificar.hidden = true;
                    console.log(id);
                    if(listaVehiculosHtml[index].childNodes[0].textContent == id){
                        
                        
                        listaVehiculosHtml[index].childNodes[1].textContent = marca;
                        listaVehiculosHtml[index].childNodes[2].textContent = modelo;
                        listaVehiculosHtml[index].childNodes[3].textContent = precio;
                        listaVehiculosHtml[index].childNodes[4].textContent = detalle;
                        
                        
                        divModificar.hidden = true;
                        return true;
                    }
                    else{
                        notificacion(false);
                    }
                }
                
                
            });

            botonEliminar.addEventListener("click",()=>{
                var tabla = document.getElementById("tcuerpo");
                // console.log(listaAnimales);
                for (let index = 1; index < listaVehiculosHtml.length; index++) {
                    
                    
                    if(listaVehiculosHtml[index].childNodes[0].textContent === id){
                        
                        var celda = listaVehiculosHtml[index];
                        
                        tabla.removeChild(celda);
                        
                        

                        // listaVehiculos.splice(index,1);
                        console.log(listaVehiculos);
                        divModificar.hidden = true;
                        // return true;
                        
                    }
            
                }
                for (let i = 0; i < listaVehiculos.length; i++){
                    console.log(listaVehiculos[i].id);
                    console.log(idNumber);
                    if(listaVehiculos[i].id === idNumber){
                        listaVehiculos.splice(i,1);
                        

                    }

                }
                
                
            });
    }
    
    export function agregarTabla(){
        
        //poner hidden false a select de filtro
        let selectFilter = (<HTMLInputElement>document.getElementById("selectFilter"));
        let select = (<HTMLInputElement>document.getElementById("agregarVehiculo"));
        select.hidden = true;
        selectFilter.hidden = false;

        let ID = (<HTMLInputElement>document.getElementById("inputID")).value;
        let marca = (<HTMLInputElement>document.getElementById("inputMarca")).value;
        let modelo = (<HTMLInputElement>document.getElementById("inputModelo")).value;
        let precio = (<HTMLInputElement>document.getElementById("inputPrecio")).value;
        let detalle = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        let tipo = (<HTMLInputElement>document.getElementById("select")).value;
        let traccion = (<HTMLInputElement>document.getElementById("selectTraccion")).value;

        let headerTabla = (<HTMLInputElement>document.getElementById("tabla"));
        
        if(tipo == "Camioneta"){
            console.log("prueba");
            var colDetalle = document.createElement("td");
            var textDetalle = document.createTextNode(traccion);
            colDetalle.appendChild(textDetalle);
        }
        else{
            var colDetalle = document.createElement("td");
            var textDetalle = document.createTextNode(detalle);
            colDetalle.appendChild(textDetalle);
        }
        var tcuerpo = (<HTMLInputElement>document.getElementById("tcuerpo"));
        var row = document.createElement("tr");

        row.addEventListener("dblclick",modificarDatos);
        row.setAttribute("id","");

        var colID = document.createElement("td");
        var textId = document.createTextNode(ID);
        colID.appendChild(textId);
        row.appendChild(colID);

        var colMarca = document.createElement("td");
        var textMarca = document.createTextNode(marca);
        colMarca.appendChild(textMarca);
        row.appendChild(colMarca);

        var colModelo = document.createElement("td");
        var textModelo = document.createTextNode(modelo);
        colModelo.appendChild(textModelo);
        row.appendChild(colModelo);

        var colPrecio = document.createElement("td");
        var textPrecio = document.createTextNode(precio);
        colPrecio.appendChild(textPrecio);
        row.appendChild(colPrecio);

        
        row.appendChild(colDetalle);

        var colTipo = document.createElement("td");
        var textTipo = document.createTextNode(tipo);
        
        colTipo.appendChild(textTipo);
        row.appendChild(colTipo);
        tcuerpo.appendChild(row);

    }
    
}