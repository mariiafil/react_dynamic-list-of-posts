export const filterPosts = (query: string, array: PreparedPost[]): PreparedPost[] => {
  const queryToLowerCase = query.toLowerCase();

  return array.filter(item => item.title.toLowerCase().includes(queryToLowerCase)
          || item.body.toLowerCase().includes(queryToLowerCase));
};
