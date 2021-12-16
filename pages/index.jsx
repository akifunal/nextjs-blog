import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/Layout'
import { siteTitle } from '../components/Layout'
import { Main, Section, Titles, Heading2, List, ListItem } from './style'

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Section>
				<p>Shu Uesugi</p>
				<p>
					Hello, I’m <strong>Shu</strong>. I’m a software engineer and a
					translator (English/Japanese). You can contact me on{' '}
					<a href='https://twitter.com/chibicode'>Twitter</a>.
				</p>
			</Section>

			<Section>
				<Heading2>Blog</Heading2>
				<List>
					{allPostsData.map(({ id, date, title }) => (
						<ListItem key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</ListItem>
					))}
				</List>
			</Section>
		</Layout>
	)
}

export const getStaticProps = async context => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}
