import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../components/SearchResults/SearchContext";
import { getUsers } from "../api/getUsers";

export const useSearchForm = () => {
  const [query, setQuery] = useState('');
  const { setUsers, setLoading } = useContext(SearchContext);
  
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const fetchUsers = async (searchQuery: string) => {
        setLoading(true);
        const users = await getUsers(searchQuery);
        setUsers(users);
        setLoading(false);
      }
      fetchUsers(query);
    }, 300); 
    
    return () => clearTimeout(debounceTimer);
  }, [query, setUsers, setLoading]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim());
  };

  return { query, handleInputChange };
}