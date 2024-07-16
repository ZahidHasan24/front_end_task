
import React, { useState, useEffect } from "react";
import { MdOutlineAdjust, MdVolumeUp } from "react-icons/md";

const pitch = 1;
const rate = 1;
const volume = 1;

const TextToSpeech = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setUtterance(u);

    const setVoices = () => {
      const voices = synth.getVoices();
      setVoice(voices[0]);
    };

    synth.addEventListener("voiceschanged", setVoices);
    setVoices();

    return () => {
      synth.cancel();
      synth.removeEventListener("voiceschanged", setVoices);
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPlaying) {
      synth.pause();
      setIsPlaying(false);
    } else {
      utterance.voice = voice;
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
      setIsPlaying(true);
    }

    utterance.onend = () => setIsPlaying(false);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="tooltip tooltip-right hover:cursor-pointer"
        data-tip={isPlaying ? "Stop" : "Read Aloud"}
        onClick={isPlaying ? handleStop : handlePlay}
      >
        {isPlaying ? <MdOutlineAdjust /> : <MdVolumeUp />}
      </div>
    </div>
  );
};

export default TextToSpeech;
