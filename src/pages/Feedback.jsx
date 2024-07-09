import bgPhotos from '../assets/bg-photos-1.jpg'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form data submitted:', formData);
        // Reset form
        setFormData({
          name: '',
          email: '',
          feedback: '',
        });
      };
    
      return (
        <div>
            <div className="verify-cover relative text-[#f5f5f5]">
            <img src={bgPhotos} alt="" className='-z-20 absolute top-0 left-0 w-full h-full object-cover object-center brightness-[0.4]'/>
            <div className="flex justify-between items-center p-6 ssm:p-4">
                <div className="text-2xl font-bold flex items-center justify-center">
                <img src={Logo} alt=""className='w-9 h-9 object-cover object-center'/>
                <h1>KNUST</h1>
                </div>
                <ul className="flex justify-between gap-8 font-medium cursor-pointer ssm:hidden">
                <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/student-enterprenuers" className='bg-orange-500 rounded-full py-2 px-4'>Student Enterprenuers</NavLink></li>
                </ul>
            </div>
            <div className="relative top-[110px] h-full flex flex-col pb-6 px-8 xxl:top-20 lgg:top-[6rem] ssm:top-[50px] ssm:px-4 sssm:top-[35px] ssssm:top-[15px]">
                <h1 className="uppercase text-5xl xxl:text-4xl font-bold w-[50%] lgg:w-[70%] ssm:w-[100%] ssm:text-3xl sssm:text-3xl ssssm:text-lg">Report A Fraudent Ecommerce Transaction on campus</h1>
            </div>
        </div>
            <div className="flex justify-center items-center p-6 bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-[700px]"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>
                <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="feedback"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Feedback
                </label>
                <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                    required
                ></textarea>
                </div>
                <div className="text-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
                </div>
            </form>
            </div>
        </div>
      );
}

export default Feedback;