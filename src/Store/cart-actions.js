import { uiSliceActions } from "./UI-slice";
import { useDispatch } from "react-redux";


export const fetchCartData = () => {
    return async (dispatch) => {
           const fetchData = async() => {
           const response =  await fetch("https://connectdb-1efa3-default-rtdb.europe-west1.firebasedatabase.app/cart.json")
        }
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
                  body: JSON.stringify(cart),
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