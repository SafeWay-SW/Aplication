  
import styled from 'styled-components';
//Medias Queryes
import { device } from './Breackpoints';
//Template 
export const Template = styled.div`
    width: 100%;
`;
//Grids
export const GContainer = styled.div`
	box-sizing: border-box;
    margin: 0 auto;
    padding: 10px 15px;
    max-width: 1360px;
    &:after, &:before {
	  content: "";
	  display: table;
	}
	&:after {
	  clear: both;
	}
    @media ${device.tablet} { 
    	width: 1080px;
  	}
`;
export const GRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:after {
	  content: "";
	  clear: both;
	  display: table;
	}
    @media ${device.tablet} { 
    	flex-direction: row;
    	min-height: 8vh;
  	}
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

export const GColumn = styled.div`
	padding: .25rem;
    @media ${device.tablet} { 
    	${({ Desk }) => Desk && getColumn(Desk)}
  	}
`;
