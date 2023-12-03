import { useContext } from "react";
import { CurrentUserContex } from "../../services/context/CurrentUser";

const CurrentUser = () => {
  let { user } = useContext(CurrentUserContex);
  return (
    <>
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>isAdmin: {user.isAdmin}</p>
        </>
      ) : (
        <p>User information not available</p>
      )}
    </>
  );
};

export default CurrentUser;
