const express = require('express');       
const mongoose = require('mongoose');    
const bodyParser = require('body-parser'); 
const userRoutes = require('./routes/userRoutes');
//const epidemiologicalDataRoutes = require('./routes/epidemiologicalDataRoutes'); 
const app = express();                  


app.use(bodyParser.json());

mongoose.connect('mongodb+srv://adem:PASS1007@cluster0.q8ucx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.log('Error de conexión a MongoDB:', err));

app.use('/api/users', userRoutes);

//app.use('/api/epidemiological-data', epidemiologicalDataRoutes);

app.get('/', (req, res) => {
  res.send('API de gestión hospitalaria funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
