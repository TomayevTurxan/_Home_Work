import { PropTypes } from "prop-types";
const UserL = ({ user }) => {
  return (
    <>
      <h4>
        <b>username: {user.name}</b>
      </h4>
    </>
  );
};

UserL.propTypes = {
  user: PropTypes.object,
};
export default UserL;
