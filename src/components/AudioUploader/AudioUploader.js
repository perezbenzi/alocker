import React, { useState } from 'react';
import { storage } from '../../Firebase';

const AudioUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      fileRef.put(file)
        .then(() => {
          console.log('Archivo cargado exitosamente');
        })
        .catch((error) => {
          console.error('Error al cargar el archivo:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir archivo</button>
    </div>
  );
};

export default AudioUploader;

