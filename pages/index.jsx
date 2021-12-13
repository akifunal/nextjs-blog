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
						<a>"First" post</a>
					</Link>
				</Titles>
			</Main>

			<Section>
				<p>Shu Uesugi</p>
				<p>
					Hello, I’m <strong>Shu</strong>. I’m a software engineer and a
					translator (English/Japanese). You can contact me on{' '}
					<a href='https://twitter.com/chibicode'>Twitter</a>.
				</p>
			</Section>
		</Layout>
	)
}
