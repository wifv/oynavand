export interface Project {
  name: string;
  description: string;
  price: number;
  workDay: number;
  images: string[];
  createdAt: string;
}


export const getProjects = async (limit: Number, isPopular: boolean) => {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/project/new?limit=${limit}&isPopular=${isPopular}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// export const getImages = async (id: number) => {
//   try {
//     const response = await fetch(`http://localhost:8080/api/v1/project/image/${id}`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.body;
//     return data;
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     return [];
//   }
// };
