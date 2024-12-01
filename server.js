const app = require('./src/app');
const {
	app: { port },
} = require('./src/configs/config');

const PORT = port || 3055;

const server = app.listen(PORT, () => {
	console.log(`Hotel reservation ${PORT}`);
});
