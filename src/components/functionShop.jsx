import React from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { buyLaptop, buyMobile, fetchUsers } from "../redux/actions";

function FunctionShop(props) {
  console.log(props);
  let numOfMobiles = useSelector((state) => state.mobiles.numOfMobiles);
  let numOfLaptops = useSelector((state) => state.laptops.numOfLaptops);
  let users = useSelector((state) => state.users.users);

  return (
    <div className="mobile-container">
      <h1>Welcome to Mobile shop</h1>
      <div className="item-cards">
        <div className="item">
          <h2>Mobiles</h2>
          <p>Available mobiles are :{numOfMobiles}</p>
          <button type="submit" onClick={props.buyMobile}>
            BUY
          </button>
        </div>
        <div className="item">
          <h2>Laptops</h2>
          <p>Available Laptops are :{numOfLaptops}</p>
          <button type="submit" onClick={props.buyLaptop}>
            BUY
          </button>
        </div>
        <div className="item">
          <h2>Users</h2>
          <p> Users Count: {users.length}</p>
          <button type="submit" onClick={props.fetchUsers}>
            Call API
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  //used for functions only
  return bindActionCreators(
    {
      buyMobile,
      buyLaptop,
      fetchUsers,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(FunctionShop);
