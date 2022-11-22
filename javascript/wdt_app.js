class Employee {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Staff extends Employee {
    constructor(name, surname, picture, email) {
        super(name, surname);
        this.picture = picture;
        this.email = email;
    }
}

class Driver extends Employee {
    constructor(name, surname, vehicle, telephone, address, returnTime) {
        super(name, surname);
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.address = address;
        this.returnTime = returnTime;
    }
}

$("document").ready(function () {
    digitalClock();
    staffUserGet();





    async function staffUserGet() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=5',
            dataType: 'json',
            success: function(data) {
                let i = 0;
                // Making the Object Array
                let objects = [];
                // Populating the Object array with Staff Objects from the randomuser API data
                while (i < 5) {
                    // fiks så det lages 1 staff object per pers
                    objects[i] = new Staff(data.results[i].name.first, data.results[i].name.last, data.results[i].picture.thumbnail, data.results[i].email);
                    i++;
                }

                // Looping through the data and adding it in the table
                for (let i = 0; i < objects.length; i++) {
                    let picture = $(`#${i}`);
                    let name = $(`#${i}` + `${i}`);
                    let surname = $(`#${i}` + `${i}` + `${i}`);
                    let email = $(`#${i}` + `${i}` + `${i}` + `${i}`);

                    picture.html("<img src='" + objects[i].picture + "'</img>");
                    name.text(objects[i].name);
                    surname.text(objects[i].surname);
                    email.text(objects[i].email);
                }
            }
        });
    }

    function digitalClock() {
        // Adding the clock to date <span>
        document.getElementById("date").innerHTML = new Date();
        setInterval(() => {
            // Updating the clock every second
            document.getElementById("date").innerHTML = new Date();
        }, 1000);
    }
});

