import { ReactElement } from "react";

export interface ISkill {
    Title: string[];
    Data:  IFramework[];
}

export interface IFramework{
    name:        string;
    Level:       string;
    icon:        ReactElement<any, any>;
    percentage:  number;
}
