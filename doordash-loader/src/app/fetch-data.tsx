export const fetchPageData = async (page: string) => {
  console.log("fpd");

  await new Promise((res) => setTimeout(res, 3000));
  return { content: `Content for ${page}` };
};
