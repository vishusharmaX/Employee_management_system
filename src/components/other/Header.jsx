import React, { useEffect, useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  localStorage.clear();
  const [userName, setuserName] = useState('Admin');

  console.log(props);
  const data = props.data;
  // console.log(data.firstName);
  
 useEffect(() => {
   if (data) {
     setuserName(data.firstName);
   } else {
     setuserName("Admin");
   }
 }, []);

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload()
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">{userName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
