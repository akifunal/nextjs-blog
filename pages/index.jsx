import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Main, Section, Titles } from './style'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Main>
				<Titles>
					Read{' '}
					<Link href={'/posts/first-post'}>
						<a>First post</a>
					</Link>
				</Titles>
			</Main>

			<Section>
				<p>Akif</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</Section>
		</Layout>
	)
}
