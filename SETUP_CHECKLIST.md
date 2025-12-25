# TapLab Setup Checklist

Use this checklist to track your progress through the Firebase and Razorpay setup.

---

## 🔥 Firebase Setup

### Project Creation
- [ ] Created Firebase project at https://console.firebase.google.com/
- [ ] Project name: `TapLab` or `taplab-production`
- [ ] Google Analytics disabled (optional)

### Firestore Database
- [ ] Firestore database enabled
- [ ] Region selected: `asia-south1 (Mumbai)` or `asia-southeast1 (Singapore)`
- [ ] Security rules published (public read, no write)
- [ ] Created `restaurants` collection (can be empty for now)

### Firebase Storage
- [ ] Storage enabled
- [ ] Same region as Firestore
- [ ] Security rules published (public read, no write)

### Client SDK Configuration
- [ ] Web app registered in Firebase Console
- [ ] Copied all 6 config values to `.env.local`:
  - [ ] `NEXT_PUBLIC_FIREBASE_API_KEY`
  - [ ] `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - [ ] `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - [ ] `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - [ ] `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - [ ] `NEXT_PUBLIC_FIREBASE_APP_ID`

### Admin SDK Configuration
- [ ] Generated private key (Service Accounts tab)
- [ ] Downloaded JSON file (stored securely, NOT in Git)
- [ ] Copied 3 values to `.env.local`:
  - [ ] `FIREBASE_ADMIN_PROJECT_ID`
  - [ ] `FIREBASE_ADMIN_CLIENT_EMAIL`
  - [ ] `FIREBASE_ADMIN_PRIVATE_KEY` (with quotes and \n)

---

## 💳 Razorpay Setup

### Account Creation
- [ ] Signed up at https://dashboard.razorpay.com/signup
- [ ] Email verified
- [ ] Logged into dashboard

### KYC Submission
- [ ] Business type selected (Proprietorship/Partnership)
- [ ] Business name: `TapLab`
- [ ] PAN card details entered
- [ ] Bank account details entered (personal account for now)
- [ ] Documents uploaded:
  - [ ] PAN card copy
  - [ ] Bank statement or cancelled cheque
- [ ] KYC submitted (waiting for approval)
- [ ] **Note:** KYC typically takes 1-2 business days

### Test Mode Setup (While KYC Pending)
- [ ] Test Mode enabled (toggle in top-right)
- [ ] Generated Test API keys
- [ ] Copied to `.env.local`:
  - [ ] `NEXT_PUBLIC_RAZORPAY_KEY_ID` (starts with `rzp_test_`)
  - [ ] `RAZORPAY_KEY_SECRET`

### Live Mode Setup (After KYC Approval)
- [ ] KYC approved ✅
- [ ] Switched to Live Mode
- [ ] Generated Live API keys
- [ ] Updated `.env.local` with live keys:
  - [ ] `NEXT_PUBLIC_RAZORPAY_KEY_ID` (starts with `rzp_live_`)
  - [ ] `RAZORPAY_KEY_SECRET`

### Subscription Plans (After KYC Approval)
**Note:** Plans can only be created in Live Mode

- [ ] Monthly plan created:
  - [ ] Name: `TapLab Monthly Subscription`
  - [ ] Amount: ₹999 (99900 paise)
  - [ ] Billing cycle: Monthly
  - [ ] Trial period: 7 days
  - [ ] Plan ID copied to `.env.local`: `RAZORPAY_PLAN_MONTHLY`

- [ ] Yearly plan created:
  - [ ] Name: `TapLab Yearly Subscription`
  - [ ] Amount: ₹9,999 (999900 paise)
  - [ ] Billing cycle: Yearly
  - [ ] Trial period: 7 days
  - [ ] Plan ID copied to `.env.local`: `RAZORPAY_PLAN_YEARLY`

### Webhooks (Set Up After Deploying App)
**Note:** Do this AFTER you deploy to Vercel in Phase 1

