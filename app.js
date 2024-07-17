import React, { useState } from 'react';

function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDrag = (event) => {
        setPosition({
            x: position.x + event.movementX,
            y: position.y + event.movementY,
        });
    };

    return (
        <div
            className="card"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            onMouseDown={handleDrag}
        >
            <h2>Draggable Card</h2>
            <p>Click and drag me!</p>
        </div>
    );
}

export default App;