const stripe = require('stripe')('sk_test_51Njz4gHHfk1ycPcQ9S3Pobv0OmznXwy4uMtX9cGyoEXPKi7AeHST7DLyqMaHQGyB1tUwUXl08fM56YdKsRnJLlXx00RiadDvFu');
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: ',./,.,/./.,',
  database: 'estore',
};

const fetchProductsFromDatabase = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows, fields] = await connection.execute('SELECT * FROM products');
  connection.end();
  return rows;
};

const createStripeProduct = async (product) => {
  const productData = {
    name: product.title,
    type: 'good',
    description: product.description,
    images: [product.image_url],
    metadata: {
      category: product.category,
      brand: product.brand,
    },
  };

  try {
    const createdProduct = await stripe.products.create(productData);
    const stripeProductId = createdProduct.id;

    // Update the MySQL database with the Stripe product ID
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('UPDATE products SET stripe_product_id = ? WHERE id = ?', [stripeProductId, product.id]);
    connection.end();

    console.log(`Product "${product.title}" created in Stripe with ID: ${stripeProductId}`);
    return stripeProductId;
  } catch (error) {
    console.error(`Error creating product "${product.title}" in Stripe:`, error.message);
    throw error;
  }
};

const createStripePrice = async (product, stripeProductId) => {
  const priceData = {
    product: stripeProductId,
    unit_amount: Math.round(product.price * 100),
    currency: 'usd',
  };

  try {
    await stripe.prices.create(priceData);
    console.log(`Price created for product "${product.title}" in Stripe.`);
  } catch (error) {
    console.error(`Error creating price for product "${product.title}" in Stripe:`, error.message);
    throw error;
  }
};

const importProductsToStripe = async () => {
  try {
    const products = await fetchProductsFromDatabase();

    for (const product of products) {
      const stripeProductId = await createStripeProduct(product);
      await createStripePrice(product, stripeProductId);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Run the import process
importProductsToStripe();
