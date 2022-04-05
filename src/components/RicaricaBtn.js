import { setStyle } from "../utils/setStyle";

function CreaBottone() {
    const posizione_bottone = document.createElement('div');
    setStyle(posizione_bottone, styles.POSIZIONE_BOTTONE);
    document.body.appendChild(posizione_bottone);

    const ricarica = document.createElement('button');
    setStyle(ricarica, styles.RICARICA);
    posizione_bottone.appendChild(ricarica);

    ricarica.addEventListener('click', ricaricaPagina)
    ricarica.addEventListener('mouseover', mouseOver);
    ricarica.addEventListener('mouseout', mouseOut);
    ricarica.innerHTML = 'Ricomincia';

    function mouseOver(){
        setStyle(ricarica, {
            backgroundColor: '#2c6b2e'
        })
    }

    function mouseOut(){
        setStyle(ricarica,{
            backgroundColor: '#4CAF50'
        })
    }

    function ricaricaPagina(){
        window.location.reload();
    }

    this.posizione_bottone = posizione_bottone;
    this.ricarica = ricarica;
}

export default CreaBottone;

const styles = {
    RICARICA: {
        backgroundColor: '#4CAF50',
        borderRadius: '30px',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        fontSize: '16px',
        position: 'relative',
    },
    POSIZIONE_BOTTONE: {
        width: '100%',
        position: 'absolute',
        bottom: '3%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};