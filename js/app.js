// un array para representar los asientos
var airLineSeats = [
false,
false,
false,
false,
false,
false,
false,
false,
false,
false
];

// contador para asientos ocupados
var busySeats = 0;

var paintSeats = function(array){
    var containerSeats = document.getElementById('seats');

    for (var i = 0; i < array.length; i++){
        var seat = document.createElement('div');
        seat.className = 'seats';
        // del primero elemento al cuarto, es 1ra clase
        // esto es del 0 al 3
        if (i < 4) {
            seat.style.background = 'purple';
        } else {
            seat.style.backgroundColor = 'yellow';
        }
        containerSeats.appendChild(seat);
    }
};
var reserve = function() {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', chooseZone);
};

var chooseZone = function() {
    var choice = prompt('Elija una zona de reserva \n 1. Primera Clase \n 2. Economica \n Ingresa el numero de la zona que desee: ');
};

if (choice == 1) {
    checkFirstClassZone();
} else if (choice == 2) {
    checkEconomicZone();
} else {
    alert('Solo ingrese el numero valido de 1 o 2');
}
var checkFirstClassZone = function() {
    var zone = 'Primera Clase';
// va a verificar hasta el 3 (dentro del array)
// para ver si estan disponibles
    for (var index = 0; index < 4; index++) {
        var element = array[index];
        if(airLineSeats[index] == false) {
            airLineSeats[index] = true;
            reserveSeats([index]);
            paintTicket(index,zone);
            busySeats++;
            break;
        } else if(index == 3 && airLineSeats[index] == true){
            reasignEconomicZone(zone);
        }
    }
};

var checkEconomicZone = function () {
    var zone = 'Economica';
    for (var index = 4; index < 10; index++){
        if(airLineSeats[index] == false){
            airLineSeats[index] = true;
            reserveSeats([index]);
            paintTicket(index,zone);
            busySeats++;
            break;
        } else if (index == 9 && airLineSeats[index] == true){
            reasignFirstClassZone(zone);
        }
    }
};
var reserveSeats = function (indexToPaint){
    var seat = document.getElementsByClassName('seats');
    seat[indexToPaint].textContent = 'Ocupado';
};
var reasignEconomicZone = function(zone){
    if (busySeats == 10) {
        noSeats();
        nextFlight();
    } else {
    var reasign = confirm(
        'Ya no quedan asientos disponibles en ' + zone + ' T_T \n ¿Desea reservar en zona economica? '
    );
    if (reasign == true){
        checkEconomicZone();
    } else {
        nextFlight();
    }
  }
};
var reasignFirstClassZone = function(zone){
    if(busySeats == 10) {
        noSeats();
        nextFlight();
    } else {
    var reasign = confirm('Ya no quedan asientos disponibles en ' + zone + ' T_T \n ¿Desea reservar en zona economica? ');
    if (reasign == true){
        checkFirstClassZone();
    } else {
        nextFlight();
    }
    }
};
var paintTicket = function(index, zone){
    var containerTickects = document.getElementById('tickets');
    var ticket = document.createElement('div');
    ticket.className = 'ticketSeat';
    var title = document.createElement('p');
    var reservedSeating = document.createElement('p');
    var zoneClass = document.createElement('p');
    title.textContent = 'Pase de Abordar';
    reservedSeating.textContent = 'No. de asiento: ' + (index + 1) ;
    zoneClass.textContent = zone;
    ticket.appendChild(title);
    ticket.appendChild(reservedSeating);
    ticket.appendChild(zoneClass);
    containerTickects.appendChild(ticket);
};
var nextFlight = function() {
    alert('Nuestro proximo vuelo sale en tres horas');
};
 var noSeats = function() {
     alert('Lo sentimos, ya no quedan asientos disponibles en este avion');
 }
paintSeats(airLineSeats);
reserve();
