import * as React from "react";
import {Owner} from "./Owner";
import {ImportantDocuments} from "./ImportantDocuments";
import {TextField} from "./TextField";

export interface CardProps { title: string; description: string; }

export class Card extends React.Component<CardProps, {}> {
    render() {
        return <div>
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
        <TextField name="Email" value=""/>
        <TextField name="Create username" value=""/>
        <TextField name="Create password" value=""/>
        </div>;
    }
}