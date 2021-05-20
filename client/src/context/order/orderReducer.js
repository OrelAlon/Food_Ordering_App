import * as TYPES from '../types';

const savedOrder = (orders) => {
  const userData = localStorage.getItem('token');
  const user = JSON.parse(userData);
  const userOrders = { userId: user.id, orders };
  localStorage.setItem('userOrders-' + user.id, JSON.stringify(userOrders));
};
export const loadOrder = () => {
  const userData = localStorage.getItem('token');
  const user = JSON.parse(userData);
  let rowOrder;
  if (user) {
    rowOrder = localStorage.getItem('userOrders-' + user.id);
  }
  let correntOrder = { userId: '', orders: [] };
  if (rowOrder) {
    correntOrder = JSON.parse(rowOrder);
  }
  return correntOrder.orders;
};

export default (state, action) => {
  switch (action.type) {
    case TYPES.ADD_ORDER:
      let findOrderIndex = state.orders.findIndex(
        (item) => item.dish.id === action.payload.dish.id
      );
      if (findOrderIndex > -1) {
        state.orders[findOrderIndex].mealCount += action.payload.mealCount;
      } else {
        state.orders.push(action.payload);
      }
      savedOrder(state.orders);
      return {
        ...state,
        orders: [...state.orders],
        loading: false,
      };
    case TYPES.DELETE_ORDER:
      const ordersAFTERdELELE = state.orders.filter(
        (order) => order.dish.id !== action.payload
      );

      savedOrder(ordersAFTERdELELE);

      return {
        ...state,
        orders: ordersAFTERdELELE,
        loading: false,
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        orders: loadOrder(),
        loading: false,
      };
    // case DELETE_CONTACT:
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(
    //       (contact) => contact._id !== action.payload
    //     ),
    //     loading: false,
    //   };
    // case CLEAR_CONTACTS:
    //   return {
    //     ...state,
    //     contacts: null,
    //     filtered: null,
    //     error: null,
    //     current: null,
    //   };
    // case SET_CURRENT:
    //   return {
    //     ...state,
    //     current: action.payload,
    //   };
    // case CLEAR_CURRENT:
    //   return {
    //     ...state,
    //     current: null,
    //   };
    // case FILTER_CONTACTS:
    //   return {
    //     ...state,
    //     filtered: state.contacts.filter((contact) => {
    //       const regex = new RegExp(`${action.payload}`, 'gi');
    //       return contact.name.match(regex) || contact.email.match(regex);
    //     }),
    //   };
    // case CLEAR_FILTER:
    //   return {
    //     ...state,
    //     filtered: null,
    //   };
    // case CONTACT_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};
