import "./styles.css";
import { useSearchForm } from "../../hooks/useSearchForm";

export function SearchForm() {
  const { query, handleInputChange } = useSearchForm();

  return (
    <div className="searchForm">
      <form>
        <input type="text" value={query} onChange={handleInputChange} />
      </form>
    </div>
  );
}
