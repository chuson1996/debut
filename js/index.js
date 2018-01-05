import React from 'react';
import { render } from 'react-dom';
// import OutOfStockModal from './OutOfStockModal/OutOfStockModal';
import SizeChartModal from './SizeChartModal/SizeChartModal';

function getProps(dom) {
  const props = {};
  dom.querySelectorAll('input[type="hidden"]').forEach((dom) => {
    props[dom.name] = dom.value;
  });
  return props;
}

function getChildrenHTML(dom) {
  return dom.querySelector('.d-none.hidden-children').innerHTML;
}

const sizeChartModalDom = document.querySelector('#sizeChartModal');

if (sizeChartModalDom) {
  console.log(sizeChartModalDom);
  render(
    <SizeChartModal/>,
    sizeChartModalDom
  );
}

// const preorderSubmitCheckoutDom = document
//   .querySelector('#preorder-submit-checkout');

// if (preorderSubmitCheckoutDom) {
//   render(
//     <OutOfStockModal
//       {...getProps(preorderSubmitCheckoutDom)}
//       childrenHTML={getChildrenHTML(preorderSubmitCheckoutDom)}
//     />,
//     preorderSubmitCheckoutDom)
// }
