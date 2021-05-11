import React from 'react';
import '../css/cart.css';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='cart-box'>
      <div class='order_summary'>
        <div class='summary_card'>
          <div class='card_item'>
            <div class='product_img'>
              <img src='https://hanamal24.rest.co.il/img/0601/997.jpg' alt='' />
            </div>
            <div class='product_info'>
              <h1>Beef</h1>
              <p>Lorem Ipsum is simply dummy text.</p>
              <div class='close-btn'>
                <i class='fa fa-times'></i>
              </div>
              <div class='product_rate_info'>
                <h1>$ 200</h1>
                <span class='pqt-minus'>-</span>
                <span class='pqt'>1</span>
                <span class='pqt-plus'>+</span>
              </div>
            </div>
          </div>
          <div class='card_item'>
            <div class='product_img'>
              <img src='https://hanamal24.rest.co.il/img/0602/000.jpg' alt='' />
            </div>
            <div class='product_info'>
              <h1>Fish</h1>
              <p>Lorem Ipsum is simply dummy text.</p>
              <div class='close-btn'>
                <i class='fa fa-times'></i>
              </div>
              <div class='product_rate_info'>
                <h1>$ 1606</h1>
                <span class='pqt-minus'>-</span>
                <span class='pqt'>1</span>
                <span class='pqt-plus'>+</span>
              </div>
            </div>
          </div>
          <hr />
          <div class='order_price'>
            <p>Order summary</p>
            <h4>$400</h4>
          </div>
          <div class='order_total'>
            <p>Total Amount</p>
            <h4>$400</h4>{' '}
          </div>
          <Link to='/payment'>
            <button>Procced to payment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
