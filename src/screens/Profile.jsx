import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const Profile = () => {
  const [email, setEmail] = useState("ahmad@gm.com");

  const user = useContext(UserContext);

  console.log(email);

  return (
    <div className="h-[100vh] w-[100%] bg-slate-700">
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>
  );
};
