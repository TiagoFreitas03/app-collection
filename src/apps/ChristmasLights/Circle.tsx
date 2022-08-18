import styled, { keyframes } from 'styled-components'

interface CircleProps {
	color: string
	pos: number
	speed: number
}

const glow = (color: string) => keyframes`
	0%, 100% {
		box-shadow: none;
	}

	50% {
		box-shadow: 0 0 20px 5px ${color};
	}
`

export const Circle = styled.span<CircleProps>`
	display: flex;
	margin: 16px;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	transition: all .15s;
	background-color: ${props => props.color};
	animation-name: ${props => glow(props.color)};
	animation-duration: ${props => (6 - props.speed)}s;
	animation-iteration-count: infinite;
	animation-delay: ${props => (props.pos / 7) + 0.1}s;
`