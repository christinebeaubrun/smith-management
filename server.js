import path from 'path';
import express from 'express';
const app = express(),
			DIST_DIR = __dirname,
			HTML_FILE = path.join(DIST_DIR, 'index.html');

const PORT = process.env.PORT || 3000;

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
	res.sendFile(HTML_FILE);
});

// app.get('/demo', (req, res) => {
// 	res.set('X-full-stack', '4life');
// 	res.status(418);
// 	res.send('I love hong kong tea');
// });

app.listen(PORT, () => {
	console.log(`Example app listening on PORT ${PORT}!`);
	console.log('Press Ctrl+C to quit.');
});
