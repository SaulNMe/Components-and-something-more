import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import './ExchangeRatesStyles.css';
const EXCHANGE_RATES = gql`
   {
		rates(currency: "USD") {
			currency
			rate
		}
   }
`;

export default function ExchangeRates (props){
	const { loading, error, data } =  useQuery(EXCHANGE_RATES);
	console.log({ loading, error, data });
	if(loading) return <p>Loading...</p>
	if(error) return <p>Error :(</p>
	return data.rates.map(({currency, rate}) => (
		<div key={currency}>
			<p className='currency'>
				{currency}: {rate}
			</p>
		</div>
	));
}