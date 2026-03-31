async function getPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        posts {
          nodes {
            title
            slug
          }
        }
      }`
    })
  });
  const { data } = await res.json();
  return data.posts.nodes;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Posts</h1>
      {posts.map((post: { title: string, slug: string }) => (
        <p key={post.slug}>{post.title}</p>
      ))}
    </main>
  );
}