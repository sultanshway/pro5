class Player{
    constructor(){
        var heightmain = document.getElementById("main_id");
        heightmain.style.height = screen.height + "px";
        if(screen.width<620){
            heightmain.style.width = screen.width + "px";
        };
        var heightdiv = document.getElementById("cont");
        heightdiv.style.height = screen.height-330 + "px";
    }
    
}
onload = new Player();


class Audio {
    constructor() {
        this.aduio_file = document.getElementById("audio_file");
        this.title_radio = document.getElementById("title_radio");
        this.play_btn = document.getElementById("play_btn");
        this.isPlayed;
        this.play_btn.addEventListener("click", ()=>{
            this.plya_audio();
        });

        this.names_radio = [];
        this.names_radio[0] = "Radaio Saudi Arabia";
        this.names_radio[1] = "Radaio Lebanon";
        this.names_radio[2] = "Radaio Egypt";
        this.names_radio[3] = "Radaio Iraq";
        this.names_radio[4] = "Radaio Jordan";
        
        this.source_audio = [];
        this.source_audio[0] = "https://uk6.internet-radio.com/proxy/aloula?mp=/stream;";
        this.source_audio[1] = "https://lbigroup.radioca.st/;";
        this.source_audio[2] = "https://radio.socialgenix.com/8004/stream";
        this.source_audio[3] = "https://l3.itworkscdn.net/itwaudio/9012/stream";
        this.source_audio[4] = "https://naifm.radioca.st/;";
    
        this.server = 0;
        this.setrsrc();

        document.getElementById("next").addEventListener("click" , ()=>{
            if (this.server<this.source_audio.length-1){
                ++this.server;
                this.isPlayed = false;
            };

            localStorage.setItem("save_pos",this.server);
            this.setrsrc();
        });

        document.getElementById("back").addEventListener("click" , ()=>{
            if (this.server>0){
                --this.server;
                 this.isPlayed = false;
            };
            localStorage.setItem("save_pos",this.server);
            this.setrsrc();
        });
    }

    setrsrc(){
        if (localStorage.getItem("save_pos") != null){
            this.server = localStorage.getItem("save_pos");
        };
        this.aduio_file.src = this.source_audio[this.server];
        this.title_radio.innerHTML = this.names_radio[this.server];
        this.plya_audio();
    }

    plya_audio(){
        if (this.isPlayed == false){
            this.aduio_file.play();
            this.play_btn.src = "loggo.jpg";
            this.isPlayed = true;
        }else{
            this.aduio_file.pause();
            this.play_btn.src = "logoo.jpg";
            this.isPlayed=false;
        }
    }
}

onload = new Audio();