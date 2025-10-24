export interface NavBar {
    optionId: number;
    title: string;
    url: string;
    nodeSettings: NavBarNodeSettings[];
}

export interface NavBarNodeSettings {
    optionId: number;
    title: string;
    url: string;
}