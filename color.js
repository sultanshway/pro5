class Color{
    constructor (){
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click", ()=>{
            this.select_color("color1");
        });
        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click", ()=>{
            this.select_color("color2");
        });
        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click", ()=>{
            this.select_color("color3");
        });
        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click", ()=>{
            this.select_color("color4");
        });

        if(localStorage.getItem("COLOR")==null){
            document.body.style.background = "#f7a5a5";
        }
        this.select_color(localStorage.getItem("COLOR"));
    }

    select_color(color){
        if(color == "color1"){
            document.body.style.background = "#c75c5c";
        }
        else if(color == "color2"){
             document.body.style.background = "#4f5d73";
        }
        else if(color == "color3"){
             document.body.style.background = "#f5cf87";
        }
        else if(color == "color4"){
             document.body.style.background = "rgb(71, 70, 70)";
        }
        localStorage.setItem("COLOR", color);
    }
}

onload = new Color();