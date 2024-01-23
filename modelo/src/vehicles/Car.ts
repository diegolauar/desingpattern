import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {

    constructor(color: string, year:number, engine: number, seats: number){
        this.configurationCar(color,year,engine,seats)
    }

    startVehicle(): void {
        console.log("Ligando motores")
    }
    configurationCar(color: string, year: number, engine: number, seats: number): void {
        console.log("Carro com as configurações : ", color,year,engine,seats);
        this.startVehicle();
    }

}