export interface Quote {
    DocumentID: number;
    FilePath: string;
    StartDate: string; // standard ISO 8601 format
    BroadcastUrl: string;
    TopicName: string;
    Speaker: string;
    Text: string;
    Index: number;
    PersonID: number;
    SessionType: "Committee" | "Plenum";
    imgPath: string;
}
