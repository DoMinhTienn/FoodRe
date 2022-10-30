import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App/>
//   </React.StrictMode>,
//   document.detElementById("root")
// );
// reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root')); //đây là ví trị mà tất cả các component sẽ render ra. Bạn có thể tìm id root ở trong file public/index.html.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// import App from './App';  //Load function App từ App.js
// //import reportWebVitals from './reportWebVitals';
// import mainReducer from"./reducers/RootReducer";
// import *as  createStore from 'redux';
// import { Provider } from 'react-redux';


// const store = createStore(mainReducer)

// ReactDOM.render (
// 	<Provider store={store}>
// 		<App/>
// 	</Provider>,
// 	document.getElementById("root")
// );

// // const root = ReactDOM.createRoot(document.getElementById('root')); //đây là ví trị mà tất cả các component sẽ render ra. Bạn có thể tìm id root ở trong file public/index.html.
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// ///src/index.js đóng vai trò như một Route điều hướng, liên kết các file.