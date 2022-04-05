import CounterErrori from "./CounterErrori";
import CreaBottone from "./RicaricaBtn";
import Mazzo from "./Mazzo";
import { setStyle } from "../utils/setStyle";

export function Memory() {
    const mwt_project_game = document.createElement('section');
    setStyle(mwt_project_game, styles.MWT_SECTION_GAME);
    mwt_project_game.setAttribute("id", "mwt_project_game" )
    document.body.appendChild(mwt_project_game);

    const refresh = new CreaBottone();
    const sbagli = new CounterErrori();

    let cartaGirata = false;
    let bloccaCarta = false;
    let primaCarta, secondaCarta;
    let errore = -1;

    const mazzo = new Mazzo();

    const collection = document.getElementsByClassName("carta-univaq");
    Object.entries(collection).map((object) => {
        object[1].addEventListener('click', giraLaCarta, false);
        object[1].myParam = object[1].id;
    });

    function giraLaCarta(id) {
        if (bloccaCarta) return;
        if (this === primaCarta) return;

        var div = document.getElementById(id.currentTarget.myParam);
        mazzo.scopri(div);
        if (!cartaGirata) {
          // first click
          cartaGirata = true;
          primaCarta = this;
          return;
        }
        // second click
        secondaCarta = this;
            checkUguali();
      }
      
    function checkUguali() {
        let uguali = primaCarta.dataset.framework === secondaCarta.dataset.framework;
        uguali ? carteUguali() : carteErrate()&updateErrore();
    }

    function carteUguali() {
        primaCarta.removeEventListener('click', giraLaCarta);
        secondaCarta.removeEventListener('click', giraLaCarta);
        
        resetCarta();
    }

    function carteErrate() {
        bloccaCarta = true;

        setTimeout(() => {
        
        mazzo.copri(primaCarta);
        mazzo.copri(secondaCarta);

        resetCarta();
        }, 800);
    }

    function resetCarta() {
        [cartaGirata, bloccaCarta] = [false, false];
        [primaCarta, secondaCarta] = [null, null];
    }

    (function mischia() {
        Object.entries(collection).map((object) => {
            let randomPos = Math.floor(Math.random() * 12);
            object[1].style.order = randomPos;
        });
    })();

    let counter = sbagli.posizione_errore.querySelector('.counter_errori');
    function updateErrore() {
        errore++;
        if(errore == 0){
            sbagli.posizione_errore.setAttribute("hidden", true);
        } else{
            counter.textContent = "Errori: " + errore;
        }
    };  

    this.mwt_project_game = mwt_project_game;
}

const styles = {
    MWT_SECTION_GAME: {
        width: '640px',
        height: '640px',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        perspective: '1000px',
    }
};