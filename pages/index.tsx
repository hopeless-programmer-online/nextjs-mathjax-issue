import React from 'react'
import { MathComponent } from 'mathjax-react';

export default class Index extends React.Component {
    public render() {
        return (
            <span>
                Hello!
                <MathComponent tex={String.raw`\vec{a}`}/>
            </span>
        )
    }
}