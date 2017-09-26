import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
import {withdrawFunds} from '../actions/index';
//import router Link
class Transaction extends Component {
  constructor(props) {
      super(props);
      this.state = {
        modal: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    handleWithdraw(e){
      let amount = e.target.value;
      if(amount){
        this.props.withdrawFunds(amount);
      }
      this.toggle();
    }

    render() {
      return (
        <div>
          <Button color="danger" onClick={this.toggle}>Withdraw</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              How Much do you want to Withdraw? Your Current balance is {this.props.account.balance}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" value={5.00} onClick={this.toggle}>5.00</Button>{' '}
              <Button color="secondary" value={10.00}onClick={this.toggle}>10.00</Button>
              <Button color="secondary" value={20.00}onClick={this.toggle}>20.00</Button>

            </ModalFooter>
          </Modal>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
