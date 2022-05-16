import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adLoading, setAdLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://arcane-lowlands-25765.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdLoading(false);
        });
    }
  }, [user]);
  return [admin, adLoading];
};
export default useAdmin;
