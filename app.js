var button = document.getElementById("button")

var numofshape = 1
var oldvalue = 0

button.onclick = () => {
    var number = document.getElementById("number").value
    var circle = document.getElementById("circle")
    var square = document.getElementById("square")
    var rectangle = document.getElementById("rectangle")
    var oval =  document.getElementById("oval")
    var color = document.getElementById("palette").value
    // var triangle = document.getElementById("triangle")
    const $box = document.getElementById("box")

    number = Number(number) + Number(oldvalue)
    console.log(number)
    
    for(var i = numofshape; i <= number; i++){
        var shape = document.createElement('div')
        shape.innerHTML += numofshape
        if (square.checked){
            shape.classList.add("square")
            shape.style = "background-color:" + color+";"
        }
        else if (circle.checked){
            shape.classList.add("circle")
            shape.style = "background-color:" + color+";"
        }
        else if (rectangle.checked){
            shape.classList.add("rectangle")
            shape.style = "background-color:" + color+";"
        }
        else if (oval.checked){
            shape.classList.add("oval")
            shape.style = "background-color:" + color+";"
        }
        // else if (triangle.checked) {
        //     shape.classList.add("triangle")
        // }
        $box.appendChild(shape)
        numofshape += 1
        oldvalue += 1
    }

}