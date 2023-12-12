export interface ISkill {
    Title: string[];
    Data:  IFramework[];
}

export interface IFramework{
    nome:        string;
    nivel:       Nivel;
    icone:       string;
    porcentagem: number;
}

export enum Nivel {
    Avançado =              "Avançado",
    BemAvançado =           "Bem Avançado",
    BemBásico =             "Bem Básico",
    Básico =                "Básico",
    ExtremamenteAvançado =  "Extremamente Avançado",
    ExtremamenteBásico =    "Extremamente Básico",
    Intermediário =         "Intermediário",
}
