var SegundoParcialLabo3;
(function (SegundoParcialLabo3) {
    var Auto = /** @class */ (function () {
        function Auto(id, marca, modelo, precio, cantidadPuertas) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cantidadPuertas = cantidadPuertas;
            this.tipo = SegundoParcialLabo3.tipoVehiculo.Auto;
        }
        return Auto;
    }());
    SegundoParcialLabo3.Auto = Auto;
})(SegundoParcialLabo3 || (SegundoParcialLabo3 = {}));
