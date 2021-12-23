import Head from 'next/head'
import Link from 'next/link'
import {
	BackToHome,
	Container,
	H1,
	H2,
	Header,
	NameAnchor,
	StyledImage,
} from './Layout.css'

const name = 'Shu Uesugi'
export const siteTitle = 'Next.js Sample Website'

const Layout = ({ children, home }) => {
	return (
		<Container>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<Header>
				{home ? (
					<>
						<StyledImage
							priority
							src='/images/profile.jpg'
							height={144}
							width={144}
							alt={name}
						/>
						<H1>{name}</H1>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<StyledImage
									priority
									src='/images/profile.jpg'
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<H2>
							<Link href='/'>
								<NameAnchor>{name}</NameAnchor>
							</Link>
						</H2>
					</>
				)}
			</Header>
			<main>{children}</main>
			{!home && (
				<BackToHome>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</BackToHome>
			)}
		</Container>
	)
}

export default Layout
