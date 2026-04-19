// import { useEffect, useState } from "react";

// function Toggle() {
//   // 1. dark mode state
//   const [darkMode, setDarkMode] = useState(false);

//   // 2. add/remove class dark
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div className="bg-white dark:bg-gray-600 min-h-screen text-black dark:text-white">
//       <h1 className="text-3xl">hello world</h1>
//       <button
//         onClick={() => {
//           console.log("Toggle");
//           setDarkMode(!darkMode);
//         }}
//         className="cursor-pointer ml-[600px] mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Dark/Light mode
//       </button>
//     </div>
//   );
// }

// export default Toggle;
