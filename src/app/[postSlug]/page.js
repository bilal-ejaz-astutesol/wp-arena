
import '../../../src/wordpress-style.css'
import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client'; // Adjust path as needed
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import '../../../src/wordpress-style.css'
const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($postSlug: String!) {
    postBy(slug: $postSlug) {
      id
      title
      content
    }
  }
`;

export default async function PostDetail({ params }) {
  const { postSlug } = params;

  try {
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { postSlug },
    });

    if (!data.postBy) {
      return <p>Post not found.</p>;
    }

    return (
      <>
      <BreadCrumb/>
            <div className='wpa-custom-style'>
        <h1 >{data.postBy.title}</h1>
        <div className='wpa-wrapper-sides-spacing' dangerouslySetInnerHTML={{ __html: data.postBy.content }} />
      </div>
      </>
    );
  } catch (error) {
    return <p>Error fetching post details.</p>;
  }
}
