import {TEAMS} from "./const";

let images = {};

//import images
function importAll(i) {
    let images = {};
    i.keys().map((item) => { 
        const img = images[item.replace('./', '')] = i(item);
        let imm = new Image();
        imm.src = img.default;

        return img;
    });
    return images;
}

export function importImagesCard() {
    images = importAll(require.context('../assets/cards', false, /\.(png)$/));
}

export function cartaCoperta(carta) {
    const teams = TEAMS[carta.teams];

    return images[`${value}.png`].default;
}


