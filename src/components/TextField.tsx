import * as React from "react";

export interface TextFieldProps { 
  text: string;
  id: string;
  value: string; 
}

export class TextField extends React.Component<TextFieldProps, {}> {

    render() {
        return (
        <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor={this.props.id}>{this.props.text}</label>
            <div className="col-sm-10">
                <input className="form-control" name={this.props.id} value={this.props.value}/>
            </div>
        </div>
        );
    }
}