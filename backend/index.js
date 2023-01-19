import express from 'express';
import cors from 'cors';
import db from './utils/database.js';
import UserRoute from './routes/UserRoute.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);


(async() => {
    try {
        await db.sync();
        app.listen(PORT, () => { 
            console.log('Server OK');
        });
    } catch (error) {
        console.log(error);
    }
})();