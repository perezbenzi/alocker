import React, { useEffect, useState } from 'react';
import { storage } from '../../Firebase';

const StorageViewer = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const storageRef = storage.ref();
    storageRef
      .listAll()
      .then((res) => {
        setFileList(res.items);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de archivos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Archivos en Firebase Storage</h2>
      {fileList.length > 0 ? (
        <div>
          {fileList.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>
      ) : (
        <p>No se encontraron archivos en Firebase Storage.</p>
      )}
    </div>
  );
};

export default StorageViewer;
