import styled from 'styled-components'
import Image from 'next/image'
import utilStyles from '../styles/utils.css.js'

const Container = styled.div`
	max-width: 36rem;
	padding: 0 1rem;
	margin: 3rem auto 6rem;
`

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const BackToHome = styled.div`
	margin: 3rem 0 0;
`

const StyledImage = styled(Image)`
	${utilStyles.borderCircle}
`

const H1 = styled.h1`
	${utilStyles.heading2Xl}
`

const H2 = styled.h2`
	${utilStyles.headingLg}
`

const NameAnchor = styled.a`
	${utilStyles.colorInherit}
	cursor: pointer;
`

export default {
	Container,
	Header,
	BackToHome,
	StyledImage,
	H1,
	H2,
	NameAnchor,
}
