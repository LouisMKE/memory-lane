import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URL || '');

export default mongoose.connection;