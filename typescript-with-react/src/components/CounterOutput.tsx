import * as React from 'react';
interface ICounterOutput {
    counter: number;
}
const counterOutput = (props: ICounterOutput) => {
    return (
        <p>{props.counter}</p>
    )
}

export default counterOutput;