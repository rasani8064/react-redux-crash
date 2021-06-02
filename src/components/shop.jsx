import React, { Component } from "react";
import { connect } from "react-redux";
import { buyLaptop, buyMobile, fetchUsers } from "../redux/actions";

class shop extends Component {
  render() {
    return (
      <div className="mobile-container">
        <h1>Welcome to Mobile shop</h1>
        <div className="item-cards">
          <div className="item">
            <h2>Mobiles</h2>
            <p>Available mobiles are :{this.props.numOfMobiles}</p>
            <button type="submit" onClick={this.props.buyMobile}>
              BUY
            </button>
          </div>
          <div className="item">
            <h2>Laptops</h2>
            <p>Available Laptops are :{this.props.numOfLaptops}</p>
            <button type="submit" onClick={this.props.buyLaptop}>
              BUY
            </button>
          </div>
          <div className="item">
            <h2>Users</h2>
            <p> Users Count: {this.props.users.length}</p>
            <button type="submit" onClick={this.props.fetchUsers}>
              Call API
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfMobiles: state.mobiles.numOfMobiles,
    numOfLaptops: state.laptops.numOfLaptops,
    users: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyMobile: () => dispatch(buyMobile()),
    buyLaptop: () => dispatch(buyLaptop()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(shop);
