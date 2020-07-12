var background;
var btn_red_plus, btn_green_plus, btn_blue_plus;
var btn_red_minus, btn_green_minus, btn_blue_minus;
var bar_red, bar_green, bar_blue;
var r, g, b;
var hex_color;
window.onload = function(){
    /*Variables*/
    background = document.getElementById("background");
    btn_red_plus = document.getElementById("btn_red_plus");
    btn_green_plus = document.getElementById("btn_green_plus");
    btn_blue_plus = document.getElementById("btn_blue_plus");
    btn_red_minus = document.getElementById("btn_red_minus");
    btn_green_minus = document.getElementById("btn_green_minus");
    btn_blue_minus = document.getElementById("btn_blue_minus");
    hex_color = document.getElementById("hex_color");

    /*Red plus*/
    btn_red_plus.addEventListener("click", function(){
        bar_red = document.getElementById("bar_red");
        if(parseInt(bar_red.style.width) + 10 > 100){
            bar_red.style.width = "100%";
        }else{
            bar_red.style.width = (parseInt(bar_red.style.width) + 10) + "%";
        }
        bar_red.innerHTML = parseInt(bar_red.style.width) + "%";
        /*Calculate*/
        hex_color.innerHTML = rgb();
        background.style.backgroundColor = hex_color.innerHTML;
    });
    /*Green plus*/
    btn_green_plus.addEventListener("click", function(){
        bar_green = document.getElementById("bar_green");
        if(parseInt(bar_green.style.width) + 10 > 100){
            bar_green.style.width = "100%";
        }else{
            bar_green.style.width = (parseInt(bar_green.style.width) + 10) + "%";
        }
        bar_green.innerHTML = parseInt(bar_green.style.width) + "%";
        /*Calculate*/
        hex_color.innerHTML = rgb();
        background.style.backgroundColor = hex_color.innerHTML;
    });
    /*Blue plus*/
    btn_blue_plus.addEventListener("click", function(){
        bar_blue = document.getElementById("bar_blue");
        if(parseInt(bar_blue.style.width) + 10 > 100){
            bar_blue.style.width = "100%";
        }else{
            bar_blue.style.width = (parseInt(bar_blue.style.width) + 10) + "%";
        }
        bar_blue.innerHTML = parseInt(bar_blue.style.width) + "%";
        /*Calculate*/
        hex_color.innerHTML = rgb();
        background.style.backgroundColor = hex_color.innerHTML;
    });
    /*Red minus*/
    btn_red_minus.addEventListener("click", function(){
        bar_red = document.getElementById("bar_red");
        bar_red.style.width = (parseInt(bar_red.style.width) - 10) + "%";
        bar_red.innerHTML = parseInt(bar_red.style.width) + "%";
        /*Calculate*/
        hex_color.innerHTML = rgb();
        background.style.backgroundColor = hex_color.innerHTML;
    });
    /*Green minus*/
    btn_green_minus.addEventListener("click", function(){
        bar_green = document.getElementById("bar_green");
        bar_green.style.width = (parseInt(bar_green.style.width) - 10) + "%";
        bar_green.innerHTML = parseInt(bar_green.style.width) + "%";
        /*Calculate*/
        hex_color.innerHTML = rgb();
        background.style.backgroundColor = hex_color.innerHTML;
    });
    /*Blue minus*/
    btn_blue_minus.addEventListener("click", function(){
        bar_blue = document.getElementById("bar_blue");
        bar_blue.style.width = (parseInt(bar_blue.style.width) - 10) + "%";
        bar_blue.innerHTML = parseInt(bar_blue.style.width) + "%";
        /*Calculate*/
        hex_color.innerHTML = rgb();
        background.style.backgroundColor = hex_color.innerHTML;
    });

}

function rgb(){
    r = Math.round(parseInt(bar_red.style.width) * 0.01 * 255).toString(16);
    if(r.length == 1){
        r = "0" + r;
    }
    g = Math.round(parseInt(bar_green.style.width) * 0.01 * 255).toString(16);
    if(g.length == 1){
        g = "0" + g;
    }
    b = Math.round(parseInt(bar_blue.style.width) * 0.01 * 255).toString(16);
    if(b.length == 1){
        b = "0" + b;
    }
    return "#" + String(r) + String(g) + String(b);
}