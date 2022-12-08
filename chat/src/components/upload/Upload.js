import React, { useState } from 'react';
import api from "../../api";

const Upload = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);

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