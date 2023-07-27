export interface Filter {
    Desc: "בתהליך" | "אושרה" | "נעצרה";
    Counter: number;
}

export interface Bill {
    billID: number;
    knessetNum: number;
    billName: string;
    billSubName: string;
    publicationDate: null;
    subTypeDesc: string;
    summaryLaw: null;
    isInitiator: boolean;
    desc: string;
    statusID: number;
    documents: BillDocument[];
}

export interface BillDocument {
    filePath: string;
    groupTypeDesc: string;
    lastUpdatedDate: string;
}
