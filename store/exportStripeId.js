const stripe = require('stripe')('sk_test_51Njz4gHHfk1ycPcQ9S3Pobv0OmznXwy4uMtX9cGyoEXPKi7AeHST7DLyqMaHQGyB1tUwUXl08fM56YdKsRnJLlXx00RiadDvFu');
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: ',./,.,/./.,',
  database: 'estore',
};

const fetchStripeData = async () => {
  const products = await stripe.products.list();
  return products.data;
};

const generateUpdateStatements = (products) => {
  return products.map((product) => {
    return `UPDATE products SET stripe_product_id = '${product.id}' WHERE title = '${product.name}';`;
  });
};

const updateDatabase = async () => {
  try {
    const stripeData = await fetchStripeData();
    const updateStatements = generateUpdateStatements(stripeData);

    const connection = await mysql.createConnection(dbConfig);
    for (const statement of updateStatements) {
      await connection.execute(statement);
      console.log(`Updated database: ${statement}`);
    }
    connection.end();

    console.log('Database update complete.');
  } catch (error) {
    console.error('Error updating database:', error.message);
  }
};

updateDatabase();
