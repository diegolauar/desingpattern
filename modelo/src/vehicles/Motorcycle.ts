import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle
 {

    constructor(color:string, year: number, engine: number){
        this.configurationMotorcycle(color, year, engine)
    }
    startVehicle(): void {
        console.log("Ligando motores")
    }
    configurationMotorcycle(color: string, year: number, engine: number): void {
        console.log("Moto com as configurações : ", color,year,engine)
        this.startVehicle();

    }

}