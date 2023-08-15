import Profile from "./Profile.js";

const Filippo = new Profile(
    "Data Analysis",
    "Application Development",
    "Systems Engineering",
    "shoot me an email",
    "connect with me on LinkedIn",
    "check out my projects on GitHub",
    "May 31, 2023 12:00:00 EST",
    "/frontend/image/profile_pic.png"
);

//adding Filippo to profile array
const profileArray = [Filippo];

//exporting array to script file
export default profileArray;