import React, { Component } from "react";
import Collection from "../../components/collection/Collection";
import SHOP_DATA from "./collection";

class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    return (
      <div className="shop">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <Collection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
