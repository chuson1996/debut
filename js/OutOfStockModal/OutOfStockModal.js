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
    const { checkout, modalHeading, modalBody, closeSvgSrc, childrenHTML, modalBackgroundSrc } = this.props;
    return (
      <span>
        <input onClick={this.open.bind(this)} type="button" name="checkout" className="btn btn--small-wide" value={checkout}/>
        <Modal
          className={{
            base: 'out-of-stock-modal',
            afterOpen: 'out-of-stock-modal--after-open',
            beforeClose: 'out-of-stock-modal--before-close',
          }}
          style={{
            content: {
              backgroundImage: `url('${modalBackgroundSrc}')`
            }
          }}
          isOpen={isOpen}
          onAfterOpen={this.open.bind(this)}
          onRequestClose={this.close.bind(this)}
          contentLabel="We're sorry!"
          closeTimeoutMS={300}
        >
          <img onClick={this.close.bind(this)} className="out-of-stock-modal__close-button" src={closeSvgSrc} alt="close"/>
          <h1>{modalHeading}</h1>
          <div dangerouslySetInnerHTML={{ __html: modalBody }}/>
          <div dangerouslySetInnerHTML={{ __html: childrenHTML }}></div>
        </Modal>
      </span>
    );
  }
}
