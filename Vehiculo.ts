
namespace SegundoParcialLabo3{
    export interface Vehiculo{ //exporto la clase para que lea el namespace
        id:number;
        marca:string;
        modelo:string;
        precio:number;
        tipo:tipoVehiculo;
        
    }
    export enum tipoVehiculo{
        Auto = "auto",
        Camioneta = "camioneta"
    }
}
