import { useEffect } from "react"
import { 
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    Mesh,
    MeshBasicMaterial,
    BoxGeometry,
    SphereGeometry,
    TextureLoader,
    BackSide,
    MeshPhongMaterial,
    DirectionalLight,
    HemisphereLight,
    AmbientLight
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

        //crear skybox
        const Skygeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const textura = loader.load("/images/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: textura
        })
        
        const skybox = new Mesh(Skygeometry, material2)
        scene.add(skybox)
        skybox.material.side = BackSide

        //Crear iluminacion
        scene.add(new AmbientLight(0xffffff, 0.8))
        scene.add(new HemisphereLight(0xffffff, 0.8))

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