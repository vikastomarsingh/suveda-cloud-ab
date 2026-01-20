const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const MONGO_URI = 'mongodb://127.0.0.1:27017/suveda_db';

const testDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB');

        const testContact = new Contact({
            name: 'Test User',
            email: 'test@example.com',
            company: 'Test Corp',
            serviceOfInterest: 'Other',
            message: 'This is a test message from debug script.'
        });

        const saved = await testContact.save();
        console.log('Write Successful:', saved);
        process.exit(0);
    } catch (error) {
        console.error('Write Failed:', error.message);
        console.error(error);
        process.exit(1);
    }
};

testDB();
