import {observer, inject} from "mobx-react";
import {Card} from './card'

export default
	inject('defaultStore')
	(observer(Card));

export type { StateType, ApiType, UseCard } from './card.props'