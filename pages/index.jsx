import Head from 'next/head'
import Link from 'next/link'
import GlobalCSS from './global.css'
import {
	Container,
	Main,
	Footer,
	Anchor,
	Title,
	Description,
	Code,
	Grid,
	CardAnchor,
	Logo,
} from './style'

export default function Home() {
	return (
		<>
			<Head>
				<Title>Create Next App</Title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<GlobalCSS />
			<Container>
				<Main>
					<Title>
						Read{' '}
						<Link href={'/posts/first-post'}>
							<a>First post</a>
						</Link>
					</Title>

					<Description>
						Get started by editing <Code>pages/index.js</Code>
					</Description>

					<Grid>
						<CardAnchor href='https://nextjs.org/docs'>
							<h3>Documentation &rarr;</h3>
							<p>Find in-depth information about Next.js features and API.</p>
						</CardAnchor>

						<CardAnchor href='https://nextjs.org/learn'>
							<h3>Learn &rarr;</h3>
							<p>Learn about Next.js in an interactive course with quizzes!</p>
						</CardAnchor>

						<CardAnchor href='https://github.com/vercel/next.js/tree/master/examples'>
							<h3>Examples &rarr;</h3>
							<p>Discover and deploy boilerplate example Next.js projects.</p>
						</CardAnchor>

						<CardAnchor href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
							<h3>Deploy &rarr;</h3>
							<p>
								Instantly deploy your Next.js site to a public URL with Vercel.
							</p>
						</CardAnchor>
					</Grid>
				</Main>

				<Footer>
					<Anchor
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'>
						Powered by <Logo src='/vercel.svg' alt='Vercel Logo' />
					</Anchor>
				</Footer>
			</Container>
		</>
	)
}
