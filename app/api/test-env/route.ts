import { NextResponse } from 'next/server';

export async function GET() {
  const mongoUri = process.env.MONGODB_URI || 'NOT SET';
  const jwtSecret = process.env.JWT_SECRET || 'NOT SET';
  
  // Mask sensitive parts
  const maskedMongo = mongoUri.replace(/\/\/([^:]+):([^@]+)@/, '//USERNAME:****@');
  
  return NextResponse.json({
    timestamp: new Date().toISOString(),
    mongodb_uri: maskedMongo,
    jwt_secret_length: jwtSecret.length,
    includes_cluster0: mongoUri.includes('cluster0.os363zi'),
    includes_houseoftech: mongoUri.includes('houseoftech'),
    actual_hostname: mongoUri.match(/@([^\/]+)\//)?.[1] || 'NOT FOUND',
    full_uri_length: mongoUri.length,
  });
}
