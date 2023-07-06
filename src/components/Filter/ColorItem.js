import React, { useState } from 'react';

export default function ColorItem({ color }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      style={{
        backgroundColor: color,
        width: 30,
        height: 30,
        cursor: 'pointer',
        borderColor: active ? '#fff' : '#676363',
        borderStyle: 'solid',
        borderWidth: active ? 2 : 0,
        margin: 10,
        borderRadius: 30,
      }}
    />
  );
}
