import React from 'react';
import { render } from 'react-dom';
import OutOfStockModal from './OutOfStockModal/OutOfStockModal';

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

const preorderSubmitCheckoutDom = document.querySelector('#preorder-submit-checkout');
if (preorderSubmitCheckoutDom) {
  render(
    <OutOfStockModal
      {...getProps(preorderSubmitCheckoutDom)}
      childrenHTML={getChildrenHTML(preorderSubmitCheckoutDom)}
    />,
    preorderSubmitCheckoutDom)
}
