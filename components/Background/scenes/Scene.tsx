import { Scene as SceneThree } from "three"
import Camara from "../clases/Camara"
import Loader from "../clases/Loader"
import Luces from "../clases/Luces"
import Charizard from "../clases/pokemon/Charizard"
import Entei from "../clases/pokemon/Entei"
import Groudon from "../clases/pokemon/Groudon"
import Hierba from "../clases/pokemon/Hierba"
import Logo from "../clases/pokemon/Logo"
import Pokeball from "../clases/pokemon/Pokeball"
import Zekrom from "../clases/pokemon/Zekrom"
import Skybox from "../clases/Skybox"


export default class Scene extends SceneThree {
    private camara: Camara

    constructor(renderer) {
        super()
        const loader = new Loader()
        this.camara = new Camara()
        new Luces(this)
        new Skybox(this)
        new Logo(this, loader)
        new Pokeball(this, loader)
        new Entei(this, loader)
        new Groudon(this, loader)
        new Charizard(this, loader)
        new Zekrom(this, loader)
        new Hierba(this, loader)
        this.update(renderer)
    }

    private update(renderer) {
        renderer.render(this, this.camara)
        requestAnimationFrame(this.update.bind(this, renderer))
    }
}