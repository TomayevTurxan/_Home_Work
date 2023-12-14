enum VehicleType {
  Car,
  MotorCycle,
}

enum EngineType {
  DOHC,
  SOHC,
  TURBO,
}

let Capacity: "30" | "40" | "50" | "70" | "100";

interface IVehicle<T> {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: number;
  currentFuel: T;
  mileage: number;
  fuelFor1KM: number;
  engine: EngineType;
  vehicleType: VehicleType;
  getInfo(): void;
  drive(km: number): T;
}

class Car implements IVehicle<number> {
  brandName: string;
  private _modelName: string;
  private _year: number;
  private _fuelCapacity: number;
  private _currentFuel: number;
  private _mileage: number;
  private _fuelFor1KM: number;
  private _engine: EngineType;
  private _vehicleType: VehicleType;

  constructor(
    brandName: string,
    modelName: string,
    year: number,
    fuelCapacity: number,
    currentFuel: number,
    mileage: number,
    fuelFor1KM: number,
    engine: EngineType,
    vehicleType: VehicleType
  ) {
    this.brandName = brandName;
    this._modelName = modelName;
    this._year = year;
    this._fuelCapacity = fuelCapacity;
    this._currentFuel = currentFuel;
    this._mileage = mileage;
    this._fuelFor1KM = fuelFor1KM;
    this._engine = engine;
    this._vehicleType = vehicleType;
  }

  get modelName(): string {
    return this._modelName;
  }
  get year(): number {
    return this._year;
  }
  get fuelCapacity(): number {
    return this._fuelCapacity;
  }
  get currentFuel(): number {
    return this._currentFuel;
  }

  get mileage(): number {
    return this._mileage;
  }

  get fuelFor1KM(): number {
    return this._fuelFor1KM;
  }
  get engine(): EngineType {
    return this._engine;
  }

  get vehicleType(): VehicleType {
    return this._vehicleType;
  }
  getInfo(): void {
    console.log(`
      Brand: ${this.brandName}
      Model: ${this._modelName}
      Year: ${this._year}
      Fuel Capacity: ${this._fuelCapacity}
      Current Fuel: ${this._currentFuel}
      Mileage: ${this._mileage}
      Fuel Consumption: ${this._fuelFor1KM}
      Engine Type: ${this._engine}
      Vehicle Type: ${this._vehicleType}
    `);
  }
  drive(km: number): number {
    const fuelRequire = km / this._fuelFor1KM;

    if (fuelRequire <= this._currentFuel) {
      this._currentFuel -= fuelRequire;
      this._mileage += km;
      return this._currentFuel;
    } else {
      console.log("Kifaet qeder benzin yoxdur");
      return this._currentFuel;
    }
  }
}

class Motorcycle implements IVehicle<number> {
  brandName: string;
  private _modelName: string;
  private _year: number;
  private _fuelCapacity: number;
  private _currentFuel: number;
  private _mileage: number;
  private _fuelFor1KM: number;
  private _engine: EngineType;
  private _vehicleType: VehicleType;

  constructor(
    brandName: string,
    modelName: string,
    year: number,
    fuelCapacity: number,
    currentFuel: number,
    mileage: number,
    fuelFor1KM: number,
    engine: EngineType,
    vehicleType: VehicleType
  ) {
    this.brandName = brandName;
    this._modelName = modelName;
    this._year = year;
    this._fuelCapacity = fuelCapacity;
    this._currentFuel = currentFuel;
    this._mileage = mileage;
    this._fuelFor1KM = fuelFor1KM;
    this._engine = engine;
    this._vehicleType = vehicleType;
  }

 

  get modelName(): string {
    return this._modelName;
  }

  get year(): number {
    return this._year;
  }

  get fuelCapacity(): number {
    return this._fuelCapacity;
  }

  get currentFuel(): number {
    return this._currentFuel;
  }

  get mileage(): number {
    return this._mileage;
  }

  get fuelFor1KM(): number {
    return this._fuelFor1KM;
  }

  get engine(): EngineType {
    return this._engine;
  }

  get vehicleType(): VehicleType {
    return this._vehicleType;
  }

  getInfo(): void {
    console.log(`
        Brand: ${this.brandName}
        Model: ${this._modelName}
        Year: ${this._year}
        Fuel Capacity: ${this._fuelCapacity}
        Current Fuel: ${this._currentFuel}
        Mileage: ${this._mileage}
        Fuel Consumption: ${this._fuelFor1KM}
        Engine Type: ${this._engine}
        Vehicle Type: ${this._vehicleType}
      `);
  }

  drive(km: number): number {
    const fuelRequire = km / this._fuelFor1KM;

    if (fuelRequire <= this._currentFuel) {
      this._currentFuel -= fuelRequire;
      this._mileage += km;
      return this._currentFuel;
    } else {
      console.log("Kifayet qeder benzin yoxdu");
      return this._currentFuel;
    }
  }

  startEngine(): void {
    console.log(
      `${this.brandName} ${this._modelName}'s engine is now running`
    );
  }
}

const car = new Car(
  "BMW",
  "X7",
  2023,
  60,
  50,
  0,
  12,
  EngineType.DOHC,
  VehicleType.Car
);
const motorcycle = new Motorcycle(
  "Honda",
  "CBR600R",
  2020,
  20,
  15,
  0,
  8,
  EngineType.SOHC,
  VehicleType.MotorCycle
);
motorcycle.startEngine();

const carName = document.getElementById("car") as HTMLHeadingElement;
const motoName = document.getElementById("moto") as HTMLHeadingElement;

carName.textContent = `Car: ${car.brandName} ${car.modelName}`;

motoName.textContent = `Motorcycle: ${motorcycle.brandName} ${motorcycle.modelName}`;
