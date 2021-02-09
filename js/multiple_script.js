function Restaurant(name, tables, booked) {
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.breakfast = breakfast;
    this.checkAvailablity = function() {
        return this.tables - this.booked;
    };
}

var chefDublin = new Restaurant('The Chef Cuisine Dublin', 120, 25, true);
var chefBray = new Restaurant('The Chef Cuisine Bray', 50, 31, false);

var details1 = chefDublin.name + ' tables: ';
    details1 += chefDublin.checkAvailablity();
var elRestaurant1 = document.getElementById('restaurant1');
elRestaurant1.textContent = details1;
document.getElementById('breakfastService').textContent = 'Breakfast' + chefDublin.breakfast;

var details2 = chefBray.name + ' tables: ';
    details2 += chefBray.checkAvailablity();
var elRestaurant2 = document.getElementById('restaurant2');
elRestaurant2.textContent = details2;

