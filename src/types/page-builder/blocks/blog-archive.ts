export type BlogArchiveBlockType = {
  _id: string;
  _key: string;
  _type: 'blogArchiveBlock';
  heading: string;
  categories: {
    _id: string;
    title: string;
    slug: string;
  }[];
  paddingTop: string;
  paddingBottom: string;
}