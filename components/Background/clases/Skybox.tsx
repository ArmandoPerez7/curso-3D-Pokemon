import { 
    Mesh,
    SphereGeometry,
    TextureLoader,
    BackSide,
    MeshPhongMaterial
 } from "three"

export default class Skybox {

    constructor(scene){
        const Skygeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const textura = loader.load("/images/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: textura
        })
        const skybox = new Mesh(Skygeometry, material2)
        skybox.material.side = BackSide
        scene.add(skybox)
    }
}