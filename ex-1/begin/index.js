const car = {
  brand: "Lamborghini",
  type: "Aventador",
  info: function () {
    return `Het merk van deze wagen is ${this.brand}, het type is ${this.type}`;
  },
  brake: function () {
    return `${this.brand} ${this.type} remt af!`;
  },
};

const car2 = {
  brand: "Opel",
  type: "Combo",
  info: function () {
    return `Het merk van deze wagen is ${this.brand}, het type is ${this.type}`;
  },
  brake: function () {
    return `${this.brand} ${this.type} remt af!`;
  },
};

const motorCycle = {
  brand: "Suzuki",
  type: "GSR-750",
  info: function () {
    return `Het merk van deze motor is ${this.brand}, het type is ${this.type}`;
  },
  wheelie: function () {
    return `${this.brand} ${this.type} doet een wheelie!`;
  },
};

const vehicles = [car, car2, motorCycle];

const printInformation = () => {
  vehicles.forEach((vehicle) => console.log(vehicle.info()));
  console.log(car2.brake());
  console.log(motorCycle.wheelie());
};

printInformation();
