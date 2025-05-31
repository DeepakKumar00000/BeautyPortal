// import React, { useState } from "react";

// const LoginSignupPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => setIsLogin(!isLogin);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-pink-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6 text-[#D6597C]">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         <form className="flex flex-col gap-4">
//           {!isLogin && (
//             <input
//               type="text"
//               placeholder="Name"
//               className="border p-2 rounded"
//               required
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="border p-2 rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-[#D6597C] text-white py-2 rounded hover:bg-pink-600"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             onClick={toggleForm}
//             className="text-[#D6597C] font-semibold underline"
//           >
//             {isLogin ? "Sign up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupPage;


import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you'd typically send API request to verify credentials
    // We'll mock it by just storing email in cookies
    Cookies.set("userEmail", email, { expires: 1 }); // 1 day expiry
    navigate("/"); // Redirect to home after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#D6597C]">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#D6597C] text-white py-2 rounded hover:bg-pink-600"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-[#D6597C] font-semibold underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
