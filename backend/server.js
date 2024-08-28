const express = require('express');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

const app = express();

connectDB();


app.use(express.json());
app.use(cors()); 

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
