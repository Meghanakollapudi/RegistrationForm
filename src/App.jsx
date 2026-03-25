import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    department: '',
    registrationNumber: '',
    section: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.department.trim()) {
      newErrors.department = 'Department is required';
    }
    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'Registration number is required';
    }
    if (!formData.section.trim()) {
      newErrors.section = 'Section is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage('Registration successful! Welcome aboard! 🎉');
      setFormData({
        firstName: '',
        lastName: '',
        department: '',
        registrationNumber: '',
        section: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      });
      setErrors({});
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  };

  return (
    <div className="registration-card">
      <div className="card-header">
        <h2>Create an Account</h2>
        <p>Join us today! Please fill in your details.</p>
      </div>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="input-grid">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="input-grid">
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              placeholder="e.g., Computer Science"
              value={formData.department}
              onChange={handleChange}
            />
            {errors.department && <span className="error">{errors.department}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="registrationNumber">Registration Number</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="e.g., REG123456"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
            {errors.registrationNumber && <span className="error">{errors.registrationNumber}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="section">Section</label>
          <input
            type="text"
            id="section"
            name="section"
            placeholder="e.g., A"
            value={formData.section}
            onChange={handleChange}
          />
          {errors.section && <span className="error">{errors.section}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repeat your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <div className="form-checkbox">
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <span>I agree to the Terms & Conditions</span>
          </label>
          {errors.agreeTerms && <span className="error">{errors.agreeTerms}</span>}
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>

      <div className="form-footer">
        <p>Already have an account? <a href="#login">Sign In</a></p>
      </div>
    </div>
  );
}

export default RegistrationForm;