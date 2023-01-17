export type Item = {
    id:number,
    topDescription:string;
    name:string[];
    about:string[];
    weight:string;
    bottomDescription:string;
    available:boolean;
}

export type StateType = {
    items: Array<Item>|undefined;
};

export type ApiType = {
    loadJson: () => any|string;
};

export type UseMain = () => [
    state: StateType,
    api: ApiType
];