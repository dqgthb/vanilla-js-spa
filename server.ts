import express from 'express';
import path from 'path';

const app = express();

app.use('/static', express.static(path.resolve('frontend', 'static')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('frontend', 'index.html'));
});

// 5060 is not allowed in chrome!
app.listen(process.env.PORT || 1234, () => console.log('Server running...'));
