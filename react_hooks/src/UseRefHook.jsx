import { useRef } from 'react';

export default function UseRefHook() {
    const countRef = useRef(0);

    const handle = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };

    console.log('I rendered!');

    return <button onClick={handle}>Click me</button>;
}