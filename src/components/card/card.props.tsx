import { Item } from '../main'

export type StateType = {
    selected: boolean;
    mouseLeave: boolean;
    bottomDescription: string;
    topDescriptionHover: string;
};

export type ApiType = {
    select: () => void;
    moveMouseOut: () => void;
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
