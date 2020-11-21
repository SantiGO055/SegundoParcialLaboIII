var SegundoParcialLabo3;
(function (SegundoParcialLabo3) {
    var id = 0;
    var idPerro = 0;
    var idGato = 0;
    var idPajaro = 0;
    window.addEventListener("load", ejecutarBoton);
    var listaVehiculos = new Array();
    var vehiculoPrueba = new SegundoParcialLabo3.Auto(0, "ford", "mustang", 123456, 5);
    var vehiculoPrueba2 = new SegundoParcialLabo3.Auto(1, "chevrolet", "onix", 123456, 5);
    // listaVehiculos.push(vehiculoPrueba);
    // listaVehiculos.push(vehiculoPrueba2);
    function ejecutarBoton() {
        // let mascota:Perro = new Perro(); //por que el constructor lo declare con ? que no es obligatorio el nombre
        var select = document.getElementById("select");
        select.addEventListener("click", prepararCampos);
        var filter = document.getElementById("selectFilter");
        var inputNombre = document.getElementById("inputNombre");
        ;
        var inputDetalle = document.getElementById("inputDetalle");
        ;
        var botonAgregar = document.getElementById("btnAgregar");
        var botonPromedio = document.getElementById("btnCalcularPromedio");
        // inputNombre.addEventListener("blur",validarCampoNombre);
        botonPromedio.addEventListener("click", calcularPromedio);
        inputDetalle.addEventListener("blur", validarCampoDetalle);
        // filter.addEventListener("change",filterList);
        // botonAgregar.addEventListener("click",agregarPerroALaLista);
        filter.addEventListener("change", filterList);
        // botonAgregarGato.addEventListener("click",AgregarAnimal);
        // botonAgregarPajaro.addEventListener("click",AgregarAnimal);
    }
    SegundoParcialLabo3.ejecutarBoton = ejecutarBoton;
    function notificacion(bool) {
        var divNotificacion = document.createElement("div");
        divNotificacion.setAttribute("id", "divNotificacion");
        divNotificacion.setAttribute("class", "divNotificacion notificacionSinError");
        divNotificacion.setAttribute("hidden", "true");
        var body = document.getElementById("body");
        divNotificacion.hidden = false;
        if (bool) {
            var textoMensaje = document.createTextNode("Vehiculo dado de alta correctamente");
        }
        else {
            divNotificacion.setAttribute("class", "divNotificacion notificacionConError");
            textoMensaje = document.createTextNode("Error! Complete los campos correctamente");
        }
        // divNotificacion.hidden = true;
        divNotificacion.appendChild(textoMensaje);
        body.appendChild(divNotificacion);
    }
    SegundoParcialLabo3.notificacion = notificacion;
    function notificacionFiltro(bool) {
        var divNotificacion = document.createElement("div");
        divNotificacion.setAttribute("id", "divNotificacion");
        divNotificacion.setAttribute("class", "divNotificacion notificacionSinError");
        divNotificacion.setAttribute("hidden", "true");
        var body = document.getElementById("body");
        divNotificacion.hidden = false;
        if (bool) {
            var textoMensaje = document.createTextNode("Se filtro la lista correctamente");
        }
        else {
            divNotificacion.setAttribute("class", "divNotificacion notificacionConError");
            textoMensaje = document.createTextNode("No hay ninguna lista a filtrar");
        }
        // divNotificacion.hidden = true;
        divNotificacion.appendChild(textoMensaje);
        body.appendChild(divNotificacion);
    }
    SegundoParcialLabo3.notificacionFiltro = notificacionFiltro;
    function prepararCampos(event) {
        event.preventDefault();
        var mostrarCamposAgregar = document.getElementById("agregarVehiculo");
        // console.log("asd");
        var botonAgregar = document.getElementById("btnAgregar");
        var titulo = document.getElementById("titulo");
        var labelDetalle = document.getElementById("labelDetalle");
        var inputDetalle = document.getElementById("inputDetalle");
        var inputID = document.getElementById("inputID");
        var selectTraccion = document.getElementById("selectTraccion");
        selectTraccion.hidden = true;
        var inputTraccion = document.getElementById("inputDetalle");
        inputTraccion.hidden = false;
        var ID = calcularID();
        // console.log(ID);
        inputID.value = ID.toString();
        // let marca = (<HTMLInputElement>document.getElementById("inputMarca"));
        // let modelo = (<HTMLInputElement>document.getElementById("inputModelo"));
        // let precio = (<HTMLInputElement>document.getElementById("inputPrecio"));
        // inputNombre.addEventListener("blur",validarCampoNombre);
        // inputDetalle.addEventListener("blur",validarCampoDetalle);
        if (event.target.value === "Auto") {
            mostrarCamposAgregar.hidden = false;
            titulo.textContent = "Agregar Auto";
            labelDetalle.textContent = "Cantidad de puertas";
            inputDetalle.setAttribute("type", "number");
            // inputNombre.addEventListener("blur",validarCampoNombre);
            inputDetalle.addEventListener("blur", validarCampoDetalle);
            botonAgregar.addEventListener("click", agregarVehiculoALaLista);
        }
        else if (event.target.value === "Camioneta") {
            var selectTraccion = document.getElementById("selectTraccion");
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
            inputDetalle.setAttribute("type", "select");
            botonAgregar.addEventListener("click", agregarVehiculoALaLista);
            inputDetalle.addEventListener("blur", validarCampoDetalle);
        }
        else {
            mostrarCamposAgregar.hidden = true;
        }
        // console.log(event.target.value);
        // inputDetalle.setAttribute("id","raza");
    }
    SegundoParcialLabo3.prepararCampos = prepararCampos;
    function validarCampoDetalle() {
        // console.log(event.target.value);
        var detalle = document.getElementById("inputDetalle");
        if (detalle.value == "") {
            detalle.className = "inputError";
            return false;
        }
        else {
            detalle.className = " inputSinError";
            return true;
            // campoDetalle.className.replace(" inputError","inputSinError");
        }
    }
    SegundoParcialLabo3.validarCampoDetalle = validarCampoDetalle;
    function validarCampoNombre() {
        var nombre = document.getElementById("inputNombre");
        if (nombre.value == "") {
            nombre.className = " inputError";
            return false;
        }
        else {
            nombre.className = " inputSinError";
            return true;
            // campoDetalle.className.replace(" inputError","inputSinError");
        }
    }
    SegundoParcialLabo3.validarCampoNombre = validarCampoNombre;
    function agregarVehiculoALaLista() {
        var IDInput = document.getElementById("inputID").value;
        var marca = document.getElementById("inputMarca").value;
        var modelo = document.getElementById("inputModelo").value;
        var precio = document.getElementById("inputPrecio").value;
        var detalle = document.getElementById("inputDetalle").value;
        var tipo = document.getElementById("select").value;
        var traccion = document.getElementById("selectTraccion").value;
        if (tipo === "Auto") {
            var vehiculoAuto = new SegundoParcialLabo3.Auto(Number(IDInput), marca, modelo, Number(precio), Number(detalle));
            console.log(vehiculoAuto);
            AgregarVehiculo(vehiculoAuto);
            notificacion(true);
            // if(validarCampoNombre() && validarCampoDetalle()){
            // }
            // else{
            //     notificacion(false);
            // }
        }
        else if (tipo === "Camioneta") {
            var traccionBool = false;
            if (traccion == "Si") {
                traccionBool = true;
            }
            else if (traccion == "No") {
                traccionBool = false;
            }
            var vehiculoCamioneta = new SegundoParcialLabo3.Camioneta(id, marca, modelo, Number(precio), traccionBool);
            console.log(vehiculoCamioneta);
            AgregarVehiculo(vehiculoCamioneta);
            notificacion(true);
        }
        var btnAgregar = document.getElementById("btnAgregar");
    }
    SegundoParcialLabo3.agregarVehiculoALaLista = agregarVehiculoALaLista;
    /**El id se debe calcular buscando el id más alto de la lista de vehiculos y
    sumándole 1 (Utilizar reduce). */
    function calcularID() {
        return listaVehiculos.reduce(function (acum, item) {
            return acum = acum + 1;
        }, 0);
    }
    SegundoParcialLabo3.calcularID = calcularID;
    function calcularPromedio() {
        var inputPromedio = document.getElementById("inputPromedio");
        var len = listaVehiculos.map(function (item) {
            return item;
        });
        var promedioCalculado = listaVehiculos.reduce(function (cantidad, item) {
            cantidad += item.precio;
            var promedio = cantidad / len.length;
            return promedio;
        }, 0);
        inputPromedio.value = "" + Math.round(promedioCalculado);
    }
    SegundoParcialLabo3.calcularPromedio = calcularPromedio;
    function AgregarVehiculo(vehiculo) {
        listaVehiculos.push(vehiculo);
        agregarTabla();
    }
    SegundoParcialLabo3.AgregarVehiculo = AgregarVehiculo;
    function filterList(event) {
        event.preventDefault();
        var tablaFiltrada = document.getElementById("tablaFiltrada");
        var h3ListaFiltrada = document.getElementById("h3ListaFiltrada");
        tablaFiltrada.hidden = false;
        h3ListaFiltrada.hidden = false;
        // console.log(listaMascotas);
        var tcuerpoFiltrado = document.getElementById("tcuerpoFiltrado");
        // tcuerpoFiltrado.parentElement.removeChild(tcuerpoFiltrado);
        tcuerpoFiltrado.innerHTML = "";
        if (listaVehiculos != null) {
            console.log(event.target.value);
            if (event.target.value == "Auto") {
                var autoFiltrado = listaVehiculos.filter(function (item) {
                    return item.tipo == SegundoParcialLabo3.tipoVehiculo.Auto;
                });
                if (autoFiltrado.length >= 1) {
                    agregarTablaFiltrada(autoFiltrado);
                }
                else {
                    notificacionFiltro(false);
                }
                // console.log(autoFiltrado.length);
            }
            else if (event.target.value == "Camioneta") {
                var camionetaFiltrada = listaVehiculos.filter(function (item) {
                    return item.tipo == SegundoParcialLabo3.tipoVehiculo.Camioneta;
                });
                console.log(camionetaFiltrada.length);
                if (camionetaFiltrada.length >= 1) {
                    agregarTablaFiltrada(camionetaFiltrada);
                }
                else {
                    tablaFiltrada.hidden = true;
                    notificacionFiltro(false);
                }
            }
            else {
                tablaFiltrada.hidden = true;
                h3ListaFiltrada.hidden = true;
            }
        }
        else {
            // console.log(listaMascotas);
        }
    }
    SegundoParcialLabo3.filterList = filterList;
    function agregarTablaFiltrada(filtrado) {
        var tcuerpoFiltrado = document.getElementById("tcuerpoFiltrado");
        filtrado.forEach(function (item) {
            if (item.tipo === SegundoParcialLabo3.tipoVehiculo.Auto) {
                var auxAuto = item;
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
                var textPrecio = document.createTextNode("" + auxAuto.precio);
                colPrecio.appendChild(textPrecio);
                row.appendChild(colPrecio);
                var colDetalle = document.createElement("td");
                var textDetalle = document.createTextNode("" + auxAuto.cantidadPuertas);
                colDetalle.appendChild(textDetalle);
                row.appendChild(colDetalle);
                var colTipo = document.createElement("td");
                var textTipo = document.createTextNode(item.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                tcuerpoFiltrado.appendChild(row);
            }
            else if (item.tipo === SegundoParcialLabo3.tipoVehiculo.Camioneta) {
                tcuerpoFiltrado.innerHTML = "";
                var id = 0;
                var auxCamioneta = item;
                var tcuerpo = document.getElementById("tcuerpo");
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
                var textPrecio = document.createTextNode("" + auxCamioneta.precio);
                colPrecio.appendChild(textPrecio);
                row.appendChild(colPrecio);
                var colDetalle = document.createElement("td");
                var textDetalle = document.createTextNode("" + auxCamioneta.cuatroPorCuatro);
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
    SegundoParcialLabo3.agregarTablaFiltrada = agregarTablaFiltrada;
    function modificarDatos(event) {
        // var index = celda.parentNode.parentNode.rowIndex;
        event.preventDefault();
        var divModificar = document.getElementById("divCampos");
        var botonModificar = document.getElementById("botonModificar");
        var botonEliminar = document.getElementById("botonEliminar");
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
        console.log("id a eliminar: " + id);
        document.getElementById("id").value = id;
        document.getElementById("marca").value = marca;
        document.getElementById("modelo").value = modelo;
        document.getElementById("precio").value = precio;
        document.getElementById("detalle").value = detalle;
        botonModificar.addEventListener("click", function () {
            var id = document.getElementById("id").value;
            var marca = document.getElementById("marca").value;
            var modelo = document.getElementById("modelo").value;
            var precio = document.getElementById("precio").value;
            var detalle = document.getElementById("detalle").value;
            // console.log(listaMascotas);
            // console.log("asd");
            listaVehiculos.forEach(function (item) {
                // console.log(item);
                if (item.tipo == SegundoParcialLabo3.tipoVehiculo.Auto) {
                    // console.log(item.id);
                    // console.log(id);
                    if (item.id == Number(id)) {
                        item.id = Number(id);
                        item.marca = marca;
                        item.modelo = modelo;
                        item.precio = Number(precio);
                        item.cantidadPuertas = Number(detalle);
                        // console.log(item);
                    }
                }
                else if (item.tipo == SegundoParcialLabo3.tipoVehiculo.Camioneta) {
                    // console.log(item.id);
                    // console.log(id);
                    if (item.id == Number(id) && typeof (detalle) === 'number') {
                        item.id = Number(id);
                        item.marca = marca;
                        item.modelo = modelo;
                        item.precio = Number(precio);
                        item.cuatroPorCuatro = Boolean(detalle);
                    }
                    else {
                        notificacion(false);
                    }
                }
            });
            for (var index = 1; index < listaVehiculosHtml.length; index++) {
                console.log(listaVehiculosHtml[index].childNodes[0].textContent);
                divModificar.hidden = true;
                console.log(id);
                if (listaVehiculosHtml[index].childNodes[0].textContent == id) {
                    listaVehiculosHtml[index].childNodes[1].textContent = marca;
                    listaVehiculosHtml[index].childNodes[2].textContent = modelo;
                    listaVehiculosHtml[index].childNodes[3].textContent = precio;
                    listaVehiculosHtml[index].childNodes[4].textContent = detalle;
                    divModificar.hidden = true;
                    return true;
                }
                else {
                    notificacion(false);
                }
            }
        });
        botonEliminar.addEventListener("click", function () {
            var tabla = document.getElementById("tcuerpo");
            // console.log(listaAnimales);
            for (var index = 1; index < listaVehiculosHtml.length; index++) {
                if (listaVehiculosHtml[index].childNodes[0].textContent === id) {
                    var celda = listaVehiculosHtml[index];
                    tabla.removeChild(celda);
                    listaVehiculos.splice(index, 1);
                    console.log(listaVehiculos);
                    divModificar.hidden = true;
                    return true;
                }
            }
        });
    }
    SegundoParcialLabo3.modificarDatos = modificarDatos;
    function agregarTabla() {
        //poner hidden false a select de filtro
        var selectFilter = document.getElementById("selectFilter");
        var select = document.getElementById("agregarVehiculo");
        select.hidden = true;
        selectFilter.hidden = false;
        var ID = document.getElementById("inputID").value;
        var marca = document.getElementById("inputMarca").value;
        var modelo = document.getElementById("inputModelo").value;
        var precio = document.getElementById("inputPrecio").value;
        var detalle = document.getElementById("inputDetalle").value;
        var tipo = document.getElementById("select").value;
        var traccion = document.getElementById("selectTraccion").value;
        var headerTabla = document.getElementById("tabla");
        if (tipo == "Camioneta") {
            console.log("prueba");
            var colDetalle = document.createElement("td");
            var textDetalle = document.createTextNode(traccion);
            colDetalle.appendChild(textDetalle);
        }
        else {
            var colDetalle = document.createElement("td");
            var textDetalle = document.createTextNode(detalle);
            colDetalle.appendChild(textDetalle);
        }
        var tcuerpo = document.getElementById("tcuerpo");
        var row = document.createElement("tr");
        row.addEventListener("dblclick", modificarDatos);
        row.setAttribute("id", "");
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
    SegundoParcialLabo3.agregarTabla = agregarTabla;
})(SegundoParcialLabo3 || (SegundoParcialLabo3 = {}));
