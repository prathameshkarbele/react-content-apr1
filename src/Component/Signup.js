// import React, { useState } from 'react';

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     name: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [formErrors, setFormErrors] = useState([]);
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validate form fields
//     const errors = [];
//     if (!formData.email) {
//       errors.push('Email is required.');
//     }
//     if (!formData.name) {
//       errors.push('Name is required.');
//     }
//     if (!formData.password) {
//       errors.push('Password is required.');
//     }
//     if (formData.password !== formData.confirmPassword) {
//       errors.push('Passwords do not match.');
//     }
//     if (!formData.confirmPassword) {
//       errors.push('Confirm password is required.');
//     }

//     if (errors.length > 0) {
//       // Set form errors and prevent submission
//       setFormErrors(errors);
//       setFormSubmitted(false);
//     } else {
//       // Submit form
//       console.log(formData);
//       setFormErrors([]);
//       setFormSubmitted(true);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           {/* <label htmlFor="name">Name:</label> */}
//           <input className='l1'
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           {/* <label htmlFor="email">Email:</label> */}
//           <input className='l1'
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           {/* <label htmlFor="password">Password:</label> */}
//           <input className='l1'
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             minLength={6}
//             required
//           />
//         </div>
//         <div>
//           {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
//           <input className='l1'
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="Confirm your password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             minLength={6}
//             required
//           />
//           {formErrors.includes('Passwords do not match.') && (
//             <div style={{ color: 'red' }}>{formErrors[formErrors.indexOf('')]}</div>
//           )}
//           {!formErrors.includes('Passwords do not match.') && formErrors.includes('Confirm password is required.') && (
//             <div style={{ color: 'red' }}>{formErrors[formErrors.indexOf('Confirm password is required.')]}</div>
//           )}
//         </div>
//       {formErrors.length > 0 && !formSubmitted && (
//         <div style={{ color: 'red' }}>
//           <ul>
//             {formErrors.map((error) => (
//               <h3 className='p1' key={error}>Password mismatch</h3>
//             ))}
//           </ul>
//         </div>
//       )}
//       {formSubmitted && (
//         <div className='p1' style={{ color: 'green' }}>
//         <h3>
//          Successfully Signed up !
//         </h3>
//         </div>
//       )}
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//       );
// };

// export default SignupForm;

import React, { useState } from 'react';

const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState([]);
  const [formTouched, setFormTouched] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormTouched(true);
    const errors = [];
    if (!formValues.name || !formValues.email || !formValues.password || !formValues.confirmPassword) {
      errors.push('All fields are required');
    }
    if (formValues.password !== formValues.confirmPassword) {
      errors.push('Passwords do not match');
    }
    setFormErrors(errors);
    if (errors.length === 0) {
      setFormSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="name">Name</label> */}
          <input className='l1' type="text" id="name" name="name" placeholder='Full Name' value={formValues.name} onChange={handleInputChange} />
        </div>
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input className='l1' type="email" id="email" name="email" placeholder='Email' value={formValues.email} onChange={handleInputChange} />
        </div>
        <div>
          {/* <label htmlFor="password">Password</label> */}
          <input className='l1' type="password" id="password" name="password"  placeholder='Password'  minLength={6} value={formValues.password} onChange={handleInputChange} />
        </div>
        <div>
          {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
          <input  className='l1' type="password" id="confirmPassword" name="confirmPassword"  minLength={6} placeholder='ConfirmPassword'value={formValues.confirmPassword} onChange={handleInputChange} />
        </div>
      {formTouched && formErrors.length > 0 && (
        <div style={{ color: 'red' }}>{formErrors.map((error) => <div className='p1' key={error}><h3>{error}</h3></div>)}</div>
      )}
      {formSubmitted && formTouched && formErrors.length === 0 && (
        <div className='p1' style={{ color: 'green' }}>
            <h3>Successfully Signed up !</h3>
        </div>
      )}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignupForm;