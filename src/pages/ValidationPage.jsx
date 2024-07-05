import bgPhotos from '../assets/bg-photos-1.jpg'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const ValidationPage = () => {
  return (
    <div className="min-h-full">
        <div className="verify-cover relative text-[#f5f5f5]">
          <img src={bgPhotos} alt="" className='-z-20 absolute top-0 left-0 w-full h-full object-cover object-center brightness-[0.45]'/>
          <div className="flex justify-between items-center p-6">
            <div className="text-2xl font-bold flex items-center justify-center">
              <img src={Logo} alt=""className='w-9 h-9 object-cover object-center'/>
              <h1>KNUST</h1>
            </div>
            <ul className="flex justify-between gap-8 font-medium cursor-pointer">
            <li><NavLink to="/home">Home</NavLink></li>
              <li>About</li>
              <li >Become a student Enterpreuer</li>
            </ul>
          </div>
          <div className="relative top-[110px] h-full flex flex-col pb-6 px-8 xxl:top-20">
            <h1 className="uppercase text-5xl xxl:text-4xl font-bold w-[50%]">Build your profile here and get a unique certified badge</h1>
          </div>
        </div>

        <form className='px-8 flex justify-center items-center'>
            <div className='w-[85%]'>
                <div className='mt-12'>
                    <h1 className='capitalize text-3xl font-semibold'>Please fill all the inputs</h1>
                    <ul className='py-2 flex cursor-pointer'>
                        <li className='py-2 border-b border-inputField-input text-inputField-input font-semibold'>My details</li>
                    </ul>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='capitalize mt-2 text-lg'>Personal info</h1>
                        <p className='mt-2 text-slate-600'>Update your personal details here</p>
                    </div>
                    <div className='flex gap-4'>
                        <button className='px-4 py-1 h-10 text-center border border-slate-500 rounded cursor-pointer'>Cancel</button>
                        <button className='px-4 py-1 h-10 text-center rounded text-[#f5f5f5] bg-inputField-input cursor-pointer' type='submit'>Save</button>
                    </div>
                </div>
                <span className="mt-3 border-b border-slate-500 w-full block"></span>
                <div className='flex mt-6 justify-between w-[70%]'>
                    <h2 className='text-lg'>Name</h2>
                    <div className='flex gap-6'>
                        <input type="text" placeholder='first name' className='px-4 py-2 rounded outline-none' required/>
                        <input type="text" placeholder='Other name' className='px-4 py-2 rounded outline-none' required/>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ValidationPage;