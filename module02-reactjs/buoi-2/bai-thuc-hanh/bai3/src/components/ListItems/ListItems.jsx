import { Component } from 'react';
import Item from './Item/Item';

class ListItems extends Component {
  render() {
    return (
      <div className='container'>
        <Item
          img={'https://i.imgur.com/9QtYXwu.jpg'}
          name={'AirPods Pro'}
          price={'249'}
        />
        <Item
          img={'https://i.imgur.com/NjB1B10.jpg'}
          name={'Nintendo Switch '}
          price={'299'}
        />
        <Item
          img={'https://i.imgur.com/0GPFIYa.jpg'}
          name={'PS5'}
          price={'499'}
        />
        <Item
          img={'https://i.imgur.com/B9ePUN9.jpg'}
          name={'Xbox Series X'}
          price={'499'}
        />
        <Item
          img={'https://i.imgur.com/RDL6SnJ.jpg'}
          name={'Iphone 14 Pro Max - 1TB'}
          price={'1,599'}
        />
        <Item
          img={'https://i.imgur.com/KyWHsKW.jpg'}
          name={'Samsung S23 Ultra - 1TB'}
          price={'1,499'}
        />
        <Item
          img={'https://i.imgur.com/diqWGS7.jpg'}
          name={'Pro Gaming PC(I9 13900K, RTX 4090, 64GB, 4TB SSD)'}
          price={'6,950'}
        />
      </div>
    );
  }
}

export default ListItems;
