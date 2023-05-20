export const fetchProjects = async (params) => {
  const query = params?.onlySlugs
    ? `query Assets {
        posts {
            slug
        }
    }`
    : `query Assets {
        posts {
          date
          title
          excerpt
          niche
          tags
          createdAt
          slug
          coverImage {
            url
          }
        }
      }`;

  const data = await fetch(
    'https://api-us-west-2.hygraph.com/v2/clh546yux60qk01t8c3g66zqz/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  ).then((res) => res.json());

  const projects = data.data.posts;

  return projects;
};
