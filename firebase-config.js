// 1) Paste your Firebase web app config here (Firebase console > Project settings > Your apps).
export const cfg = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};
export const SUB = {p3d:"3D design & printing", iot:"IoT & engineering", ready:"Our product", lab:"StarX Labs"};
// Starter photos shown until you set up Firebase (and imported once from the admin page).
export const STARTER = [
 {
  "src": "images/01.webp",
  "cat": "p3d",
  "title": "Custom 3D-printed rocket model"
 },
 {
  "src": "images/02.webp",
  "cat": "p3d",
  "title": "3D-printed moon lamp"
 },
 {
  "src": "images/03.webp",
  "cat": "ready",
  "title": "Groot pocket gadget: menu with games and tools"
 },
 {
  "src": "images/04.webp",
  "cat": "iot",
  "title": "IoT automation prototype with ESP32 and sensors"
 },
 {
  "src": "images/05.webp",
  "cat": "p3d",
  "title": "Lithophane photo lamp"
 },
 {
  "src": "images/06.webp",
  "cat": "lab",
  "title": "Our lab and workspace"
 },
 {
  "src": "images/07.webp",
  "cat": "p3d",
  "title": "Ghost reading on a moon lamp"
 },
 {
  "src": "images/08.webp",
  "cat": "ready",
  "title": "Groot: live temperature and humidity"
 },
 {
  "src": "images/09.webp",
  "cat": "iot",
  "title": "Drone, gesture glove and project showcase"
 },
 {
  "src": "images/10.webp",
  "cat": "p3d",
  "title": "Printing a custom lamp in progress"
 },
 {
  "src": "images/11.webp",
  "cat": "ready",
  "title": "Groot: built-in mini game"
 },
 {
  "src": "images/12.webp",
  "cat": "lab",
  "title": "Our 3D printers at work"
 },
 {
  "src": "images/13.webp",
  "cat": "p3d",
  "title": "Glowing ghost night lamp"
 },
 {
  "src": "images/14.webp",
  "cat": "p3d",
  "title": "Lithophane photo frame"
 },
 {
  "src": "images/15.webp",
  "cat": "iot",
  "title": "Wireless IoT control panel and relay prototype"
 },
 {
  "src": "images/16.webp",
  "cat": "p3d",
  "title": "Printing a custom enclosure"
 },
 {
  "src": "images/17.webp",
  "cat": "ready",
  "title": "Groot: animated eyes mode"
 }
];
export const configured = !cfg.projectId.startsWith("YOUR");
