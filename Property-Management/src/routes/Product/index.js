import React, { Component } from 'react';
import { connect } from 'dva';
import productModel, { getState } from '../../models/productList';
import ProductList from '../../components/ProductList/index';

const NAMESPACE = productModel.namespace;
console.log(NAMESPACE)
const mapStateToProps = (state) => ({
  ...getState(state)
})
const mapDispatchToProps = (dispatch) => ({
  dispatch
});
@connect(mapStateToProps, mapDispatchToProps)

class Products extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
      ],
    };
  }
  componentDidMount() {
    console.log('productList:', this.state.products)
    console.log(this)
  }
  handleDelete(id) {
    console.log(id)
    this.props.dispatch({
      type: `${NAMESPACE}/delete`,
      payload: {
        id: id
      },
      callback: (data) => {
        console.log(data)
        this.setState({ products: data })
      }
    });
  }
  render() {
    return (
      <div>
        <h2>List of Products</h2>
        {
          this.state.products && 
          <ProductList onDelete={(id) => {this.handleDelete(id)}} products={this.state.products} />
        }
     </div>
    )
  }
}
export default Products;

// const Products = ({ dispatch, products }) => {
//   console.log(dispatch)
//   function handleDelete(id) {
//     dispatch({
//       type: 'products/delete',
//       payload: id,
//     });
//   }
//   return (
//     <div>
//       <h2>List of Products</h2>
//       <ProductList onDelete={handleDelete} products={products} />
//     </div>
//   );
// };

// export default connect(({ products }) => ({
//   products,
// }))(Products);