import React from 'react';
import { Box } from '@chakra-ui/core';

const CalcDisplay = ({ result }) => {
	return (
		<>
			<Box m={5} p={5}>
				<output>{result}</output>
			</Box>
		</>
	);
};

export default CalcDisplay;
