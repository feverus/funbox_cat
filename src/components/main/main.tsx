import Card from '../card'
import useMain from "./main.service";
import C from './main.module.scss'

export function Main() {
	const [state, api] = useMain()

	return (
		<section id={C.showcase}>
			<div id={C.title}>Ты сегодня покормил кота?</div>
			{state.items!==undefined && state.items.map((item) => 
				<Card {...item} key={item.id} />
			)}
		</section>
	)
}