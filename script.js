function newItem(){

// Adding a new item

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert("You must write something!");
} else {
    $('#list').append(li);
}


//Crossing out an item

li.on("dblclick", function() {
    li.toggleClass("strike");
});


//Adding the delete button

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'))
li.append(crossOutButton);


// Adding CLASS DELETE

crossOutButton.on("click", function() {
    li.addClass("delete");
});


// Reordering the items

$('#list').sortable();

}