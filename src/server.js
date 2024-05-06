import express from 'express';

const PORT = 4000;

const app = express();

app.listen(4000, () =>
  console.log(`✅ Server is listening on port http://localhost/${PORT} 🚀`)
);
