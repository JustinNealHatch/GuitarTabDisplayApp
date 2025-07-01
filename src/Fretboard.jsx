import React from 'react';
import './Fretboard.css';

export default function Fretboard({ position }) {
  const strings = [0, 1, 2, 3, 4, 5];
  const frets = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="fretboard">
      {strings.map((stringIndex) => (
        <div key={stringIndex} className="string-row">
          {frets.map((fretIndex) => (
            <div
              key={fretIndex}
              className={`fret ${
                position.string === stringIndex && position.fret === fretIndex
                  ? 'active'
                  : ''
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
