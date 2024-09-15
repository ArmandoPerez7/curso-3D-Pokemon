import { Component, ReactNode } from "react";
import Renderer from "./Renderer";

export default class Background extends Component {
    componentDidMount(): void {
        new Renderer()
    }

    render() {
        return <canvas id="bg"></canvas>
    }
}