let chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

let cadillac = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: "5",
    convertible: false,
    mileage: 12892
};

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function(){
        this.started = true;
    },
    stop: function (){
        this.started = false;
    },
    drive: function(){
        if (this.started){
            console.log("Zoom zoom");
        } else {
            console.log("You need to start the engine first!");
        }
    }
};

let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
}

function preQualify(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

let worthALook = preQualify(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();