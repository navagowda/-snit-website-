# Firebase Setup Guide — Enquiry Form Storage

The site stores every enquiry form submission (Hero/Contact/Admissions/Course popups/Abacus page) in a **Cloud Firestore** collection called `enquiries`. There is **no admin login built into the site** — you view and manage enquiries directly inside the Firebase Console, which only your team can access.

## 1. Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com/) and sign in with a Google account.
2. Click **Add project**, name it e.g. `snit-mulbagal`, and finish the setup wizard (Google Analytics is optional — you can disable it).

## 2. Create a Firestore Database

1. In the left sidebar, go to **Build → Firestore Database**.
2. Click **Create database**.
3. Choose **Production mode** (we'll add rules below) and select a region close to India (e.g. `asia-south1 (Mumbai)`).
4. Click **Enable**.

## 3. Register a Web App

1. In **Project settings** (gear icon) → **Your apps**, click the **Web** (`</>`) icon.
2. Give it a nickname, e.g. `snit-website`. You do **not** need Firebase Hosting.
3. Firebase will show you a config object like this:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "snit-mulbagal.firebaseapp.com",
  projectId: "snit-mulbagal",
  storageBucket: "snit-mulbagal.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};
```

4. Copy each value into your `.env.local` file (see `.env.local.example`):

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=snit-mulbagal.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=snit-mulbagal
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=snit-mulbagal.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1234567890
NEXT_PUBLIC_FIREBASE_APP_ID=1:1234567890:web:abcdef123456
```

## 4. Set Firestore Security Rules

Since the form is public (no login), Firestore rules must **allow anyone to create** an enquiry document but **never allow reading, updating, or deleting** from the client — that way your team's data stays private and can only be viewed inside the Firebase Console (which uses admin access, bypassing these rules).

Go to **Firestore Database → Rules** and paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /enquiries/{docId} {
      allow create: if request.resource.data.name is string
                    && request.resource.data.phone is string
                    && request.resource.data.name.size() > 0
                    && request.resource.data.name.size() < 200
                    && request.resource.data.phone.size() < 20;
      allow read, update, delete: if false;
    }
  }
}
```

Click **Publish**.

## 5. Viewing Enquiries

Go to **Firestore Database → Data** in the Firebase Console. Every submission appears as a document inside the `enquiries` collection, with fields: `name`, `phone`, `email`, `course`, `message`, `source`, `page`, `status`, and `createdAt`.

Tip: click **Filter** to sort by `createdAt` (newest first), or export the collection periodically via **Firestore → Import/Export** if you want a spreadsheet backup.

## 6. Local Testing

After filling `.env.local`, restart the dev server (`npm run dev`) and submit a test enquiry from any form on the site. It should appear in the Firebase Console within a few seconds.

## 7. Production Environment Variables

When deploying (Vercel/Netlify), add the same six `NEXT_PUBLIC_FIREBASE_*` variables in your hosting provider's **Environment Variables** settings (see `DEPLOYMENT.md`). These are safe to expose publicly — Firebase web API keys are not secret; access is controlled entirely by the security rules above.
