import React, { Component } from 'react';
import { connect } from 'react-redux';
//make sure action created flows through all reducers
//import router Link
import { Link } from 'react-router-dom';
import Transaction from '../containers/Transaction';

class AccountDetail extends Component {
  render() {
    if(!this.props.account) {
      return (
        <div>Please select a Account...</div>
      )
    }
    return (
      <div className="col-md-6">
        <div className= "card">
          <div className= "card-block">
          <div className="accountDetail">
            <h3>Account Type:{this.props.account.accountType}</h3>
            <h3>Balance:{this.props.account.balance}</h3>
          </div>
          </div>
          <Transaction>Withdraw Funds</Transaction>
          <Link className="btn btn-primary" to="/users/" >Back to List of Users</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}




export default connect(mapStateToProps)(AccountDetail);
