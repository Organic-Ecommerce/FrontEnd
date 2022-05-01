import styled from "styled-components"

export const CartStyles = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
`

export const PhotoStyles = styled.img`
border-radius: 50%;
width: ${ props => props.width?? '50px' };
height: ${ props => props.height ?? '50px' };
`

export const AutocompleteStyles = styled.div<{display?: string}>`
height: 200px;
width: 100%;
background: white;
z-index: 1;
margin-right: 20px;
position: absolute;
border: 1px solid #DFDFDE;
display: ${ props => props.display ?? 'none' } ;
`

export const BoxStyles = styled.div`
position: relative;
width: 40%;
`
