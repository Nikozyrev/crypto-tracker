import './ExchangesHead.scss'


export const ExchangesHead = () => {
	return (
		<thead>
			<tr>
				<th className='exchanges__thed'>#</th>
				<th className='exchanges__thed'>Exchange</th>
				<th className='exchanges__thed'>Trust Score</th>
				<th className='exchanges__thed'>24 Volume {`(`}Normalized{`)`}</th>
				<th className='exchanges__thed'>24 Volume</th>
			</tr>
		</thead>
	);
};

