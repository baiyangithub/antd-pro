import * as cons from './constants';

// console.log(cons.NAMESPACE)
export default {
  namespace: cons.NAMESPACE,
  state: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
  reducers: {
    delete(state, { payload, callback }) {
      console.log('state:', state)
      console.log('payload:', payload.id)
      callback(state.products.filter(item => item.id !== payload.id))
      return state.products.filter(item => item.id !== payload.id);
    },
  },
};

export * from './selectors';

// export default {
//   namespace: 'products',
//   state: [],
//   reducers: {
//     'delete'(state, { payload: id }) {
//       return state.filter(item => item.id !== id);
//     },
//   },
// };
