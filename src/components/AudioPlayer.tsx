import {WaveForm, WaveSurfer} from 'wavesurfer-react';
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions";
import {useCallback, useRef} from "react";
import WaveSurferInstance from "wavesurfer.js";

export interface AudioPlayerProps {
}

const plugins = [
    {
        plugin: RegionsPlugin,
        options: {dragSelection: true}
    }
]

export default function AudioPlayer<AudioPlayerProps>(props) {

    const wavesurferRef = useRef<null | WaveSurferInstance>(null);

    const mountHandler = useCallback(
        (waveSurfer) => {
            wavesurferRef.current = waveSurfer as WaveSurferInstance

            if (wavesurferRef.current) {
                wavesurferRef.current.load("/recording.wav");
                wavesurferRef.current.on("ready", () => {
                    console.log("WaveSurfer is ready");
                });
            }
        }, []
    )

    const play = useCallback(() => {
        if (wavesurferRef.current){
            wavesurferRef.current.playPause();
        }
    }, []);

    return (
        <div style={{border: 'thin solid red'}}>
            <h1>Audio Player: WaveSurfer</h1>
            <WaveSurfer plugins={plugins} onMount={mountHandler}>
                <WaveForm id="waveform" cursorColor="transparent"/>
                <div id="timeline" />
            </WaveSurfer>
            <button onClick={play}>Play / Pause</button>
            <pre>{JSON.stringify({props}, null, 2)}</pre>
        </div>
    );
}
