import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes'
import createStore from './helpers/createStore';

const app = express();

app.use(express.static("public"));
app.get('*', (req, res) => {
    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(({ route })=>{
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });    
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`);
});