- [ ] App deployed to Vercel (get domain first)
- [ ] Webhook created in Razorpay dashboard
- [ ] Webhook URL: `https://yourdomain.com/api/webhooks/razorpay`
- [ ] Events selected:
  - [ ] `subscription.activated`
  - [ ] `subscription.charged`
  - [ ] `subscription.cancelled`
  - [ ] `subscription.paused`
  - [ ] `subscription.resumed`
  - [ ] `subscription.completed`
  - [ ] `payment.failed`
- [ ] Webhook secret copied to `.env.local`: `RAZORPAY_WEBHOOK_SECRET`

---

## 🔐 Environment Variables

### .env.local File
- [ ] Copied `.env.local.example` to `.env.local`
- [ ] All Firebase variables filled in (9 total)
- [ ] All Razorpay variables filled in (5 total)
- [ ] Cron secret generated and filled in
- [ ] Verified `.env.local` is in `.gitignore` (already done ✅)
- [ ] **Double-checked:** Never committed `.env.local` to Git

### Generate Cron Secret
- [ ] Generated random secret using command:
  - **Windows:** PowerShell command from guide
  - **Mac/Linux:** `openssl rand -hex 32`
- [ ] Copied to `.env.local`: `CRON_SECRET`

---

## 📊 Budget & Monitoring

### Firebase
- [ ] Understand free tier limits:
  - Firestore: 50K reads/day, 20K writes/day
  - Storage: 5GB, 1GB/day transfer
- [ ] Budget alerts set (optional):
  - Go to Firebase Console > Usage and billing > Set budget alert
  - Recommended: Set alert at $5 or $10

### Razorpay
- [ ] Understand transaction fees (~2% + GST)
- [ ] No monthly fees
- [ ] Dashboard bookmarked for monitoring

---

## ✅ Final Verification

### Before Starting Phase 1:
- [ ] `.env.local` exists and has all 15 variables filled
- [ ] `.env.local` is NOT committed to Git
- [ ] Firebase Console accessible
- [ ] Razorpay Dashboard accessible
- [ ] KYC submitted (can proceed with test mode while waiting)
- [ ] All credentials saved securely

### Test Connections (Optional)
- [ ] Firebase connection tested (test script from guide)
- [ ] Razorpay connection tested (test script from guide)

---

## 🚀 Ready for Phase 1!

Once all items above are checked:
- ✅ Firebase is ready
- ✅ Razorpay is ready (at least in test mode)
- ✅ Environment variables configured
- ✅ **You can start Phase 1: Foundation Setup**

---

## 📝 Notes & Reminders

### Important Files:
- `SETUP_GUIDE.md` - Detailed step-by-step guide
- `.env.local` - Your actual environment variables (DO NOT COMMIT)
- `.env.local.example` - Template for reference
- `SETUP_CHECKLIST.md` - This file

### When to Use Test vs Live Mode:

**Test Mode (Development):**
- Use `rzp_test_` keys
- No real money charged
- Can test full subscription flow
- Use while KYC is pending

**Live Mode (Production):**
- Use `rzp_live_` keys
- Real payments processed
- Only use after KYC approval
- Required for creating subscription plans

### Next Phase Preparation:
Once setup is complete, Phase 1 will involve:
1. Installing Next.js 15
2. Creating type definitions
3. Building Firebase utility functions
4. Testing Firebase/Razorpay connections

---

## ❓ Questions or Issues?

If you encounter any issues:
1. Check `SETUP_GUIDE.md` troubleshooting section
2. Verify all credentials are correct
3. Restart dev server after changing `.env.local`
4. Check Firebase/Razorpay console for errors

**Current Status:**
- Firebase Setup: ___% complete
- Razorpay Setup: ___% complete
- Environment Variables: ___% complete
- Overall: ___% complete

---

**Setup Started:** _____________
**Setup Completed:** _____________
**Phase 1 Started:** _____________
