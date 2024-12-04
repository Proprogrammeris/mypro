import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchBlogs() {
  const blogs = await getDocs(collection(db, "blogs"));
  blogs.forEach(doc => {
    const data = doc.data();
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML += `<div class="blog-post"><h3>${data.title}</h3><p>${data.content}</p></div>`;
  });
}

async function fetchVlogs() {
  const vlogs = await getDocs(collection(db, "vlogs"));
  vlogs.forEach(doc => {
    const data = doc.data();
    const vlogContainer = document.getElementById("vlog-container");
    vlogContainer.innerHTML += `<div class="vlog-post"><h3>${data.title}</h3><a href="${data.link}">Watch Now</a></div>`;
  });
}

fetchBlogs();
fetchVlogs();
