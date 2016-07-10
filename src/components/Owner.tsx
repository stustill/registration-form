import * as React from "react";

export interface OwnerProps { owner: string; }

export class Owner extends React.Component<OwnerProps, {}> {
    render() {
        return <div>Owner: {this.props.owner}!</div>;
    }
}