import { Group } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Scene from "../../scenes/Scene"

export default class Hierba {
    private object: Group
    private scene: Scene

    constructor(scene, loader: GLTFLoader) {
        this.scene = scene

        loader.load("/images/grass.glb", (gltf) => {
            this.object = gltf.scene
            this.clonar(-9, 11)
            this.clonar(-7, 11)
            this.clonar(-6, 12)
            this.clonar(-9, 14)
            this.clonar(-9, 13)
            this.clonar(-7, 13)
            this.clonar(-5, 13)
            this.clonar(-5, 15)
            this.clonar(-9, 16)
            this.clonar(-7, 16.5)
            this.clonar(-6, 16)
            this.clonar(-8, 17)
            this.clonar(-10, 17)
        })
    }

    private clonar(x, z){
        const objeto = this.object.clone()
        objeto.translateY(-2)
        objeto.translateX(x)
        objeto.translateZ(z)
        objeto.rotateY(Math.PI/4)
        this.scene.add(objeto)
    }
}