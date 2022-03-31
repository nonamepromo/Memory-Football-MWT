import { setStyle } from "../utils/setStyle";
import { TEAMS } from "../utils/const";

function Carta() {

    const array_teams = TEAMS;

    var section = document.getElementById("mwt_project_game");

    for(let i = 0; i < array_teams.length; i++){
        const carta_univaq = document.createElement('div');
        setStyle(carta_univaq, {
            width: 'calc(25% - 10px)',
            height: 'calc(33.333% - 10px)',
            margin: '5px',
            position: 'relative',
            transform: 'scale(1)',
            transformStyle: 'preserve-3d',
            transition: 'transform .5s',
            boxShadow: '1px 1px 1px rgba(0,0,0,.3)',
            padding: '0',
            boxSizing: 'border-box',
        })
        carta_univaq.setAttribute("class", "carta-univaq");
        carta_univaq.setAttribute("id", i);
        carta_univaq.setAttribute("data-framework", array_teams[i].name);

        const fronteCarta = document.createElement('img');
        setStyle(fronteCarta, {
            width: '100%',
            height: '100%',
            padding: '20px',
            position: 'absolute',
            borderRadius: '5px',
            background: '#1C7CCC',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            margin: '0',
            boxSizing: 'border-box',
        });
        fronteCarta.setAttribute("class", "fronte-carta");
        fronteCarta.setAttribute("src", array_teams[i].img);
        fronteCarta.setAttribute("alt", array_teams[i].name);
        carta_univaq.appendChild(fronteCarta);

        const retroCarta = document.createElement('img');
        setStyle(retroCarta, {
            width: '100%',
            height: '100%',
            padding: '20px',
            position: 'absolute',
            borderRadius: '5px',
            background: '#1C7CCC',
            backfaceVisibility: 'hidden',
            margin: '0',
            boxSizing: 'border-box',
        });
        retroCarta.setAttribute("class", "retro-carta");
        retroCarta.setAttribute("src", './src/assets/cards/Univaq.png');
        retroCarta.setAttribute("alt", 'Univaq Logo');
        carta_univaq.appendChild(retroCarta);

        section.appendChild(carta_univaq);
    }

    function scopri(div){
        setStyle(div, {
            transform: 'rotateY(180deg)',
        })
    }

    function copri(div){
        setStyle(div, {
            transform: 'rotateY(0)',
        })
    }

    this.scopri = scopri;
    this.copri = copri;
}

export default Carta;