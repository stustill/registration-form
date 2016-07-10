import * as React from "react";

export interface CardProps { title: string; description: string; }

export class Card extends React.Component<CardProps, {}> {
    render() {
        return <div><h1>{this.props.title}</h1>{this.props.description}</div>;
    }
}