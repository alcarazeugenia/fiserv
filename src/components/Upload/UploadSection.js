import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import {
  Container,
  Content,
  SelectedDocumentsContainer,
} from "./UploadSectionStyles";
import styles from "./UploadSection.module.css";

const UploadSection = ({ handleInvoiceLoading, handleInvoiceInfo }) => {
  const [selectedFiles, setSelectedFiles] = useState(["No files selected"]);

  const onDocumentUpload = async (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    let filesSelected = [];
    for (let i = 0; i < Object.keys(files).length; i++) {
      filesSelected.push(files[i].name);
    }
    if (filesSelected.length > 0) {
      setSelectedFiles(filesSelected);
      handleInvoiceLoading(true);
      let files = document.getElementById("fileUpload").files[0];
      let formData = new FormData();
      formData.append("file", files);
      const options = {
        method: "POST",
        body: formData,
      };

      try {
        const res = await fetch("http://localhost:5000", options);
        const data = await res.json();

        if (res.ok) {
          handleInvoiceInfo(Object.values(data));
          handleInvoiceLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setSelectedFiles(["No files selected"]);
    }
  };

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <Container>
      <Content>
        <Typography variant="subtitle2">Hey!</Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Upload your files here to see your final invoice
        </Typography>
        <label htmlFor="fileUpload" className={styles.uploadButton}>
          <Typography variant="button">Upload</Typography>
          <input
            id="fileUpload"
            type="file"
            onChange={onDocumentUpload}
            style={{ display: "none" }}
            multiple
          />
        </label>

        <SelectedDocumentsContainer>
          {selectedFiles.map((file, index) => (
            <Typography key={index} variant="body1">
              {file}
            </Typography>
          ))}
        </SelectedDocumentsContainer>
      </Content>
    </Container>
  );
};

export default UploadSection;
