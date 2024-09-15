import { useEffect } from "react"
import { 
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    Mesh,
    MeshBasicMaterial,
    BoxGeometry
 } from "three"

function HomePage() {
    useEffect(() =>{
        const scene = new Scene()
        const renderer = new WebGLRenderer({
            antialias: true,
            canvas: document.getElementById("bg")
        })
        const camara = new PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        //mover camara
        camara.position.z = 6

        //Crear cubo
        const geometria = new BoxGeometry(1,1,1)
        const material = new MeshBasicMaterial({ color: 0xffffff })
        const cubo = new Mesh(geometria, material)
        scene.add(cubo)

        renderer.setSize(window.innerWidth, window.innerHeight)

        function antimate() {
            cubo.rotation.x += 0.01
            cubo.rotation.y += 0.01

            renderer.render(scene,camara)
            requestAnimationFrame(antimate)
        }

        antimate()
    }, [])

    return <canvas id="bg"></canvas>
}

export default HomePage