// import bgPhotos from '../assets/bg-photos-1.jpg'
import bgPhotos from '../assets/verify-cover.jpg'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from 'react';

const ValidationPage = () => {
  const [studentId, setStudentId] = useState('')

  return (
    <div className="min-h-full">
        <div className="verify-cover relative text-[#f5f5f5]">
          <img src={bgPhotos} alt="" className='-z-20 absolute top-0 left-0 w-full h-full object-cover object-center brightness-[0.4]'/>
          <div className="flex justify-between items-center p-6 ssm:p-4">
            <div className="text-2xl font-bold flex items-center justify-center">
              <img src={Logo} alt=""className='w-9 h-9 object-cover object-center'/>
              <h1>KNUST</h1>
            </div>
            <ul className="flex justify-between gap-8 font-medium cursor-pointer ssm:hidden">
              <li><NavLink to="/home">Home</NavLink></li>
                <li>About</li>
                <li >Become a student Enterpreuer</li>
            </ul>
          </div>
          <div className="relative top-[110px] h-full flex flex-col pb-6 px-8 xxl:top-20 lgg:top-[6rem] ssm:px-4">
            <h1 className="uppercase text-5xl xxl:text-4xl font-bold w-[50%] lgg:w-[70%] ssm:w-[100%] ssm:text-3xl">Build your profile here and get a unique certified badge</h1>
          </div>
        </div>

        <form className='px-8 flex justify-center items-center py-1 lgg:px-3 mdd:px-0'>
            <div className='w-[85%] shadow rounded p-6 mdd:w-[95%]'>
                <div className='mt-12 ssm:mt-6'>
                    <h1 className='capitalize text-3xl font-semibold'>Please fill all the inputs</h1>
                    <ul className='py-2 flex cursor-pointer'>
                        <li className='py-2 border-b border-input text-input font-semibold'>My details</li>
                    </ul>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='capitalize mt-2 text-lg'>Personal info</h1>
                        <p className='mt-2 text-[#636060e9]'>Update your personal details here</p>
                    </div>
                    <div className='flex gap-4'>
                        <button className='px-4 py-1 h-10 text-center border border-[#cbc7c7c1] rounded cursor-pointer'>Cancel</button>
                        <button className='px-4 py-1 h-10 text-center rounded text-[#f5f5f5] bg-input cursor-pointer'>Save</button>
                    </div>
                </div>
                <span className="mt-3 border-b border-[#cbc7c7c1] w-full block"></span>
                <div className='flex mt-6 justify-between w-[80%] py-6 lgg:flex-wrap lgg:w-full'>
                    <h2 className='text-lg ssm:mb-6'>Name</h2>
                    <div className='flex gap-6 ssm:flex-wrap'>
                        <input 
                            type="text" 
                            placeholder='first name' 
                            className='px-4 py-2 rounded outline-none w-[250px]' 
                            required
                          />
                        <input 
                            type="text" 
                            placeholder='Other name' 
                            className='px-4 py-2 rounded outline-none w-[250px]' 
                            required
                          />
                    </div>
                </div>
                <span className="mt-3 border-b border-[#cbc7c7c1] w-full block"></span>
                <div className='flex mt-6 justify-between w-[80%] py-6 lgg:flex-wrap lgg:w-full'>
                    <h2 className='text-lg ssm:mb-6'>Email Address</h2>
                    <div className='flex gap-3 items-center'>
                        <span><EmailIcon className=' text-[#434242c3]'/></span>
                        <input 
                            type="email"
                            placeholder='example005@gmail.com' 
                            className='px-4 py-2 rounded outline-none w-[350px] ssm:max-w-[280px]' 
                            required
                        />
                    </div>
                </div>
                <span className="mt-3 border-b border-[#cbc7c7c1] w-full block"></span>
                <div className='flex mt-6 justify-between w-[80%] py-6 lgg:flex-wrap lgg:w-full'>
                    <h2 className='text-lg ssm:mb-6'>Student Mail</h2>
                    <div className='flex gap-3 items-center'>
                        <span><EmailIcon className=' text-[#434242c3]'/></span>
                        <input 
                            type="email" 
                            placeholder='example005@st.knust.edu.gh' 
                            className='px-4 py-2 rounded outline-none w-[350px] ssm:max-w-[280px]' 
                        required/>
                    </div>
                </div>
                <span className="mt-3 border-b border-[#cbc7c7c1] w-full block"></span>
                <div className='flex mt-6 justify-between w-[80%] py-4 lgg:flex-wrap lgg:w-full items-center ssm:gap-8'>
                    <div className='flex flex-col gap-6'>
                      <h2 className='text-lg'>Student Id</h2>
                      <div className='flex gap-3 items-center'>
                          <span><Grid3x3Icon className=' text-[#434242c3]'/></span>
                          <input 
                              type="number" 
                              placeholder='73...' 
                              className='px-4 py-2 rounded outline-none min-w-[260px]' 
                              required
                              value={studentId}
                              onChange={e => setStudentId(e.target.value)}
                            />
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h2 className='text-lg'>Reference Number</h2>
                      <div className='flex gap-3 items-center'>
                          <span><Grid3x3Icon className=' text-[#434242c3]'/></span>
                          <input 
                            type="number" 
                            placeholder='2097...' 
                            className='px-4 py-2 rounded outline-none min-w-[260px]' 
                            required
                          />
                      </div>
                    </div>
                </div>
                <span className="mt-3 border-b border-[#cbc7c7c1] w-full block"></span>
                <div className='flex mt-6 justify-between w-[80%] py-4 lgg:flex-wrap lgg:w-full items-center ssm:gap-8'>
                    <div className='flex flex-col gap-6'>
                      <h2 className='text-lg'>Programme</h2>
                      <div className='flex gap-3 items-center'>
                          <span><SchoolIcon className=' text-[#434242c3]'/></span>
                          <input 
                              type="text" 
                              placeholder='Bsc. Telecommunication engineering' 
                              className='px-4 py-2 rounded outline-none w-[350px] ssm:max-w-[280px]'
                              required
                            />
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h2 className='text-lg'>Year</h2>
                      <div className='flex gap-3 items-center'>
                          <span><Grid3x3Icon className=' text-[#434242c3]'/></span>
                          <select 
                            className='px-4 py-2 rounded outline-none w-[250px]' 
                            required>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                          </select>
                      </div>
                    </div>
                </div>
                <span className="mt-3 border-b border-[#cbc7c7c1] w-full block"></span>
                <div className='flex mt-6 justify-between w-[80%] py-6 lgg:flex-wrap lgg:w-full ssm:gap-6'>
                    <h2 className='text-lg'>Products Sold on campus</h2>
                    <div className='flex gap-6'>
                        <input
                            type="text" 
                            placeholder='Baggy Jeans' 
                            className='px-4 py-2 rounded outline-none w-[250px]' 
                            required
                          />
                    </div>
                </div>
                <span className="mt-3 border-b border-[#cbc7c7c1] w-full block"></span>
                <div className='flex flex-col gap-10 mt-6 justify-between w-[80%] py-4 lgg:flex-wrap lgg:w-full'>
                    <h2 className='text-2xl font-semibold'>About</h2>
                    <div className='flex gap-6'>
                      <textarea
                          placeholder='Write about you...' 
                          className='px-4 py-2 rounded outline-none w-[450px] h-[200px] ssm:max-w-[320px]' 
                          required
                      />
                  </div>
                </div>
               <div className='mt-4'>
                <button type="submit" className='px-4 py-1 h-10 text-center rounded text-[#f5f5f5] bg-input cursor-pointer'>Save and Submit</button>
               </div>
            </div>
        </form>
    </div>
  )
}

export default ValidationPage;