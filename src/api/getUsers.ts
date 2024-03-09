import { IUser } from "../types";

export const getUsers = async (query: string): Promise<IUser[]> => {
    try {
        const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);
         if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const { users } = await response.json();
        return users.map((user: IUser) => {
            return {
                id: user.id,
                image: user.image,
                firstName: user.firstName,
                lastName: user.lastName,
                address: {
                    city: user.address.city
                }
            }
        })
    } catch (error) {
        console.error(error);
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            throw new Error("Connection to server error");
        } 
        return [];
    }
}