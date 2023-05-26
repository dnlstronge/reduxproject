import { uiSliceActions } from "./UI-slice";
import { useDispatch } from "react-redux";
import { cartActions } from "./cart-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
           const fetchData = async() => {
           const response =  await fetch("https://connectdb-1efa3-default-rtdb.europe-west1.firebasedatabase.app/cart.json")
           if(!response.ok) {
            throw new Error("unable to fetch cart data")
           }
           const data = await response.json()
           return data;
        }
        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart(cartData))
        } catch (error) {
            dispatch(
                uiSliceActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Sending cart data failed!',
                })
              );
        }
        //
     }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiSliceActions.showNotification({
              status: 'pending',
              title: 'Sending...',
              message: 'Sending cart data!',
            })
          );
          const sendRequest = async() => {
            const response = await fetch(
                'https://connectdb-1efa3-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                {
                  method: 'PUT',
                  body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
                }
              );
        
              if (!response.ok) {
                throw new Error('Sending cart data failed.');
              }
          };
          
          try {
            await sendRequest()
            dispatch(
                uiSliceActions.showNotification({
                  status: 'success',
                  title: 'Success!',
                  message: 'Sent cart data successfully!',
                })
              );
          } catch (error) {
            dispatch(
                uiSliceActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Sending cart data failed!',
                })
              );
          }
    }  
}