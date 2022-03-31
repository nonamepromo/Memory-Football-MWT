import { setStyle } from "../utils/setStyle";

function CounterErrori(){
    const posizione_errore = document.createElement('div');
    setStyle(posizione_errore, {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });
    document.body.appendChild(posizione_errore);

    const counter_errori = document.createElement('h1');
    counter_errori.setAttribute("class", "counter_errori");
    setStyle(counter_errori, {
        padding: '15px',
        color: 'red',
        fontSize: '25px',
        position: 'relative',
    }) 
    posizione_errore.appendChild(counter_errori);

    this.posizione_errore = posizione_errore;
    this.counter_errori = counter_errori;//??
}

export default CounterErrori;