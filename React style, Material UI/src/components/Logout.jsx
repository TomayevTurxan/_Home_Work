import { PropTypes } from "prop-types";
const Logout = ({setUser}) => {
  return (
    <>
    {/* <p>Name: </p> */}
    <button onClick={()=>{
      setUser(null)
    }}>LogOut</button>
    </>
  )
}
Logout.propTypes = {
  setUser: PropTypes.func
}
export default Logout