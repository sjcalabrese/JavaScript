function show(){
    var person ={
        "firstName":"John",
        "lastName":"Smith",
        "city":"NYC",
        "State":"NY",
        fullname : function(){
            return this.lastName + ", " + this.firstName;
        }
    };
    var name = person.fullname();
    document.getElementById("name").innerHTML=name;
}