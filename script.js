document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('section3').scrollIntoView({behavior: "smooth"});
});

//Event listener for the scroll event <----
window.addEventListener('scroll', function() {
    var box = document.getElementById('box');
    //Catch the position of the box in the viewport <----
    var boxPosition = box.getBoundingClientRect();
    //If the box is in the viewport (calculate beetween top and bottom position), add the class hide to #box, else hide <----
    if(boxPosition.top >= 0 && boxPosition.bottom <= window.innerHeight) {
        box.classList.add('hide');
    } else {
        box.classList.remove('hide');
    }
});