// lib/firebase.ts
// Client-side Firebase setup used to store enquiry form submissions in
// Cloud Firestore. No admin login is required — enquiries are written
// to a "enquiries" collection that you can view from the Firebase Console
// (Firestore Database tab). See FIREBASE_SETUP.md for full instructions.

import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  type Firestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function getFirebaseApp(): FirebaseApp | null {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return null;
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

function getDb(): Firestore | null {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app);
}

export type EnquiryPayload = {
  name: string;
  phone: string;
  email?: string;
  course?: string;
  message?: string;
  source: string; // e.g. "hero-form", "course-popup", "contact-page", "admissions-page"
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

/**
 * Writes an enquiry to Firestore collection "enquiries".
 * Falls back gracefully (returns ok:false) if Firebase env vars are not
 * configured yet, so the UI can still show a friendly message instead of
 * crashing during local development or before Firebase is set up.
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmitResult> {
  try {
    const db = getDb();
    if (!db) {
      return {
        ok: false,
        error:
          "Form storage is not configured yet. Please call or WhatsApp us directly, or contact the site admin to finish Firebase setup.",
      };
    }
    await addDoc(collection(db, "enquiries"), {
      ...payload,
      createdAt: serverTimestamp(),
      status: "new",
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    return { ok: true };
  } catch (err) {
    console.error("submitEnquiry failed:", err);
    return { ok: false, error: "Something went wrong sending your enquiry. Please try calling us instead." };
  }
}
