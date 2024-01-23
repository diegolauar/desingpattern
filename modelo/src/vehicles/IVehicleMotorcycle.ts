import IVehicle from "./IVehicle";

export default interface IVehicleMotorcycle extends IVehicle { 
    startVehicle(): void;
    configurationMotorcycle(color: string, year:number, engine: number): void;
}