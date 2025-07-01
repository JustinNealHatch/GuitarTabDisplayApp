import React, { useState, useRef } from 'react';
import Fretboard from './Fretboard';

export default function GuitarTabReader() {
  const [tab, setTab] = useState(`e|-------------|
B|-------------|
G|-------------|
D|-------------|
A|-------------|
E|-------------|`);
  const [position, setPosition] = useState({ string: 0, fret: 0 });
  const intervalRef = useRef(null);

  function parseTab(tabText) {
    // TODO parse lines into [{ string, fret, timeIndex }]
    return [];
  }

  function start() {
    const notes = parseTab(tab);
    let idx = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (idx >= notes.length) return clearInterval(intervalRef.current);
      setPosition(notes[idx]);
      idx++;
    }, 500);
  }

  function stop() {
    clearInterval(intervalRef.current);
  }

  return (
    <div>
      <textarea
        value={tab}
        onChange={e => setTab(e.target.value)}
        rows={6}
        cols={50}
      />
      <div>
        <button onClick={start}>Play</button>
        <button onClick={stop}>Stop</button>
      </div>
      <Fretboard position={position} />
    </div>
  );
}
