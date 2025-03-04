import Profile from "./Profile.js";

const Filippo = new Profile(
    "Chest X-ray web app",
    "Banking System API",
    "MTA Data Visualization API",
    "velosaty - student-athletes",
    "Parallel Mandelbrot set",
    "shoot me an email",
    "connect with me on LinkedIn",
    "check out my projects on GitHub",
    "/frontend/image/profile_pic.png"
);

//adding Filippo to profile array
const profileArray = [Filippo];

//exporting array to script file
export default profileArray;
