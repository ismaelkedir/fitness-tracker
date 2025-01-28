import app from './app';
import connectToMongoDB from './database/mongoose';
import { PORT } from './config';

// Start MongoDB Connection
// connectToMongoDB();



// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});