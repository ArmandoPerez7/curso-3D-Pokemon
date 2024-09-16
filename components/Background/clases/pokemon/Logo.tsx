import { Group } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default class Logo {
    private object: Group

    constructor(scene, loader: GLTFLoader){
        loader.load("/images/logo.glb", (gltf) => {
            this.object = gltf.scene
            scene.add(this.object)
        })
    }
}