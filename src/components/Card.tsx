import * as React from "react";
import {ImportantDocuments} from "./ImportantDocuments";
import {TextField} from "./TextField";

export interface CardProps { title: string; description: string; }

export class Card extends React.Component<CardProps, {}> {
    render() {
        return (
            <form className="form-horizontal">
                <ImportantDocuments importantDocuments={
                    [
                        {name: "Risk Disclosure Notice", url: "https://www.ig.com/usermanagement/customeragreements?igCompany=iggb&agreementType=risk_disclosure_notice&locale=en_GB"},
                        {name: "Spread Betting Customer Agreement", url: "https://www.ig.com/usermanagement/customeragreements?igCompany=iggb&agreementType=risk_disclosure_notice&locale=en_GB"},
                        {name: "CFD Customer Agreement", url: "https://www.ig.com/usermanagement/customeragreements?igCompany=iggb&agreementType=risk_disclosure_notice&locale=en_GB"},
                        {name: "Share Dealing Customer Agreement", url: "https://www.ig.com/usermanagement/customeragreements?igCompany=iggb&agreementType=risk_disclosure_notice&locale=en_GB"},
                        {name: "Order Execution Policy", url: "https://www.ig.com/usermanagement/customeragreements?igCompany=iggb&agreementType=risk_disclosure_notice&locale=en_GB"},
                        {name: "Conflicts Policy", url: "https://www.ig.com/usermanagement/customeragreements?igCompany=iggb&agreementType=risk_disclosure_notice&locale=en_GB"},
                        ]}/>
                <h1>{this.props.title}</h1>
                <TextField id="email" text="Email" value=""/>
                <TextField id="username" text="Create username" value=""/>
                <TextField id="password" text="Create password" value=""/>
            </form>
        );
    }
}