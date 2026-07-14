import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Contact API route
  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, type, message } = req.body;
    
    console.log('--- NEW CONTACT REQUEST ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Type: ${type}`);
    console.log(`Message: ${message}`);
    console.log('---------------------------');

    res.json({ success: true, message: 'Message received successfully!' });
  });

  // Newsletter API route
  app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    console.log(`--- NEW NEWSLETTER SUB: ${email} ---`);
    res.json({ success: true, message: 'Subscribed successfully!' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
