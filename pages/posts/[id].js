import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/Date'
import { H1, DateContainer } from './[id].css'
import { getAllPostIds, getPostData } from '../../lib/posts'

const Post = ({ postData }) => {
	const { date, title, contentHtml } = postData

	return (
		<Layout home={false}>
			<Head>
				<title>{title}</title>
			</Head>
			<article>
				<H1>{title}</H1>
				<DateContainer>
					<Date dateString={date} />
				</DateContainer>
				<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
			</article>
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const paths = getAllPostIds()

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ params }) => {
	// @ts-ignore
	const postData = await getPostData(params.id)

	return {
		props: {
			postData: postData,
		},
	}
}

export default Post
