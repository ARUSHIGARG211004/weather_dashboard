const express= require('express');
const cors= require('cors');
const dotenv= require('dotenv');
const weatherRouter= require('./routes/weather');

dotenv.config();
const app= express();
const PORT= process.env.PORT || 5000;

app.use(cors());
app.use('/weather', weatherRouter); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});