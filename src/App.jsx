import React, { useState } from "react";
import StyledApp from "./components/StyledApp";
import useSound from 'use-sound';
import {Howl, Howler} from 'howler';

const App = () => {
	const initialDisplayText = "Click a note below"
	const [displayText, setDisplayText] = useState(initialDisplayText)
	const soundFile = './assets/sounds/sprite.mp3'
	const spriteMap = {
		snareAndHH: [5, 145],
		snare: [150, 171],
		openHH: [321, 275],
		dsc: [597, 458],
		lighter: [1054, 275],
		kickAndHat: [1330, 380],
		punchyKick: [1709, 275],
		kick: [1985, 1000],
		sideStickSnare: [2756, 171]
	}
	const [play] = useSound(soundFile, spriteMap);
	var context = new AudioContext();
	// useKeyboardBindings({
	// 	Q: () => play('snareAndHH'),
	// 	W: () => play('snare'),
	// 	E: () => play('openHH'),
	// 	A: () => play('dsc'),
	// 	S: () => play('lighter'),
	// 	D: () => play('kickAndHat'),
	// 	Z: () => play('punchyKick'),
	// 	X: () => play('kick'),
	// 	C: () => play('sideStickSnare'),
	//   })
	return (
		<StyledApp >
			<header>
				<h1>Drum Machine</h1>
			</header>
			<section id="drum-machine">
				<aside id="display">
					{displayText}
				</aside>
				<aside id="drum-pads">
					<button
						className="drum-pad"
						aria-label="snareAndHH"
						onClick={() => new AudioContext().resume().then(play('snareAndHH'))}
						id="snareAndHH"
					>
						Q
						<audio src="" 
							id="audio-clip-Q"
							className="clip"
						>
						</audio>
					</button>
					<button
						className="drum-pad"
						onClick={() => play('snare')}
						id="audio-player-w"
					>
						W
						<audio src="" 
							id="audio-clip-W"
							className="clip"
						>
						</audio>
					</button>
					<button
						className="drum-pad"
						onClick={() => play('openHH')}
						id="audio-player-e"
					>
						E
						<audio src="" 
							id="audio-clip-E"
							className="clip"
						>
						</audio>
					</button>
					<button
						className="drum-pad"
						onClick={() => play('dsc')}
						id="audio-player-a"
					>
						A
						<audio src="" 
							id="audio-clip-A"
							className="clip"
						>
						</audio>
					</button>
					<button
						className="drum-pad"
						onClick={() => play('lighter')}
						id="audio-s"
					>
						S
						<audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" 
							id="audio-clip-S"
							className="clip"
						>
						</audio>
					</button>
					<button
						className="drum-pad"
						onClick={() => play('kickAndHat')}
						id="audio-player-d"
					>
						D
						<audio src="" 
							id="audio-clip-D"
							className="clip"
						>
						</audio>
					</button>
					<button
						className="drum-pad"
						onClick={() => play('punchyKick')}
						id="audio-player-z">
						Z
						<audio src="" 
							id="audio-clip-Z"
							className="clip"
						>
						</audio>
					</button>
					<button
						className="drum-pad"
						onClick={() => play('kick')}
						id="audio-player-x"
					>
						X
						<audio src="" 
							id="audio-clip-X"
							className="clip"
						>
						</audio>
					</button>
					<button
						className="drum-pad"
						onClick={() => play('sideStickSnare')}
						id="audio-player-c"
					>
						C
						<audio src="" 
							id="audio-clip-C"
							className="clip"
						>
						</audio>
					</button>
				</aside>
			</section>
		</StyledApp>
);
}

export default App