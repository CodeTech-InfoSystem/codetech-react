const { initializeApp } = require("firebase/app");
const { getDocs, getFirestore, collection } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

exports.handler = async function () {
  try {
    const snapshot = await getDocs(collection(db, 'jobs'));
    const urls = snapshot.docs.map(doc => `
      <url>
        <loc>https://codetechinfosystem.com/jobs/${doc.id}</loc>
        <lastmod>${(doc.data().updatedAt?.toDate() || new Date()).toISOString().slice(0, 10)}</lastmod>
        <priority>1.0</priority>
      </url>`).join("");

    const static_urls = `
      <url>
        <loc>https://codetechinfosystem.com/</loc>
        <lastmod>2025-05-19</lastmod> 
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://codetechinfosystem.com/about-us</loc>
        <lastmod>2025-05-19</lastmod> 
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://codetechinfosystem.com/contact-us</loc>
        <lastmod>2025-05-19</lastmod> 
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://codetechinfosystem.com/services</loc>
        <lastmod>2025-05-19</lastmod> 
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://codetechinfosystem.com/blog</loc>
        <lastmod>2025-05-19</lastmod> 
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://codetechinfosystem.com/clients</loc>
        <lastmod>2025-05-19</lastmod> 
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://codetechinfosystem.com/careers</loc>
        <lastmod>2025-05-19</lastmod>
        <priority>1.0</priority>
      </url>
    `

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${static_urls}
      ${urls}
      </urlset>`;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/xml" },
      body: xml
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error generating sitemap: ${error.message}`
    };
  }
};
