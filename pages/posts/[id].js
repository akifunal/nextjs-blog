import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/Layout'
import Date from '../../components/Date'
import Style from '../../styles/pages/posts'
import { getAllPostIds, getPostData } from '../../lib/posts'

const { H1, DateContainer } = Style

const Post = ({ postData }) => {
	const { date, title, contentHtml } = postData

	return (
		<Layout home={false}>
			<Head>
				<title>{title}</title>
			</Head>
			<Script
				src='https://connect.facebook.net/en_US/sdk.js'
				strategy='lazyOnload'
				onLoad={() =>
					console.log(`script loaded correctly, window.FB has been populated`)
				}
			/>
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
	const postData = await getPostData(params.id)

	return {
		props: {
			postData: postData,
		},
	}
}

export default Post
