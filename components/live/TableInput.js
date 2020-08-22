import React, { useState, useRef, useEffect } from 'react';

export default function TableInput({ setFilter }) {
  const [text, setText] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setFilter(text);
    }, 300);
  }, [text, setFilter]);

  return (
    <input
      className="input"
      value={text}
      type="text"
      placeholder="Search..."
      onChange={(e) => setText(e.target.value)}
    />
  );
}
