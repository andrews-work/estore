const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Njz4gHHfk1ycPcQ9S3Pobv0OmznXwy4uMtX9cGyoEXPKi7AeHST7DLyqMaHQGyB1tUwUXl08fM56YdKsRnJLlXx00RiadDvFu');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: ',./,.,/./.,',
  database: 'estore',
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  // Get a single product by ID
  app.get('/api/products/:productId', (req, res) => {
    const productId = req.params.productId;
    const query = 'SELECT * FROM products WHERE id = ?';

    connection.query(query, [productId], (err, results) => {
      if (err) {
        console.error('Error fetching product by ID:', err);
        res.status(500).json({ error: 'Internal server error', details: err.message });
      } else if (results.length === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.status(200).json(results[0]);
      }

      connection.release();
    });
  });

  // Get products by category
  app.get('/api/products/category/:category', (req, res) => {
    const category = req.params.category;
    const query = 'SELECT * FROM products WHERE category = ?';

    connection.query(query, [category], (err, results) => {
      connection.release();
      if (err) {
        console.error('Error fetching products by category:', err);
        res.status(500).json({ error: 'Internal server error', details: err.message });
      } else {
        res.status(200).json(results);
      }
    });
  });

  // Checkout endpoint
  app.post('/checkout', async (req, res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
      lineItems.push({
        price: item.id,
        quantity: item.quantity
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    });

    res.send(JSON.stringify({
      url: session.url
    }));
  });

  // Get Stripe product IDs
  app.post('/api/stripeProductIds', async (req, res) => {
    const localProductIds = req.body.localProductIds;
    const query = 'SELECT stripe_product_id FROM products WHERE id IN (?)';

    connection.query(query, [localProductIds], (err, results) => {
      if (err) {
        console.error('Error fetching Stripe product IDs:', err);
        res.status(500).json({ error: 'Internal server error', details: err.message });
      } else {
        const stripeProductIds = results.map(result => result.stripe_product_id);
        res.status(200).json({ stripeProductIds });
      }
    });
  });

  // Search endpoint
  app.get('/api/search', (req, res) => {
    const searchTerm = req.query.query;
    console.log('Search term:', searchTerm); // Add this line for debugging
    const query = 'SELECT * FROM products WHERE name LIKE ?';
  
    connection.query(query, [`%${searchTerm}%`], (err, results) => {
      if (err) {
        console.error('Error fetching products by search term:', err);
        res.status(500).json({ error: 'Internal server error', details: err.message });
      } else {
        res.status(200).json(results);
      }
    });
  });
});
