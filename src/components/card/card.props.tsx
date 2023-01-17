export type StateType = {
    selected: boolean;
};

export type ApiType = {
    select: () => void;
    unSelect: () => void;
};

export type UseCard = () => [
    state: StateType,
    api: ApiType
];

export type NameProps = {
	part:string, index:number
}
