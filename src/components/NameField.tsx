import * as React from "react";

export interface NameProps {
  text: string;
  id: string;
  name: Name;
}

export interface Name {
  firstName: string;
  lastName: string;
}

export class NameField extends React.Component<NameProps, {}> {

    render() {
        return (
        <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor={this.props.id}>{this.props.text}</label>
            <div className="col-sm-10">
              <select>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Dr</option>
              </select>
                <input className="form-control" name={this.props.id} value={this.props.name.firstName}/>
                <input className="form-control" name={this.props.id} value={this.props.name.lastName}/>
            </div>
        </div>
        );
    }
}