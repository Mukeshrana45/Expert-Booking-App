import { expertsData } from "../components/appContent";

export const fetchExpertsById = async (expertId) => {
  return expertsData.find(item => item.id === expertId);
};