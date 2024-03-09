import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults() {
  const { users, loading } = useContext(SearchContext);
  
  const loader = loading && <div className="loader"></div>
  const noResults = !loading && users.length === 0 && <span>No results found</span>
  const usersList = users.map((user) => (
    <UserCard key={user.id} {...user} />
  ));
  
  return (
    <div className="usersList">
      { loader }
      { noResults }
      { usersList }
    </div>
  );
}
