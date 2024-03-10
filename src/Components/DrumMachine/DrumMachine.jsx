import React from "react";
import "./DrumMachine.css";

const firstSoundsGroup = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];


const secondSoundsGroup = [ 
    {
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }];

const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit",
};

const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup
};

const KeyboardKey = ({ play, sound: { keyTrigger, url } }) => {
  const handleKeydown = (e) => {
    if (e.keyCode === keyTrigger) {
      play(keyTrigger);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, [  ]);

  return (
    <button className="drum-pad" onClick={() => play(keyTrigger)}>
      <audio className="clip" src={url} id={keyTrigger}></audio>
      {keyTrigger}
    </button>
  );
};

const Keyboard = ({ play, sounds }) => {
    console.log('sounds:', sounds);
  return sounds.map((sound, index) => <KeyboardKey key={index} play={play} sound={sound} />);
};

const DrumControle = ({ changeSoundGroup }) => {
  return (
    <div className="controle">
      <button onClick={changeSoundGroup}>Change Sound Group</button>
    </div>
  );
};

const DrumMachine = () => {
  const [soundsType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundsType]);

  

  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play().catch((error) => console.error("playback error: ", error));
  };

  const changeSoundGroup = () => {
    if(soundsType === "heaterKit"){
        console.log('smoothPianoKit sounds:', soundsGroup.smoothPianoKit);
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
        console.log('heaterKit sounds:', soundsGroup.heaterKit);
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  return (
    <div id="drum-machine">
      <Keyboard play={play} sounds={sounds} />
      <DrumControle changeSoundGroup={changeSoundGroup} />
    </div>
  );
};

export default DrumMachine;
