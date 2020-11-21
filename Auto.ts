namespace SegundoParcialLabo3{
    export class Auto implements Vehiculo{
        id:number;
        marca:string;
        modelo:string;
        precio:number;
        cantidadPuertas:number;
        tipo:tipoVehiculo;

        constructor(id:number,marca:string,modelo:string,precio:number,cantidadPuertas:number){
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cantidadPuertas = cantidadPuertas;
            this.tipo = tipoVehiculo.Auto;
        }
    }
}