import * as React from "react";

export interface TextFieldProps { 
  name: string; 
  value: string; 
}

export class TextField extends React.Component<TextFieldProps, {}> {
    render() {
        return <div><label>{this.props.name}</label><input value={this.props.value}/></div>;
    }
}