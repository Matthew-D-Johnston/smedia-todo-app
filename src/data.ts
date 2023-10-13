export const data: Data = {
  todo: [
    // {
    //   id: 'uuid1',
    //   title: 'dishes',
    //   description: 'wash the dishes',
    //   completed: false,
    //   createdAt: new Date(),
    // },
    // {
    //   id: 'uuid2',
    //   title: 'laundry',
    //   description: 'do the laundry',
    //   completed: true,
    //   createdAt: new Date(),
    // },
  ],
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
