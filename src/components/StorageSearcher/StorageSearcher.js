import React, { useState } from 'react';
import { storage } from '../../Firebase';

const StorageSearcher = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearch = (term) => {
    if (term) {
      const storageRef = storage.ref();
      storageRef
        .listAll()
        .then((res) => {
          const matchingFiles = res.items.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
          );
          setSearchResults(matchingFiles);
        })
        .catch((error) => {
          console.error('Error al buscar archivos:', error);
        });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <h2>Buscador de archivos en Firebase Storage</h2>
      <input
        type="text"
        value={searchTerm}
        onInput={handleSearchTermChange}
        placeholder="Ingrese el término de búsqueda"
      />
      <ul>
        {searchResults.map((file, index) => (
          <ul key={index}>{file.name}</ul>
        ))}
      </ul>
    </div>
  );
};

export default StorageSearcher;
