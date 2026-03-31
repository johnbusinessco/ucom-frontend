const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL as string;

export async function fetchGraphQL(query: string, variables?: Record<string, unknown>) {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const { data } = await res.json();
  return data;
}
