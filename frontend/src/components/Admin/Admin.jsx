import React, { useState } from 'react';
import Header from "../Header/Header"

function Admin() {
  const BASE_URL = 'http://your-backend-url.com'; // Replace with your backend URL
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);

  const CourseForm = ({ closeForm }) => {
    const [formState, setFormState] = useState({
      courseName: '',
      courseId: '',
      professorName: '',
      professorId: '',
      courseImage: null, // New state for course image
    });

    const handleInputChange = (event, field) => {
      setFormState({ ...formState, [field]: event.target.value });
    };

    const handleImageChange = (event) => {
      const imageFile = event.target.files[0];
      setFormState({ ...formState, courseImage: imageFile });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append('courseName', formState.courseName);
        formData.append('courseId', formState.courseId);
        formData.append('professorName', formState.professorName);
        formData.append('professorId', formState.professorId);
        if (formState.courseImage) {
          formData.append('courseImage', formState.courseImage);
        }

        const response = await fetch(`${BASE_URL}/courses`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to create class');
        }
        console.log('Form submitted:', formState);
        alert('Class created successfully!');
        closeForm();
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to create class');
      }
    };

    return (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-gray-700 bg-opacity-50 w-full h-full flex justify-center items-center">
          <div className="relative bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full m-4">
            <button onClick={closeForm} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Enter Course Details</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Course Name</label>
                <input
                  type="text"
                  value={formState.courseName}
                  onChange={(e) => handleInputChange(e, 'courseName')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Add input field for image upload */}
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Course Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Course ID</label>
                <input
                  type="text"
                  value={formState.courseId}
                  onChange={(e) => handleInputChange(e, 'courseId')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Professor Name</label>
                <input
                  type="text"
                  value={formState.professorName}
                  onChange={(e) => handleInputChange(e, 'professorName')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Professor ID</label>
                <input
                  type="text"
                  value={formState.professorId}
                  onChange={(e) => handleInputChange(e, 'professorId')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end mt-6">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const AdminForm = ({ closeForm }) => {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (event, field) => {
      setFormState({ ...formState, [field]: event.target.value });
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    
      // Check if all fields are filled
      if (!formState.name || !formState.email || !formState.password || !formState.confirmPassword) {
        alert('All fields are required.');
        return;
      }
    
      // Check if passwords match
      if (formState.password !== formState.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
    
      // Check if password meets complexity requirements
      if (formState.password.length < 8 || !passwordRegex.test(formState.password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one symbol, and one number.');
        return;
      }
    
      // If all validations pass, proceed with form submission
      try {
        const response = await fetch(`${BASE_URL}/admins`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
        if (!response.ok) {
          throw new Error('Failed to add admin');
        }
        console.log('Admin submitted:', formState);
        alert('New admin added successfully!');
        closeForm();
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to add admin');
      }
    };
    

    return (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-gray-700 bg-opacity-50 w-full h-full flex justify-center items-center">
          <div className="relative bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full m-4">
            <button onClick={closeForm} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Add New Admin</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => handleInputChange(e, 'name')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="relative">
                <label className="text-sm font-medium text-gray-600 block mb-2">Password</label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formState.password}
                    onChange={(e) => handleInputChange(e, 'password')}
                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button type="button" onClick={togglePasswordVisibility} className="ml-2 flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                      {showPassword ? (
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
                      ) : (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10 a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
              <div className="relative">
                <label className="text-sm font-medium text-gray-600 block mb-2">Confirm Password</label>
                <div className="flex items-center">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formState.confirmPassword}
                    onChange={(e) => handleInputChange(e, 'confirmPassword')}
                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button type="button" onClick={toggleConfirmPasswordVisibility} className="ml-2 flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                      {showConfirmPassword ? (
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
                      ) : (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10 a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1">
                  Add Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const DeleteForm = ({ closeForm }) => {
    const [formState, setFormState] = useState({
      courseId: ''
    });

    const handleInputChange = (event) => {
      setFormState({ ...formState, courseId: event.target.value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`${BASE_URL}/courses/${formState.courseId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete class');
        }
        console.log('Form submitted:', formState);
        alert('Class deleted successfully!');
        closeForm();
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to delete class');
      }
    };

    return (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-gray-700 bg-opacity-50 w-full h-full flex justify-center items-center">
          <div className="relative bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full m-4">
            <button onClick={closeForm} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Delete Class</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Course ID</label>
                <input
                  type="text"
                  value={formState.courseId}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end mt-6">
                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1">
                  Delete Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const [showEditForm, setShowEditForm] = useState(false);
  
  const EditForm = ({ closeForm }) => {
    const [formState, setFormState] = useState({
      courseName: '',
      courseId: '',
      professorName: '',
      professorId: '',
      courseImage: null, // New state for course image
    });

    const handleInputChange = (event, field) => {
      setFormState({ ...formState, [field]: event.target.value });
    };

    const handleImageChange = (event) => {
      const imageFile = event.target.files[0];
      setFormState({ ...formState, courseImage: imageFile });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append('courseName', formState.courseName);
        formData.append('courseId', formState.courseId);
        formData.append('professorName', formState.professorName);
        formData.append('professorId', formState.professorId);
        if (formState.courseImage) {
          formData.append('courseImage', formState.courseImage);
        }

        const response = await fetch(`${BASE_URL}/courses/${formState.courseId}`, {
          method: 'PUT',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to edit class');
        }
        console.log('Form submitted:', formState);
        alert('Class edited successfully!');
        closeForm();
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to edit class');
      }
    };

    return (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-gray-700 bg-opacity-50 w-full h-full flex justify-center items-center">
          <div className="relative bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full m-4">
            <button onClick={closeForm} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Edit Class Details</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Course Name</label>
                <input
                  type="text"
                  value={formState.courseName}
                  onChange={(e) => handleInputChange(e, 'courseName')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Add input field for image upload */}
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Course Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Course ID</label>
                <input
                  type="text"
                  value={formState.courseId}
                  onChange={(e) => handleInputChange(e, 'courseId')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Professor Name</label>
                <input
                  type="text"
                  value={formState.professorName}
                  onChange={(e) => handleInputChange(e, 'professorName')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Professor ID</label>
                <input
                  type="text"
                  value={formState.professorId}
                  onChange={(e) => handleInputChange(e, 'professorId')}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end mt-6">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1">
                  Edit Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header/>
    <div className="flex flex-wrap items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gray-100 p-4">
      <button
        className="text-white font-semibold py-3 px-6 rounded-lg bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 ease-out transform hover:scale-105 w-full sm:w-auto"
        onClick={() => setShowCourseForm(true)}
      >
        Create New Class
      </button>
      <button
        className="text-white font-semibold py-3 px-6 rounded-lg bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 ease-out transform hover:scale-105 w-full sm:w-auto"
        onClick={() => setShowEditForm(true)}
      >
        Edit Class
      </button>
      <button
        className="text-white font-semibold py-3 px-6 rounded-lg bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 ease-out transform hover:scale-105 w-full sm:w-auto"
        onClick={() => setShowDeleteForm(true)}
      >
        Delete Class
      </button>
      <button
        className="text-white font-semibold py-3 px-6 rounded-lg bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 ease-out transform hover:scale-105 w-full sm:w-auto"
        onClick={() => setShowAdminForm(true)}
      >
        Add New Admin
      </button>
      {showCourseForm && <CourseForm closeForm={() => setShowCourseForm(false)} />}
      {showEditForm && <EditForm closeForm={() => setShowEditForm(false)} />}
      {showAdminForm && <AdminForm closeForm={() => setShowAdminForm(false)} />}
      {showDeleteForm && <DeleteForm closeForm={() => setShowDeleteForm(false)} />}
    </div>
    </div>
  );
}

export default Admin;

