import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const equation = `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Login = () => {
  return <div>Hello</div>;
};

export default Login;

// function Login() {
//   return (
//     <div >
//       <div >
//         <h1>heeeeeeeeeeeeee</h1>
//       </div>

//       <div>
//         <h1>heeeeeeeeeeeeee</h1>
//       </div>
//     </div>
//   );
// }
// export default Login;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
// `;

// const Input = styled.input`
//   width: 100%;
//   margin-bottom: 10px;
//   padding: 10px;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   font-size: 18px;
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// const equation = `
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
// `;

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Frontend validation logic
//     const newErrors = {};
//     if (formData.username.trim() === '') {
//       newErrors.username = 'Username is required';
//     }
//     if (formData.password.trim() === '') {
//       newErrors.password = 'Password is required';
//     }
//     setErrors(newErrors);

//     // Submit logic can go here if validation passes
//   };

//   return (
//     <Container>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <Input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//           {errors.username && <div>{errors.username}</div>}
//         </div>
//         <div>
//           <Input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//           {errors.password && <div>{errors.password}</div>}
//         </div>
//         <Button type="submit">Login</Button>
//       </form>
//     </Container>
//   );
// };

// export default Login;

// // function Login() {
// //   return (
// //     <div >
// //       <div >
// //         <h1>heeeeeeeeeeeeee</h1>
// //       </div>

// //       <div>
// //         <h1>heeeeeeeeeeeeee</h1>
// //       </div>
// //     </div>
// //   );
// // }
// // export default Login;
