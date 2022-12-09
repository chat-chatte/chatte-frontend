import React, { useState } from 'react';
import api from "../../api";

const Upload = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null); 
  
    
    return (
    <>
        <button
            variant="contained"
            component="label"
            >
            Selecionar arquivo
            <input
                type="file"
                onChange={(event) => {
                    setSelectedFile(event.target.files[0]);
                }} 
            />
        </button>
        <span>{selectedFile ? 'Arquivo selecionado: ' + selectedFile.name : ''}</span>
        <br />
        <button
            variant="contained" 
            color="primary"
            disabled={selectedFile ? false : true}
            onClick={(event) => {
                const fd = new FormData();
                fd.append('file', selectedFile, selectedFile.name);
                api.post('/uploads', fd, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                      },
                })
                    .then((res) => {
                        console.log('foi');
                        setSelectedFile(null);
                        api.get('/uploads').then(res => {
                            setUploadedFile(res.data)
                        })
                    }).catch((error) => {
                        console.log('deu erro');
                        setSelectedFile(null);
                    })
            }}
        >
            Enviar
        </button>
    </>
    );
}

export default Upload;