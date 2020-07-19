var body;
var color_code;
var btn_plus_red, btn_minus_red, txt_num_red;
var btn_plus_green, btn_minus_green, txt_num_greend;
var btn_plus_blue, btn_minus_blue, txt_num_blue;
var interval_plus_red, interval_plus_green, interval_plus_blue;
var interval_minus_red, interval_minus_green, interval_minus_blue;
/*modal login*/
var btn_login, modal_login, btn_close_modal_login;
var modal_login_header, modal_login_body, modal_login_footer;
var btn_submit;

window.onload = function(){
    /*Variables*/
    body = document.getElementById("body");
    color_code = document.getElementById("color_code");

    /*Variables - modal login*/
    btn_login = document.getElementById("btn_login");
    modal_login = document.getElementById("modal_login");
    btn_close_modal_login = document.getElementById("btn_close_modal_login");
    modal_login_header = document.getElementById("modal_login_header");
    modal_login_body = document.getElementById("modal_login_body");
    modal_login_footer = document.getElementById("modal_login_footer");
    btn_submit = document.getElementById("btn_submit");

    /*variables - red*/
    btn_plus_red = document.getElementById("btn_plus_red");
    btn_minus_red = document.getElementById("btn_minus_red");
    txt_num_red = document.getElementById("txt_num_red");
    /*variables - green*/ 
    btn_plus_green = document.getElementById("btn_plus_green");
    btn_minus_green = document.getElementById("btn_minus_green");
    txt_num_green = document.getElementById("txt_num_green");
    /*variables - blue*/
    btn_plus_blue = document.getElementById("btn_plus_blue");
    btn_minus_blue = document.getElementById("btn_minus_blue");
    txt_num_blue = document.getElementById("txt_num_blue");

    /*Initialization*/
    body.style.backgroundColor = rgb();
    btn_submit.style.backgroundColor = rgb();
    color_code.innerHTML = rgb();

    /*Event Listener - red*/
    btn_plus_red.addEventListener("click", function(e){
        var new_num = parseInt(txt_num_red.innerHTML) + 1;
        if(new_num > 255){
            new_num = 255;
        }
        txt_num_red.innerHTML = new_num;
        body.style.backgroundColor = rgb();
        color_code.innerHTML = rgb();
    });
    btn_minus_red.addEventListener("click", function(e){
        var new_num = parseInt(txt_num_red.innerHTML) - 1;
        if(new_num < 0){
            new_num = 0;
        }
        txt_num_red.innerHTML = new_num;
        body.style.backgroundColor = rgb();
        color_code.innerHTML = rgb();
    });
    btn_plus_red.addEventListener("mousedown", function(e){
        interval_plus_red = setInterval(function(e){
            var new_num = parseInt(txt_num_red.innerHTML) + 1;
            if(new_num > 255){
                new_num = 255;
            }
            txt_num_red.innerHTML = new_num;
            body.style.backgroundColor = rgb();
            color_code.innerHTML = rgb();
        },100);
    });
    btn_plus_red.addEventListener("mouseup", function(e){
        clearInterval(interval_plus_red);
    });
    btn_minus_red.addEventListener("mousedown", function(e){
        interval_minus_red = setInterval(function(e){
            var new_num = parseInt(txt_num_red.innerHTML) - 1;
            if(new_num < 0){
                new_num = 0;
            }
            txt_num_red.innerHTML = new_num;
            body.style.backgroundColor = rgb();
            color_code.innerHTML = rgb();
        },100);
    });
    btn_minus_red.addEventListener("mouseup", function(e){
        clearInterval(interval_minus_red);
    });

    /*Event Listener - green*/
    btn_plus_green.addEventListener("click", function(e){
        var new_num = parseInt(txt_num_green.innerHTML) + 1;
        if(new_num > 255){
            new_num = 255;
        }
        txt_num_green.innerHTML = new_num;
        body.style.backgroundColor = rgb();
        color_code.innerHTML = rgb();
    });
    btn_minus_green.addEventListener("click", function(e){
        var new_num = parseInt(txt_num_green.innerHTML) - 1;
        if(new_num < 0){
            new_num = 0;
        }
        txt_num_green.innerHTML = new_num;
        body.style.backgroundColor = rgb();
        color_code.innerHTML = rgb();
    });
    btn_plus_green.addEventListener("mousedown", function(e){
        interval_plus_green = setInterval(function(e){
            var new_num = parseInt(txt_num_green.innerHTML) + 1;
            if(new_num > 255){
                new_num = 255;
            }
            txt_num_green.innerHTML = new_num;
            body.style.backgroundColor = rgb();
            color_code.innerHTML = rgb();
        },100);
    });
    btn_plus_green.addEventListener("mouseup", function(e){
        clearInterval(interval_plus_green);
    });
    btn_minus_green.addEventListener("mousedown", function(e){
        interval_minus_green = setInterval(function(e){
            var new_num = parseInt(txt_num_green.innerHTML) - 1;
            if(new_num < 0){
                new_num = 0;
            }
            txt_num_green.innerHTML = new_num;
            body.style.backgroundColor = rgb();
            color_code.innerHTML = rgb();
        },100);
    });
    btn_minus_green.addEventListener("mouseup", function(e){
        clearInterval(interval_minus_green);
    });

    /*Event Listener - blue*/
    btn_plus_blue.addEventListener("click", function(e){
        var new_num = parseInt(txt_num_blue.innerHTML) + 1;
        if(new_num > 255){
            new_num = 255;
        }
        txt_num_blue.innerHTML = new_num;
        body.style.backgroundColor = rgb();
        color_code.innerHTML = rgb();
    });
    btn_minus_blue.addEventListener("click", function(e){
        var new_num = parseInt(txt_num_blue.innerHTML) - 1;
        if(new_num < 0){
            new_num = 0;
        }
        txt_num_blue.innerHTML = new_num;
        body.style.backgroundColor = rgb();
        color_code.innerHTML = rgb();
    });
    btn_plus_blue.addEventListener("mousedown", function(e){
        interval_plus_blue = setInterval(function(e){
            var new_num = parseInt(txt_num_blue.innerHTML) + 1;
            if(new_num > 255){
                new_num = 255;
            }
            txt_num_blue.innerHTML = new_num;
            body.style.backgroundColor = rgb();
            color_code.innerHTML = rgb();
        },100);
    });
    btn_plus_blue.addEventListener("mouseup", function(e){
        clearInterval(interval_plus_blue);
    });
    btn_minus_blue.addEventListener("mousedown", function(e){
        interval_minus_blue = setInterval(function(e){
            var new_num = parseInt(txt_num_blue.innerHTML) - 1;
            if(new_num < 0){
                new_num = 0;
            }
            txt_num_blue.innerHTML = new_num;
            body.style.backgroundColor = rgb();
            color_code.innerHTML = rgb();
        },100);
    });
    btn_minus_blue.addEventListener("mouseup", function(e){
        clearInterval(interval_minus_blue);
    });

    /*copy color_code to clipboard*/
    color_code.addEventListener("click", function(e){
        var textarea = document.createElement("textarea");
        textarea.id = "tmp";
        textarea.style.height = 0;
        document.body.appendChild(textarea);
        textarea.value = this.innerHTML;
        var selector = document.querySelector("#tmp");
        selector.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        /*changing tooltip*/
        this.title = this.innerHTML + " copied";
    });
    color_code.addEventListener("mouseout", function(e){
        this.title = "click to copy !";
    });

    /*modal login operation*/
    btn_login.addEventListener("click", function(e){
        btn_submit.style.backgroundColor = rgb();
        modal_login_header.style.backgroundColor = rgb();
        modal_login_footer.style.backgroundColor = rgb();
        modal_login.style.display = "block";
    });
    btn_close_modal_login.addEventListener("click", function(e){
        modal_login.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(e) {
        if (e.target == modal_login) {
            modal_login.style.display = "none";
        }
    }
}

function rgb(){
    var r = parseInt(txt_num_red.innerHTML).toString(16);
    var g = parseInt(txt_num_green.innerHTML).toString(16);
    var b = parseInt(txt_num_blue.innerHTML).toString(16);
    if(r.length == 1){
        r = "0" + r;
    }
    if(g.length == 1){
        g = "0" + g;
    }
    if(b.length == 1){
        b = "0" + b;
    }
    return "#" + String(r) + String(g) + String(b);
}