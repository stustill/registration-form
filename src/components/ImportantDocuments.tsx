import * as React from "react";
export interface ImportantDocument { name: string; url: string; }
export interface ImportantDocumentProps { importantDocuments: ImportantDocument[]; }

export class ImportantDocuments extends React.Component<ImportantDocumentProps, {}> {
    render() {
        return <div>Important documents to read before you apply:<br/>
        {this.createLinksToImportantDocuments(this.props.importantDocuments)}</div>;
    }

    createLinksToImportantDocuments(importantDocuments: ImportantDocument[]) {
      return importantDocuments.map(i => <span><a href={i.url}>{i.name}</a> | </span>)
    }
}