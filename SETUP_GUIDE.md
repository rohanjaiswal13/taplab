# TapLab Setup Guide: Firebase & Razorpay

This guide will walk you through setting up Firebase and Razorpay for the TapLab project from scratch.

---

## Part 1: Firebase Setup

### Step 1: Create Firebase Project

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Sign in with your Google account

2. **Create New Project**
   - Click "Add project" or "Create a project"
   - Project name: `TapLab` (or `taplab-production`)
   - Click "Continue"

3. **Google Analytics (Optional)**
   - You can enable or disable Google Analytics
   - For now, you can disable it (toggle off)
   - Click "Create project"
   - Wait for project creation (~30 seconds)
   - Click "Continue" when ready

### Step 2: Set Up Firestore Database

1. **Navigate to Firestore**
   - In the left sidebar, click "Build" → "Firestore Database"
   - Click "Create database"

2. **Choose Location**
   - Select "Start in production mode" (we'll add rules later)
   - Click "Next"

3. **Select Region**
   - Choose a region close to your users
   - For India: Select `asia-south1 (Mumbai)` or `asia-southeast1 (Singapore)`
   - Click "Enable"
   - Wait for database creation (~1-2 minutes)

4. **Set Up Security Rules**
   - Once created, go to the "Rules" tab
   - Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read for all restaurants
    match /restaurants/{restaurant} {
      allow read: if true;
      allow write: if false; // Only admin via Firebase Console can write
    }
  }
}
```

   - Click "Publish"

5. **Create Initial Collection**
   - Go to "Data" tab
   - Click "Start collection"
   - Collection ID: `restaurants`
   - Click "Next"
   - For now, click "Cancel" (we'll add documents later via migration scripts)

### Step 3: Set Up Firebase Storage (for images)

1. **Navigate to Storage**
   - In the left sidebar, click "Build" → "Storage"
   - Click "Get started"

2. **Configure Security Rules**
   - Select "Start in production mode"
   - Click "Next"

3. **Select Location**
   - Choose the same region as Firestore (e.g., `asia-south1`)
   - Click "Done"

4. **Set Up Storage Rules**
   - Go to "Rules" tab
   - Replace with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow public read for all files
    match /{allPaths=**} {
      allow read: if true;
      allow write: if false; // Only admin can upload
    }
  }
}
```

   - Click "Publish"

### Step 4: Get Firebase Configuration (Client SDK)

1. **Register Web App**
   - Go to Project Overview (home icon in sidebar)
   - Click the "</>" icon (Web app)
   - App nickname: `TapLab Web`
   - Do NOT check "Firebase Hosting" (we use Vercel)
   - Click "Register app"

2. **Copy Configuration**
   - You'll see a config object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "taplab-xxxxx.firebaseapp.com",
  projectId: "taplab-xxxxx",
  storageBucket: "taplab-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

   - **SAVE THESE VALUES** - you'll need them for `.env.local`
   - Click "Continue to console"

### Step 5: Get Firebase Admin SDK Credentials (Server-side)

1. **Go to Project Settings**
   - Click the gear icon (⚙️) next to "Project Overview"
   - Select "Project settings"

2. **Navigate to Service Accounts**
   - Click the "Service accounts" tab
   - Click "Generate new private key"
   - Confirm by clicking "Generate key"
   - A JSON file will download - **KEEP THIS SAFE AND NEVER COMMIT TO GIT**

3. **Extract Values from JSON**
   The downloaded file looks like:

```json
{
  "type": "service_account",
  "project_id": "taplab-xxxxx",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nXXXXX...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xxxxx@taplab-xxxxx.iam.gserviceaccount.com",
  ...
}
```

   - You need:
     - `project_id`
     - `client_email`
     - `private_key` (entire string including `\n` characters)

### Step 6: Enable Firestore Indexes (for queries)

1. **Create Composite Indexes**
   - Go to Firestore → "Indexes" tab
   - We'll create indexes when needed (Firebase will suggest them automatically)
   - For now, no action needed

