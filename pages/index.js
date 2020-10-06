import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Flex, Heading, Box } from '@chakra-ui/core';
import CalcBody from '../components/CalcBody';
import CalcDisplay from '../components/CalcDisplay';
import React, { useState } from 'react';

export default function Home() {
	const [result, setResult] = useState('');

	const calculate = () => {
		try {
			setResult(eval(result) || '') + '';
		} catch (e) {
			setResult('error');
		}
	};

	const reset = () => {
		setResult('');
	};

	const backspace = () => {
		setResult(result.slice(0, -1));
	};

	const onClick = (button) => {
		if (button === '=') {
			calculate();
		} else if (button === 'C') {
			reset();
		} else if (button === 'CE') {
			backspace();
		} else {
			setResult(result + button);
		}
	};

	return (
		<>
			<Head>
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧮</text></svg>'
				/>
			</Head>
			<Flex justify='center' align='center' flexDirection='column' height='100vh'>
				<Heading>Simple Calculator</Heading>
				<CalcDisplay result={result} />
				<Box borderWidth='1px' p={5} rounded='lg' shadow='50px'>
					<CalcBody onClick={onClick} />
				</Box>
			</Flex>
		</>
	);
}
