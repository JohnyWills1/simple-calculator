import React, { useState } from 'react';
import { Box, SimpleGrid, Button, Flex } from '@chakra-ui/core';

const CalcBody = ({ onClick }) => {
	return (
		<>
			<SimpleGrid columns={4} spacing={4}>
				<Button
					height='60px'
					width='60px'
					name='7'
					onClick={(e) => onClick(e.target.name)}
				>
					7
				</Button>
				<Button height='60px' name='8' onClick={(e) => onClick(e.target.name)}>
					8
				</Button>
				<Button height='60px' name='9' onClick={(e) => onClick(e.target.name)}>
					9
				</Button>
				<Button
					height='60px'
					name='+'
					onClick={(e) => onClick(e.target.name)}
					variantColor='yellow'
				>
					+
				</Button>

				<Button height='60px' name='4' onClick={(e) => onClick(e.target.name)}>
					4
				</Button>
				<Button height='60px' name='5' onClick={(e) => onClick(e.target.name)}>
					5
				</Button>
				<Button height='60px' name='6' onClick={(e) => onClick(e.target.name)}>
					6
				</Button>
				<Button
					height='60px'
					name='-'
					onClick={(e) => onClick(e.target.name)}
					variantColor='yellow'
				>
					-
				</Button>

				<Button height='60px' name='1' onClick={(e) => onClick(e.target.name)}>
					1
				</Button>
				<Button height='60px' name='2' onClick={(e) => onClick(e.target.name)}>
					2
				</Button>
				<Button height='60px' name='3' onClick={(e) => onClick(e.target.name)}>
					3
				</Button>
				<Button
					height='60px'
					name='*'
					onClick={(e) => onClick(e.target.name)}
					variantColor='yellow'
				>
					×
				</Button>

				<Button height='60px' name='.' onClick={(e) => onClick(e.target.name)}>
					.
				</Button>
				<Button height='60px' name='0' onClick={(e) => onClick(e.target.name)}>
					0
				</Button>
				<Button height='60px' name='CE' onClick={(e) => onClick(e.target.name)}>
					CE
				</Button>
				<Button
					height='60px'
					name='/'
					onClick={(e) => onClick(e.target.name)}
					variantColor='yellow'
				>
					÷
				</Button>
			</SimpleGrid>
			<Flex pt={5} justify='space-between'>
				<Button
					height='60px'
					width='47.5%'
					name='C'
					variantColor='red'
					onClick={(e) => onClick(e.target.name)}
				>
					C
				</Button>
				<Button
					height='60px'
					width='47.5%'
					name='='
					onClick={(e) => onClick(e.target.name)}
					variantColor='green'
				>
					=
				</Button>
			</Flex>
		</>
	);
};

export default CalcBody;
