import React from 'react';
// import { toast } from "react-toastify";
import ReactDOM from 'react-dom';
// import '@assets/css/index.css';
// import '@assets/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// import { configureStore } from './config/StoreConfig';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';



// const store = configureStore()
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      retry: 3,
    }
  }
})
 
ReactDOM.render(
  
  <React.StrictMode>
   {/* <Provider store={store}> */}
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
          <ToastContainer 
            closeButton={true}  
            position= {"top-center"}
            autoClose= {2000}
            hideProgressBar= {false}
            closeOnClick= {true}
            pauseOnHover= {true}
            draggable= {true}
            progress={ undefined}
          />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  {/* </Provider> */}
</React.StrictMode>
 ,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
