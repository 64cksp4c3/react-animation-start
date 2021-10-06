import app_style from './App.module.scss';
import {useSpring, a, config} from "react-spring";
import {useControls} from "leva";

function App() {

    const {process} = useControls({
        process: {
            min: 0,
            max: 50,
            value: 5,
        }
    });

    const {transform, opacity} = useSpring({
        transform: `perspective(600px) rotateX(${90 * process / 4}deg) `,
        opacity: (1 + Math.sin(3.14 * process / 4)),
        config: config.gentle,
    });

    let style = {
        transform: transform,
        opacity: opacity
    };

    return (
        <a.div className={app_style.App} style={{...style}}>
            <h1>This is a React Animation Template</h1>
        </a.div>
    );
}

export default App;