---

## Part 2: Razorpay Setup

### Step 1: Create Razorpay Account

1. **Sign Up**
   - Visit: https://dashboard.razorpay.com/signup
   - Enter your details:
     - Business Email (you can use personal email for now)
     - Password
   - Click "Sign Up"
   - Verify your email

2. **Complete KYC (Know Your Customer)**
   - After login, you'll be prompted to complete KYC
   - Business Type: Select "Proprietorship" (for personal account) or "Partnership"
   - Business Name: `TapLab` or your business name
   - PAN Card: Enter your PAN number
   - Bank Account Details:
     - Account Number (your personal account for now)
     - IFSC Code
     - Account Holder Name
   - Upload documents:
     - PAN Card copy
     - Bank statement or cancelled cheque
   - Submit for verification (takes 1-2 business days)

3. **Test Mode Access**
   - While KYC is pending, you can use **Test Mode**
   - Toggle "Test Mode" in the top-right corner
   - Test mode allows full testing without real payments

### Step 2: Get API Keys

1. **Navigate to API Keys**
   - In the left sidebar, click "Settings" → "API Keys"
   - Or visit: https://dashboard.razorpay.com/app/keys

2. **Generate Test Keys (for development)**
   - Make sure "Test Mode" is ON (toggle in top-right)
   - Click "Generate Test Keys"
   - You'll see:
     - **Key ID**: `rzp_test_XXXXXXXXXXXX`
     - **Key Secret**: Click "Show" and copy `YYYYYYYYYYYYYYYY`
   - **SAVE BOTH** - you need them for `.env.local`

3. **Live Keys (after KYC approval)**
   - Switch "Test Mode" OFF
   - Click "Generate Live Keys"
   - You'll see:
     - **Key ID**: `rzp_live_XXXXXXXXXXXX`
     - **Key Secret**: `ZZZZZZZZZZZZZZZZ`
   - Use these for production

### Step 3: Create Subscription Plans

**IMPORTANT:** You can only create subscription plans in **Live Mode** (after KYC approval). For testing, skip this step and use test mode subscriptions.

#### After KYC Approval:

1. **Navigate to Subscriptions**
   - Turn OFF "Test Mode"
   - Go to "Products" → "Subscriptions" in the sidebar
   - Or visit: https://dashboard.razorpay.com/app/subscriptions

2. **Create Monthly Plan**
   - Click "Create Plan"
   - Plan Name: `TapLab Monthly Subscription`
   - Plan Description: `Monthly menu subscription with 7-day free trial`
   - Billing Cycle: `Monthly`
   - Amount: `99900` (₹999.00 - amount is in paise)
   - Currency: `INR`
   - Trial Period: `7 days`
   - Click "Create Plan"
   - **COPY THE PLAN ID** (looks like `plan_XXXXXXXXXXXX`)

3. **Create Yearly Plan**
   - Click "Create Plan"
   - Plan Name: `TapLab Yearly Subscription`
   - Plan Description: `Yearly menu subscription with 7-day free trial`
   - Billing Cycle: `Yearly`
   - Amount: `999900` (₹9,999.00)
   - Currency: `INR`
   - Trial Period: `7 days`
   - Click "Create Plan"
   - **COPY THE PLAN ID** (looks like `plan_YYYYYYYYYYYY`)

### Step 4: Set Up Webhooks

Webhooks notify your app when subscription events occur (payment success, failure, cancellation, etc.).

**IMPORTANT:** Set up webhooks AFTER deploying your Next.js app to Vercel (Phase 1 of implementation).

#### When Ready:

1. **Navigate to Webhooks**
   - Go to "Settings" → "Webhooks"
   - Or visit: https://dashboard.razorpay.com/app/webhooks

