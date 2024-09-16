import { Component, ReactNode } from "react";
import Renderer from "./Renderer";

export default class Background extends Component {
    componentDidMount = () => new Renderer()

    render = () => <canvas id="bg"></canvas>
}