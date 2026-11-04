STARX LABS WEBSITE WITH PRIVATE ADMIN PANEL

FILES
index.html  - your website (gallery loads from your database)
admin.html  - private photo manager (only you can log in)
firebase-config.js - paste your Firebase settings here
firestore.rules - security rules (only your email can add/delete)
images/ - starter photos

SETUP (about 10 minutes, free)
1. Go to console.firebase.google.com > Add project (any name).
2. Build > Authentication > Get started > turn on Email/Password.
   Users tab > Add user: your email and a strong password (this is your only account).
   Settings > User actions: switch OFF "Enable create (sign-up)" if shown.
3. Build > Firestore Database > Create database (production mode).
   Rules tab: paste the contents of firestore.rules, change YOUR_EMAIL@gmail.com to your login email, click Publish.
4. Project settings (gear) > Your apps > Web (</>) > register app.
   Copy the config values into firebase-config.js (apiKey, authDomain, projectId, appId).
5. Authentication > Settings > Authorized domains: add your website domain (for example yourname.netlify.app).
6. Upload ALL files and the images folder to Netlify (drag the whole folder to app.netlify.com/drop).
7. Open yoursite/admin.html, log in, click "Import starter photos" once. Then add or delete photos any time.

NOTE: The admin page link is public, but nobody can add or delete without your login. The rules enforce this on Google's servers.
