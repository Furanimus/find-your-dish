import React, { useState } from 'react';

export default function ButtonList() {
    const [activeButton, setActiveButton] = useState(SAMPLE_BUTTONS[0]);

    return (
        <div>
            { SAMPLE_BUTTONS.map(item => <button onClick={ () => setActiveButton(item) }>{ item }</button>) }
        </div>
    );
}

const SAMPLE_BUTTONS = ['Filter Based', 'Free Text Search'];

