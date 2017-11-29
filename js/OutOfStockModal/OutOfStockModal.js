import React from 'react';
import Modal from 'react-modal';

export default class OutOfStockModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  open() {
    this.setState({ isOpen: true });
  };

  close() {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { checkout } = this.props;
    return (
      <span>
        <input onClick={this.open.bind(this)} type="button" name="checkout" className="btn btn--small-wide" value={checkout}/>
        <Modal
          className={{
            base: 'out-of-stock-modal',
            afterOpen: 'out-of-stock-modal--after-open',
            beforeClose: 'out-of-stock-modal--before-close',
          }}
          isOpen={isOpen}
          onAfterOpen={this.open.bind(this)}
          onRequestClose={this.close.bind(this)}
          contentLabel="We're sorry!"
        >
          <h1>Modal Content</h1>
          <p>Etc.</p>
        </Modal>
      </span>
    );
  }
}
