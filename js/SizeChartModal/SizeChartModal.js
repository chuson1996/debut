import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class SizeChartModal extends React.Component {
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
    return (
      <div className="mb-3">
        <a href="#" className="text-info" onClick={this.open.bind(this)}>SIZE CHART</a>
        <Modal isOpen={isOpen} toggle={isOpen ? this.close.bind(this): this.open.bind(this)}>
          <ModalHeader toggle={isOpen ? this.close.bind(this): this.open.bind(this)}>
            SIZE CHART
          </ModalHeader>
          <ModalBody>
            <h3>MEN'S AND WOMEN'S REVOLT FOOTWEAR SIZING</h3>
            <p className="lead">FIND YOUR SIZE</p>
            <p className="text-danger">We are using <u>US Men Size</u> by default.</p>
            <div className="gl-table">
              <div className="gl-table-container">
                <div className="gl-table-fixed-col">
                  <table>
                    <tbody>
                      <tr>
                        <td className="label ">
                          <span>Heel-toe measurement</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="label ">
                          <span>US - Men's</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="label ">
                          <span>US - Women's</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="label ">
                          <span>UK</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="label ">
                          <span>EU</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="label ">
                          <span>JP</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="gl-table-container-scrollable">
                  <table className="gl-table-scrollable">
                    <tbody>
                      <tr>
                        <td colSpan="1">
                          <span className="content">8.7"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">8.9"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.0"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.2"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.4"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.5"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.7"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.8"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.0"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.2"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.4"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.5"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.7"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.9"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.0"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.2"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.3"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.5"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.7"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.9"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12.0"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12.2"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12.4"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12.7"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13.0"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13.3"</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13.7"</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1">
                          <span className="content">4</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">4.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">5.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">6</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">6.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">7</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">7.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">8</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">8.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">14</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">14.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">15</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">16</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">17</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">18</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">19</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1">
                          <span className="content">5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">5.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">6</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">6.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">7</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">7.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">8</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">8.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">14</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">14.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">15</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">15.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1">
                          <span className="content">3.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">4</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">4.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">5.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">6</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">6.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">7</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">7.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">8</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">8.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">9.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">10.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">11.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">12.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">13.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">14</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">14.5</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">15</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">16</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">17</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">18</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1">
                          <span className="content">36</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">36 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">37 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">38</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">38 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">39 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">40</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">40 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">41 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">42</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">42 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">43 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">44</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">44 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">45 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">46</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">46 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">47 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">48</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">48 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">49 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">50</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">50 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">51 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">52 2/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">53 1/3</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">54 2/3</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1">
                          <span className="content">220</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">225</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">230</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">235</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">240</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">245</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">250</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">255</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">260</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">265</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">270</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">275</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">280</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">285</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">290</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">295</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">300</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">305</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">310</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">315</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">320</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">325</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                        <td colSpan="1">
                          <span className="content">--</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="gl-table-legend">Scroll horizontally to see more.</p>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
