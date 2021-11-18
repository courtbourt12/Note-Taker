const router = require("express").Router();

router.get('/notes', (req, res) =>
res.json(path.join(__dirname, '/public/notes.html'))
);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

router.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

router.post('/notes', (req, res) => {
  saveNote()
})