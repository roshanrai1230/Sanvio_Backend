const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

mongoose.connect('mongodb+srv://sanvio-finel:sanvio110@cluster0.kgpqv7y.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






// mongoose.connect('mongodb+srv://sanvio-finel:sanvio110@cluster0.kgpqv7y.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0')