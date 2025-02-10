export type Member = {
  name: string;
  image_src: string;
  role: string;
  course: string;
};

export type Committee = {
  type: string;
  name: string;
  image_src: string | string[];
  members: Member[];
};
