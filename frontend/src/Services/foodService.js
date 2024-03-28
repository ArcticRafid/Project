import {sample_foods} from '../data';
export const getAll = async () => sample_foods;
export const search = async (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return sample_foods.filter(item => {
        const lowerCaseName = item.name.toLowerCase();
        const lowerCaseTags = item.tags.map(tag => tag.toLowerCase());
        return lowerCaseName.includes(lowerCaseSearchTerm) || lowerCaseTags.includes(lowerCaseSearchTerm);
    });
};