// Test Firebase Admin SDK connection
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '.env.local') });

// Check if environment variables are loaded
console.log('🔍 Checking environment variables...\n');

const requiredVars = [
  'FIREBASE_ADMIN_PROJECT_ID',
  'FIREBASE_ADMIN_CLIENT_EMAIL',
  'FIREBASE_ADMIN_PRIVATE_KEY',
];

let hasAllVars = true;
for (const varName of requiredVars) {
  if (process.env[varName]) {
    console.log(`✅ ${varName}: Set`);
  } else {
    console.log(`❌ ${varName}: Missing`);
    hasAllVars = false;
  }
}

if (!hasAllVars) {
  console.log('\n❌ Missing environment variables. Please check your .env.local file.');
  process.exit(1);
}

console.log('\n🔥 Testing Firebase Admin SDK connection...\n');

try {
  // Dynamically import Firebase Admin (after env vars are loaded)
  const admin = (await import('firebase-admin')).default;

  // Initialize Firebase Admin
  if (!admin.apps.length) {
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n');

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    });
  }

  const db = admin.firestore();

  // Test Firestore connection by listing collections
  console.log('📚 Fetching collections from Firestore...');
  const collections = await db.listCollections();

  console.log('\n✅ Firebase Admin SDK connected successfully!');
  console.log(`\n📊 Found ${collections.length} collection(s):`);

  if (collections.length > 0) {
    collections.forEach((collection) => {
      console.log(`   - ${collection.id}`);
    });
  } else {
    console.log('   (No collections yet - this is normal for a new Firestore database)');
  }

  // Test reading from restaurants collection
  console.log('\n📖 Testing restaurants collection...');
  const restaurantsSnapshot = await db.collection('restaurants').limit(5).get();

  if (restaurantsSnapshot.empty) {
    console.log('   ℹ️  No restaurants found (collection is empty)');
    console.log('   This is expected - you\'ll add restaurants in Phase 3');
  } else {
    console.log(`   ✅ Found ${restaurantsSnapshot.size} restaurant(s):`);
    restaurantsSnapshot.forEach((doc) => {
      console.log(`      - ${doc.id}`);
    });
  }

  console.log('\n✅ All Firebase tests passed! You\'re ready for Phase 1. 🎉\n');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Firebase connection failed:', error.message);
  console.error('\nTroubleshooting:');
  console.error('1. Check that .env.local exists and has all Firebase variables');
  console.error('2. Verify Firebase Admin private key format (should have \\n characters)');
  console.error('3. Make sure project ID and client email match your Firebase project');
  console.error('4. Check Firebase Console for any project issues\n');
  process.exit(1);
}
