import express from 'express';
import cors from 'cors';
import * as config from './config.js';
import * as model from './model.js';

const app = express();
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
	res.send(model.getApiInstructions());
});

app.get('/test', (req: express.Request, res: express.Response) => {
	const datetime = new Date();
	res.json({
		message: `API test accessed at ${datetime.toISOString()}`
	});
});

app.get('/flashcards', (req: express.Request, res: express.Response) => {
	res.json(model.getFlashcards());
});

app.listen(config.port, () => {
	console.log(`listening on port http://localhost:${config.port}`);
});