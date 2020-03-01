import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config';

const app = express(),
			DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config);


app.use(
    webpackDevMiddleware(
        compiler,
        {
            publicPath: config.output.publicPath,
        },
    )
);

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(
        HTML_FILE,
        (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        },
    )
});

const PORT = process.env.PORT || 3000;

// app.get('/demo', (req, res) => {
// 	res.set('X-full-stack', '4life');
// 	res.status(418);
// 	res.send('I love hong kong tea');
// });

app.listen(PORT, () => {
	console.log(`App listening to PORT ${PORT}!`);
	console.log('Press Ctrl+C to quit.');
});
