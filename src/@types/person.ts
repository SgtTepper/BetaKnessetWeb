export interface Person {
    PersonID: number;
    FirstName: string;
    LastName: string;
    FactionName: string;
    imgPath: string | null;
    StartDate: string;
    FinishDate: string | null;
    KnessetNum: number;
}

export interface Position {
    PersonToPositionID: number;
    DutyDesc: string | undefined;
    GovMinistryName: string | undefined;
    FactionName: string;
    KnessetNum: number;
    IsCurrent: boolean;
    PositionStartDate: string;
    PositionFinishDate: string | undefined;
}

export interface FallbackPerson extends Position {
    PersonID: number;
    FirstName: string;
    LastName: string;
    GenderDesc: string;
    Email: string;
    BirthCountry: string;
    BirthDate: string;
    BirthDateHeb: string;
    ChildrenNumber: number;
    CityName: string;
    DeathDate?: null;
    DeathDateHeb?: null;
    FamilyStatus?: null;
    imgPath: string;
    CommitteeName?: string;
    GovernmentNum?: number;
    FactionStartDate?: string;
    FactionFinishDate?: string;
    FactionKnessetNum?: number;
}
