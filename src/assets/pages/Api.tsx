import { API } from "../../Export";

export interface Project {
  id: number;
  name: string;
  description: string;
  price: number;
  workDay: number;
  images: string[];
  createdAt: string;
}

export const getProjects = async (limit: number, isPopular: boolean): Promise<Project[]> => {
  try {
    const response = await fetch(`${API}project/new?limit=${limit}&isPopular=${isPopular}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data as Project[]; // Type assertion to Project[]
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
