import * as React from "react";
import {Owner} from "./Owner";

export interface CardProps { title: string; description: string; }

export class Card extends React.Component<CardProps, {}> {
    render() {
        return <div>
        <h1>{this.props.title}</h1>
        {this.props.description}
        <Owner owner="Stuart Still"/>
        </div>;
    }
}