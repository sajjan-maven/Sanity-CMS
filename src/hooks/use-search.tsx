import { useState, useEffect } from 'react';

interface Searchable {
  title: string;
  excerpt: string;
};

export function useSearch<T extends Searchable>(items: T[], debounceMs: number = 300) {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<T[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function searchItems(query: string): T[] {
    const lowercaseQuery = query.toLowerCase();
    return items.filter(
      item => item.title.toLowerCase().includes(lowercaseQuery) || 
              item.excerpt.toLowerCase().includes(lowercaseQuery)
    );
  }

  function clearSearch() {
    setSearchTerm('');
    setSearchResults([]);
    setIsDropdownOpen(false);
  }

  useEffect(() => {
    const handleSearch = () => {
      const results = searchItems(searchTerm);
      setSearchResults(results);
      setIsDropdownOpen(searchTerm.length > 0 && results.length > 0);
    };

    const debounceTimer = setTimeout(handleSearch, debounceMs);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm, items, debounceMs]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    isDropdownOpen,
    clearSearch
  };
};

export function highlightMatch(text: string, searchTerm: string) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.split(regex).map((part, i) => 
    regex.test(part) ? (
      <span key={i} className="bg-green-200">{part}</span>
    ) : part
  );
};