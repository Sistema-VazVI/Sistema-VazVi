import React, { Dispatch, SetStateAction, useState } from "react";
import "./client-search.css";

export interface ClientSearchProps {
  className?: string;
  searchFilter: Dispatch<SetStateAction<string | undefined>>;
}

export const ClientSearch: React.FC<ClientSearchProps> = ({
  className = "",
  searchFilter,
}) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
    searchFilter(event.target.value);
  };

  return (
    <div className={`${className} searchContainer`}>
      <form>
        <label>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            placeholder="Buscar Cliente"
            type="search"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </label>
        {/* <select className="searchSelect">
						<option
							hidden
							value=""
						>
							Filtrar por
						</option>
						<option>Apple</option>
						<option>Banana</option>
						<option>Watermelon</option>
					</select> */}
      </form>
    </div>
  );
};
