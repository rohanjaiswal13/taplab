import { readFileSync } from 'fs';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
config({ path: join(rootDir, '.env.local') });

// Import Firebase Admin
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

// Read the JSON file
const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error('❌ Please provide JSON file path');
  console.error('Usage: node upload-to-firestore.mjs <json-file>');
  process.exit(1);
}

try {
  console.log(`📖 Reading ${jsonPath}...`);
  const data = JSON.parse(readFileSync(jsonPath, 'utf8'));

  const slug = data.slug;
  if (!slug) {
    throw new Error('Document must have a slug field');
  }

  console.log(`\n📤 Uploading ${slug} to Firestore...`);

  // Add timestamps
  const now = admin.firestore.Timestamp.now();
  const docData = {
    ...data,
    createdAt: now,
    updatedAt: now,
    // Convert date strings to Firestore Timestamps
    subscription: {
      ...data.subscription,
      currentPeriodStart: admin.firestore.Timestamp.fromDate(new Date(data.subscription.currentPeriodStart)),
      currentPeriodEnd: admin.firestore.Timestamp.fromDate(new Date(data.subscription.currentPeriodEnd)),
      trialEnd: data.subscription.trialEnd ? admin.firestore.Timestamp.fromDate(new Date(data.subscription.trialEnd)) : null,
    },
  };

  // Upload to Firestore
  await db.collection('restaurants').doc(slug).set(docData);

  console.log(`✅ Successfully uploaded ${slug} to Firestore!`);
  console.log(`\n📊 Document stats:`);
  console.log(`   - Slug: ${slug}`);
  console.log(`   - Name: ${data.name}`);
  console.log(`   - Layout: ${data.menuConfig.layout}`);
  console.log(`   - Sections: ${data.menuConfig.sections.length}`);
  console.log(`   - Total items: ${data.menuConfig.sections.reduce((sum, s) => sum + s.items.length, 0)}`);
  console.log(`\n🎉 You can now access the menu at: http://localhost:3000/${slug}\n`);

  process.exit(0);
} catch (error) {
  console.error('\n❌ Upload failed:', error.message);
  process.exit(1);
}
