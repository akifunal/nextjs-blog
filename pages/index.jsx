import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/Date'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import { Heading2, List, ListItem, Section, Small } from './style'

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
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<Small>
								<Date dateString={date} />
							</Small>
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
