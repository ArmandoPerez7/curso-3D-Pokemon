import { Group } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default class Zekrom {
    private object: Group
    private contador = 0
    
    constructor(scene, loader: GLTFLoader){
        loader.load("/images/zekrom.glb", (gltf) => {
            this.object = gltf.scene
            this.posicionar()
            scene.add(this.object)
        })
        this.update()
    }

    private posicionar() {
        
        if(window.innerWidth > 900){
            const ratio = (window.innerWidth - 900) * -1 / 460 + 0.4
            this.object.translateZ(36.6)
            this.object.translateY(0.5)
            this.object.translateX(ratio)
        } else{
            this.object.translateZ(38.5)
            this.object.translateY(1.8)
            this.object.translateX(0.4)
        }
    }

    private update() {
        this.contador += 0.01
        if(this.object) this.object.rotation.y = Math.sin(this.contador) / 7 + 1.2
        requestAnimationFrame(this.update.bind(this))
    }
}