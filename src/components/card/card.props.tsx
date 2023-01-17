import { Item } from '../main'

export type StateType = {
    selected: boolean;
    bottomDescription: string;
};

export type ApiType = {
    select: () => void;
};

export type UseCard = (item:Item) => [
    state: StateType,
    api: ApiType
];

export type NameProps = {
	part:string, index:number
}

export type BottomButtonProps = {
	select: () => void;
}
