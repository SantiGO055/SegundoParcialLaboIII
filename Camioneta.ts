namespace SegundoParcialLabo3{
    export class Camioneta implements Vehiculo{
        id:number;
        marca:string;
        modelo:string;
        precio:number;
        cuatroPorCuatro:boolean;
        tipo:tipoVehiculo;

        constructor(id:number,marca:string,modelo:string,precio:number,cuatroPorCuatro:boolean){
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cuatroPorCuatro = cuatroPorCuatro;
            this.tipo = tipoVehiculo.Camioneta;
        }
    }
}