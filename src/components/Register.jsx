// import React, { useState } from "react";

// import { registerUser } from "api/authorization";

// export default function Register({setToken}){
//     const [username, setUsername] = useState("")
//     const [ password, setPassword]= useState ("")

//     return(
//         <div>
//             <h4>Register</h4>
//             <form
//             onSubmit={async(e)=>
//             e.preventDefault()
//         const result = await registerUser(username,password);
//     localStorage.setItem("token", result.data.token);
// setToken(result.data.token);
// setPassword("");
// setUsername("");
//             }}
//             >
//                 <input
//                 value={username}
//                 placeholder="username"
//                 onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                 value={password}
//                 placeholder="password"
//                 type="password"
//                 onChange={(e)=> setPassword(e.target.value)}
//                 />
//                 <button type="submit">Submit</button>
//                 </form>

//         </div>
//     );
// }

// OURS ↑

import React, { useState } from "react";

import { registerUser } from "../api/authorization";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Register:</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await registerUser(username, password);
          console.log(result);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
        }}
      >
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}
