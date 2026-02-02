import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  console.error('[DB ERROR] MONGODB_URI environment variable is not defined');
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Temporarily log the connection string (masked) for debugging
const maskedUri = MONGODB_URI.replace(/:([^@]+)@/, ':****@');
console.log('[DB] MONGODB_URI format check:', maskedUri);
console.log('[DB] MONGODB_URI includes cluster0.os363zi:', MONGODB_URI.includes('cluster0.os363zi') ? 'YES' : 'NO - THIS IS THE PROBLEM!');

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    console.log('[DB] Using cached MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('[DB] Creating new MongoDB connection...');
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('[DB] MongoDB connected successfully');
      return mongoose;
    }).catch((error) => {
      console.error('[DB ERROR] MongoDB connection failed:', error);
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('[DB ERROR] MongoDB connection error:', e);
    throw e;
  }

  return cached.conn;
}

export default connectDB;
