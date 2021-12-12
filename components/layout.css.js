import styled from 'styled-components'
import Image from 'next/image'
import utilStyles from '../styles/utils.css.js'

export const Container = styled.div`
	max-width: 36rem;
	padding: 0 1rem;
	margin: 3rem auto 6rem;
`

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const BackToHome = styled.div`
	margin: 3rem 0 0;
`
export const StyledImage = styled(Image)`
	${utilStyles.borderCircle}
`

export const H1 = styled.h1`
	${utilStyles.heading2Xl}
`

export const H2 = styled.h2`
	${utilStyles.headingLg}
`

export const NameAnchor = styled.a`
	${utilStyles.colorInherit}
	cursor: pointer;
`
