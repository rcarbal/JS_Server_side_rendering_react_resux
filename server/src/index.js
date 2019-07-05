import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home'

const app = express();

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    res.send(content);    
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`);
});