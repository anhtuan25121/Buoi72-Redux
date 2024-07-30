import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

const Add = ({ handle_add }) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text.trim()) {
            handle_add(text);
            setText('');
        }
    };

    return (
        <div>
            <Input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter student name" 
            />
            <Button onClick={handleSubmit} color="primary">Add Student</Button>
        </div>
    );
};

export default Add;
