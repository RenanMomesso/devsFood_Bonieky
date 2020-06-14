const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

export default (state = initialState, action) => {
  let products = [...state.products];
  switch (action.type) {
    case "ADD_PRODUCT":
      let id = action.payload.data.id;
      let index = products.findIndex((item) => item.id === id);
      if (index > -1) {
        products[index].Qt += action.payload.Qt;
      } else {
        products.push({
          ...action.payload.data,
          Qt: action.payload.Qt,
        });
      }
      console.log(products);
      return { ...state, products };
      break;
    case "CHANGE_PRODUCT":
      if (products[action.payload.key]) {
        switch (action.payload.type) {
          case "-":
            products[action.payload.key].Qt--;
            if (products[action.payload.key].Qt <= 0) {
                products = products.filter((item,index)=>index != action.payload.key)
            }

            break;
          case "+":
            products[action.payload.key].Qt++;
            break;
        }
      }
      return { ...state, products };
      break;
  }
  return state;
};
