"use client";

import { useState } from "react";

const CLOUD_NAME = "dcfr7ucu2";
const UPLOAD_PRESET = "snit_unsigned";

export default function AdminPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");

  async function uploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus("Uploading...");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", "snit-website");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setImageUrl(data.secure_url);
    setStatus("Uploaded successfully!");
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-10">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-card">
        <h1 className="font-display text-3xl font-bold text-navy-900">
          SNIT Admin Panel
        </h1>

        <p className="mt-2 text-navy-600">
          Upload photos for website updates.
        </p>

        <div className="mt-6">
          <label className="mb-2 block font-semibold text-navy-800">
            Upload Photo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={uploadImage}
            className="w-full rounded-xl border border-navy-200 p-3"
          />
        </div>

        {status && (
          <p className="mt-4 font-semibold text-navy-700">{status}</p>
        )}

        {imageUrl && (
          <div className="mt-6">
            <img
              src={imageUrl}
              alt="Uploaded"
              className="rounded-2xl border shadow-card"
            />

            <p className="mt-4 break-all text-sm text-navy-600">
              {imageUrl}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
