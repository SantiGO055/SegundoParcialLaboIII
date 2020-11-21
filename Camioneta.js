var SegundoParcialLabo3;
(function (SegundoParcialLabo3) {
    var Camioneta = /** @class */ (function () {
        function Camioneta(id, marca, modelo, precio, cuatroPorCuatro) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cuatroPorCuatro = cuatroPorCuatro;
            this.tipo = SegundoParcialLabo3.tipoVehiculo.Camioneta;
        }
        return Camioneta;
    }());
    SegundoParcialLabo3.Camioneta = Camioneta;
})(SegundoParcialLabo3 || (SegundoParcialLabo3 = {}));
