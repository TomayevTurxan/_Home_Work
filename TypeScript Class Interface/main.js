var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["MotorCycle"] = 1] = "MotorCycle";
})(VehicleType || (VehicleType = {}));
var EngineType;
(function (EngineType) {
    EngineType[EngineType["DOHC"] = 0] = "DOHC";
    EngineType[EngineType["SOHC"] = 1] = "SOHC";
    EngineType[EngineType["TURBO"] = 2] = "TURBO";
})(EngineType || (EngineType = {}));
var Capacity;
var Car = /** @class */ (function () {
    function Car(brandName, modelName, year, fuelCapacity, currentFuel, mileage, fuelFor1KM, engine, vehicleType) {
        this._brandName = brandName;
        this._modelName = modelName;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._mileage = mileage;
        this._fuelFor1KM = fuelFor1KM;
        this._engine = engine;
        this._vehicleType = vehicleType;
    }
    Object.defineProperty(Car.prototype, "brandName", {
        get: function () {
            return this._brandName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "modelName", {
        get: function () {
            return this._modelName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.getInfo = function () {
        console.log("\n      Brand: ".concat(this._brandName, "\n      Model: ").concat(this._modelName, "\n      Year: ").concat(this._year, "\n      Fuel Capacity: ").concat(this._fuelCapacity, "\n      Current Fuel: ").concat(this._currentFuel, "\n      Mileage: ").concat(this._mileage, "\n      Fuel Consumption: ").concat(this._fuelFor1KM, "\n      Engine Type: ").concat(this._engine, "\n      Vehicle Type: ").concat(this._vehicleType, "\n    "));
    };
    Car.prototype.drive = function (km) {
        var fuelRequire = km / this._fuelFor1KM;
        if (fuelRequire <= this._currentFuel) {
            this._currentFuel -= fuelRequire;
            this._mileage += km;
            return this._currentFuel;
        }
        else {
            console.log("Kifaet qeder benzin yoxdur");
            return this._currentFuel;
        }
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(brandName, modelName, year, fuelCapacity, currentFuel, mileage, fuelFor1KM, engine, vehicleType) {
        this._brandName = brandName;
        this._modelName = modelName;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._mileage = mileage;
        this._fuelFor1KM = fuelFor1KM;
        this._engine = engine;
        this._vehicleType = vehicleType;
    }
    Object.defineProperty(Motorcycle.prototype, "brandName", {
        get: function () {
            return this._brandName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "modelName", {
        get: function () {
            return this._modelName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    Motorcycle.prototype.getInfo = function () {
        console.log("\n        Brand: ".concat(this._brandName, "\n        Model: ").concat(this._modelName, "\n        Year: ").concat(this._year, "\n        Fuel Capacity: ").concat(this._fuelCapacity, "\n        Current Fuel: ").concat(this._currentFuel, "\n        Mileage: ").concat(this._mileage, "\n        Fuel Consumption: ").concat(this._fuelFor1KM, "\n        Engine Type: ").concat(this._engine, "\n        Vehicle Type: ").concat(this._vehicleType, "\n      "));
    };
    Motorcycle.prototype.drive = function (km) {
        var fuelRequire = km / this._fuelFor1KM;
        if (fuelRequire <= this._currentFuel) {
            this._currentFuel -= fuelRequire;
            this._mileage += km;
            return this._currentFuel;
        }
        else {
            console.log("Kifayet qeder benzin yoxdu");
            return this._currentFuel;
        }
    };
    Motorcycle.prototype.startEngine = function () {
        console.log("".concat(this._brandName, " ").concat(this._modelName, "'s engine is now running"));
    };
    return Motorcycle;
}());
var car = new Car("BMW", "X7", 2023, 60, 50, 0, 12, EngineType.DOHC, VehicleType.Car);
var motorcycle = new Motorcycle("Honda", "CBR600R", 2020, 20, 15, 0, 8, EngineType.SOHC, VehicleType.MotorCycle);
motorcycle.startEngine();
var carName = document.getElementById("car");
var motoName = document.getElementById("moto");
carName.textContent = "Car: ".concat(car.brandName, " ").concat(car.modelName);
motoName.textContent = "Motorcycle: ".concat(motorcycle.brandName, " ").concat(motorcycle.modelName);
