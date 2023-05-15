export const fetchTeamMembers = async (params) => {
  const query = params?.onlySlug
    ? `query MyQuery {
      posts {
          slug
      }
    }`
    : `query MyQuery {
        posts {
          name
          excerpt
          profession
          slug
          tags
          coverImage {
            url
          }
          awardsImg {
            url
          }
        }
      }`;

  const data = await fetch(
    'https://api-us-west-2.hygraph.com/v2/clh4zdcwq5s5p01ue7mgtbapo/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  ).then((res) => res.json());
  const teamMembers = data.data.posts;

  return teamMembers;
};
