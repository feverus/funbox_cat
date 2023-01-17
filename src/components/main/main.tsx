import Card from '../card'
import useMain from "./main.service";
import C from './main.module.scss'

export function Main() {
	const [state, api] = useMain() 
	console.log(state)

	return (
		<section id={C.showcase}>
			{state.items!==undefined && state.items.map((item) => <Card {...item} key={item.id} />)}
		</section>
	)
}