2. **Create Webhook**
   - Click "Create Webhook"
   - Webhook URL: `https://taplab.in/api/webhooks/razorpay`
     - (Replace with your actual Vercel domain)
   - Active Events: Select these:
     - `subscription.activated`
     - `subscription.charged`
     - `subscription.cancelled`
     - `subscription.paused`
     - `subscription.resumed`
     - `subscription.completed`
     - `payment.failed`
   - Alert Email: Your email
   - Click "Create Webhook"

3. **Get Webhook Secret**
   - After creation, you'll see "Webhook Secret"
   - Click "Show" and copy the secret (looks like `whsec_XXXXXXXXXXXX`)
   - **SAVE THIS** - you need it for `.env.local`

---

## Part 3: Environment Variables Setup

### Step 1: Create .env.local File

In your project root (`C:\Users\Taroneez\Desktop\taplab\`), create a file named `.env.local`:

```bash
# ===================================
# FIREBASE CLIENT SDK (Public - used in browser)
# ===================================
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=taplab-xxxxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=taplab-xxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=taplab-xxxxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

# ===================================
# FIREBASE ADMIN SDK (Secret - server-side only)
# ===================================
FIREBASE_ADMIN_PROJECT_ID=taplab-xxxxx
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@taplab-xxxxx.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX...\n-----END PRIVATE KEY-----\n"

# ===================================
# RAZORPAY (for payments & subscriptions)
# ===================================
# Test Mode Keys (for development)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXX
RAZORPAY_KEY_SECRET=YYYYYYYYYYYYYYYYYYYY
RAZORPAY_WEBHOOK_SECRET=whsec_XXXXXXXXXXXX

# Subscription Plan IDs (create these in Razorpay dashboard)
RAZORPAY_PLAN_MONTHLY=plan_XXXXXXXXXXXX
RAZORPAY_PLAN_YEARLY=plan_YYYYYYYYYYYY

# ===================================
# CRON JOB SECURITY
# ===================================
# Generate a random secret (use: openssl rand -hex 32)
CRON_SECRET=your-random-secret-here-min-32-chars

# ===================================
# NOTES:
# ===================================
# - Never commit this file to Git (.gitignore already excludes *.local)
# - For production, add these to Vercel Environment Variables
# - For FIREBASE_ADMIN_PRIVATE_KEY, keep the quotes and \n characters
# - Switch to Live Razorpay keys before production deployment
```

### Step 2: Fill in Your Values

Replace all the `XXXX` placeholders with your actual values from:
- **Firebase Client SDK**: From Step 4 of Firebase setup
- **Firebase Admin SDK**: From the JSON file in Step 5 of Firebase setup
- **Razorpay Keys**: From Step 2 of Razorpay setup
- **Razorpay Plans**: From Step 3 of Razorpay setup (after KYC approval)
- **Cron Secret**: Generate using the command below

### Step 3: Generate Cron Secret

Run this command in your terminal to generate a secure random secret:

**Windows (PowerShell):**
```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
```

**Mac/Linux:**
```bash
openssl rand -hex 32
```

Copy the output and paste it as the value for `CRON_SECRET`.

### Step 4: Verify .env.local is Ignored

1. Check that `.env.local` is in `.gitignore`:
   - Your `.gitignore` already has `*.local` on line 14 ✅
   - This means `.env.local` will NOT be committed to Git

2. **NEVER commit `.env.local` to Git** - it contains secrets!

---

## Part 4: Vercel Deployment Setup (For Later)

You'll need to add environment variables to Vercel when deploying.

### When Deploying to Vercel:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/
   - Connect your GitHub repository

2. **Add Environment Variables**
   - Go to Project Settings → "Environment Variables"
   - Add ALL variables from `.env.local`:
     - Copy each variable name and value
     - For `FIREBASE_ADMIN_PRIVATE_KEY`, paste the entire key including quotes
   - Choose environment: "Production", "Preview", "Development" (or all)
   - Click "Save"

3. **Important Notes:**
   - Vercel automatically prefixes `NEXT_PUBLIC_*` variables for client-side use
   - Other variables remain server-side only
   - Redeploy after adding variables

---

## Part 5: Testing Your Setup

### Test Firebase Connection

After setting up Firebase and `.env.local`, you can test the connection:

1. Create a test file `test-firebase.js`:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test connection
const testConnection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'restaurants'));
    console.log('✅ Firebase connected! Collections:', querySnapshot.size);
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
  }
};

testConnection();
```

2. Run: `node test-firebase.js`
3. You should see "✅ Firebase connected!"

### Test Razorpay Keys

Test your Razorpay keys using this simple script:

```javascript
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

razorpay.plans.all()
  .then((plans) => {
    console.log('✅ Razorpay connected! Plans:', plans.count);
    console.log('Plans:', plans.items);
  })
  .catch((error) => {
    console.error('❌ Razorpay connection failed:', error);
  });
```

---

## Part 6: Quick Reference

### What You Need Before Starting Phase 1:

✅ **Firebase:**
- [ ] Firebase project created
- [ ] Firestore database enabled (production mode)
- [ ] Storage enabled
- [ ] Client SDK config copied to `.env.local`
- [ ] Admin SDK credentials downloaded and added to `.env.local`
- [ ] Security rules published

✅ **Razorpay:**
- [ ] Account created
- [ ] KYC submitted (can use test mode while pending)
- [ ] Test API keys copied to `.env.local`
- [ ] Subscription plans created (after KYC - or use test mode)
- [ ] Webhook secret generated (after deploying app)

✅ **Environment:**
- [ ] `.env.local` file created with all variables
- [ ] `.env.local` is in `.gitignore` (already done ✅)
- [ ] Cron secret generated

### Costs Estimate

**Firebase (Spark Plan - FREE):**
- Firestore: 50,000 reads/day, 20,000 writes/day
- Storage: 5GB, 1GB/day transfer
- Should be enough for initial launch
- Upgrade to Blaze (pay-as-you-go) when needed

**Razorpay:**
- No monthly fees
- Transaction fees: ~2% + GST per successful payment
- No setup costs

**Vercel (Hobby Plan - FREE):**
- 100GB bandwidth/month
- Serverless functions
- Custom domain
- Upgrade to Pro ($20/month) when needed

---

## Part 7: Security Checklist

Before going to production:

- [ ] Never commit `.env.local` to Git
- [ ] Never expose Firebase Admin private key in client-side code
- [ ] Never expose Razorpay secret keys in client-side code
- [ ] Set proper Firestore security rules (no public write access)
- [ ] Verify webhook signature in webhook handler (we'll implement this)
- [ ] Use HTTPS for all API calls (Vercel does this automatically)
- [ ] Set up Firebase budget alerts
- [ ] Enable Razorpay webhook retries
- [ ] Test subscription flows in test mode before going live

---

## Troubleshooting

### Firebase Issues

**Error: "Permission denied"**
- Check Firestore security rules
- Make sure rules allow public read for `restaurants` collection

**Error: "Invalid API key"**
- Double-check API key in `.env.local`
- Make sure you copied the full key including all characters
- Restart your dev server after changing `.env.local`

### Razorpay Issues

**Error: "Invalid key"**
- Make sure you're using the correct mode (test vs live)
- Test keys start with `rzp_test_`
- Live keys start with `rzp_live_`

**Error: "Plan not found"**
- Plans can only be created in Live Mode
- Make sure KYC is complete
- Use test mode for development

---

## Next Steps

Once you've completed this setup:

1. ✅ Firebase project ready
2. ✅ Razorpay account ready
3. ✅ `.env.local` configured
4. 🚀 **Ready to start Phase 1: Foundation Setup**

You can now proceed with installing Next.js and building the infrastructure!

---

## Support

**Firebase Help:**
- Documentation: https://firebase.google.com/docs
- Console: https://console.firebase.google.com/

**Razorpay Help:**
- Documentation: https://razorpay.com/docs/
- Dashboard: https://dashboard.razorpay.com/
- Support: support@razorpay.com

**Questions?**
Feel free to ask for clarification on any step!
