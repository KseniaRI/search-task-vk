import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { IUser } from "./types";

export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider value={{
      users,
      setUsers,
      loading,
      setLoading
    }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
