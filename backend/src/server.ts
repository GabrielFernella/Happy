//arquivo inicial da aplicação
import express from 'express';

import './database/connection';

const app = express();

app.get('/', () => {});

app.listen(3333);