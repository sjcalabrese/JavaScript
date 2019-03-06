function carsList() {

    var cars = ["audi", "bmw", "volvo", "ford"];

    for (i = 0; i < cars.length; i++) {
        alert("i = " + i + ": " + cars[i]);
    }
}

function objectArray() {
    var person1 = {
        "firstName": "John",
        "lastName": "Smith",
        "city": "Dallas",
        "state": "TX"
    }

    var person2 = {
        "firstName": "Sal",
        "lastName": "Calabrese",
        "city": "Reston",
        "state": "VA"
    }

    /*var c = "{ 'firstname' : 'john', 'lastname' : 'smith' }";

    alert(c);*/

    var people = [person1, person2]
    
    for (i =0; i < people.length; i++)
        alert(people[i].lastName + ", \n" + people[i].firstName + ", \n" + people[i].city + ", \n" + people[i].state);
    for(var p in people){
        alert(people[p].firstName + people[p].lastname + people[p].city + people[p].state);
    }

}