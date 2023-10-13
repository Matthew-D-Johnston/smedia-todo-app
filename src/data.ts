export const data: Data = {
  todo: [],
};

interface Data {
  todo: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
  }[];
}
