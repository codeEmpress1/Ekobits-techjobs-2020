// 1

window.onload = function(){
    
// 2
    let el = document.getElementById("change_heading");
    el.innerText = "Hello world!";

// 3
    let section = document.querySelector("section");
    section.addEventListener("mouseover", function(event){
        let selectedColor = document.querySelector('.selected');
        selectedColor.innerText = event.target.className;
    })

// 4
    let newDiv = document.createElement("div");

// 5
    newDiv.className = "purple";

// 6
    section.appendChild(newDiv);
}

// PART 2

    let button = document.querySelector("button");
    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    function reset(car1, car2){
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }

    button.addEventListener("click", function(event){
        button.disabled = true;
        car1.timer = setInterval(function(){
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car1.style.marginLeft) > window.innerWidth){
                alert("Winner is Car 1!");
                reset(car1,car2);
            }
        },60)

        car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert("Winner is Car 2!");
                reset(car1,car2);
            }
        },60)


    })