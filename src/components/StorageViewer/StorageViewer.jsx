import React, { useEffect, useState } from "react";
import { storage } from "../../Firebase";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

const StorageViewer = () => {
  const [fileList, setFileList] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const storageRef = storage.ref();
        const files = await storageRef.listAll();
        const fileData = await Promise.all(
          files.items.map(async (file) => {
            const metadata = await file.getMetadata();
            return {
              name: file.name,
              created: metadata.timeCreated,
            };
          })
        );
        setFileList(fileData);
      } catch (error) {
        console.error("Error al obtener la lista de archivos:", error);
      }
    };

    fetchFileList();
  }, []);

  const handleSort = () => {
    const sortedList = fileList.sort((a, b) => {
      if (orderBy === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFileList([...sortedList]);
    setOrderBy(orderBy === "asc" ? "desc" : "asc");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFiles = fileList.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      {filteredFiles.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy !== ""}
                    direction={orderBy === "asc" ? "asc" : "desc"}
                    onClick={handleSort}
                  >
                    Nombre del Archivo
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy !== ""}
                    direction={orderBy === "asc" ? "asc" : "desc"}
                    onClick={handleSort}
                  >
                    Fecha de Añadido
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFiles.map((file, index) => (
                <TableRow key={index}>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{file.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No se encontraron archivos en Firebase Storage.</p>
      )}
    </Box>
  );
};

export default StorageViewer;
