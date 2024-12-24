export type MetaProps = {
  author: string;
  date: string;
  tags: string[];
};
export type BlogProps = {
  image: string;
  title: string;
  excerpt: string;
  meta: MetaProps;
  content: string;
};
