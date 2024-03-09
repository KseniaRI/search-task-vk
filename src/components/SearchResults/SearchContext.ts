import { createContext } from "react";
import { IUser } from "../../types";

export interface SearchContextProps {
    users: IUser[];
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchContext = createContext<SearchContextProps>({
    users: [],
    setUsers: () => { },
    loading: false,
    setLoading: () => { },
});
