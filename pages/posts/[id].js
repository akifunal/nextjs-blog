import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

const Post = ({ date, id, title }) => {
	return (
		// <Layout home={false}>
		// 	<Head>
		// 		<title>{title}</title>
		// 	</Head>
		// 	<h1>First Post</h1>
		// 	<h2>
		// 		<Link href='/'>
		// 			<a>Back to home</a>
		// 		</Link>
		// 	</h2>
		// </Layout>

		<Layout home={false}>
			{title}
			<br />
			{id}
			<br />
			{date}
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const paths = getAllPostIds()

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	// @ts-ignore
	const { id, title, date } = getPostData(params.id)

	return {
		props: {
			id: params.id,
			title: title,
			date: date,
		},
	}
}

export default Post
