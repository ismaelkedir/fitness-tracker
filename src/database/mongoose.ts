import mongoose from 'mongoose';

// Connect to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/fitness-tracker');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToMongoDB;