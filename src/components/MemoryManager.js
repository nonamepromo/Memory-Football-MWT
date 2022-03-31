import { setStyle } from "../utils/setStyle";
import {Memory} from "./Memory"

function MemoryManager() {

    setStyle(document.body, {
        height: '100vh',
        display: 'flex',
        background: '#060AB2',
    });

    const game = new Memory();
}


export default MemoryManager