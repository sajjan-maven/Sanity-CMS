export type AuthorType = {
  _id: string;
  name: string;
  username: string;
  bio: string;
  avatar: {
    asset: {
      url: string;
    };
  };
}