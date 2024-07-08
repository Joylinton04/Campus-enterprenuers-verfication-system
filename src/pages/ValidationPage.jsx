import bgPhotos from '../assets/verify-cover.jpg'
import verifyImg from '../assets/verifiyImg.png'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToData } from '../redux/credentials';

const ValidationPage = () => {
  const [firstName, setFirstName] = useState('')
  const [OtherName, setOtherName] = useState('')
  const [email, setEmail] = useState('')
  const [studentEmail, setStudentEmail] = useState('')
  const [indexNo, setIndexNo] = useState('')
  const [studentId, setStudentId] = useState('')
  const [programme, setProgramme] = useState('')
  const [year, setYear] = useState('100')
  const [product, setProduct] = useState('')
  const [bio, setBio] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const userInfo = useSelector(state => state.usersData.usersInfo)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsOpen(prev => !prev) 
  }

  const success = () => {
    setTimeout(() => {
      // Toggle loading and modal states
      setIsLoading(prev => !prev)
      setIsOpen(prev => !prev)
      
      // Clear form fields
      setFirstName('')
      setOtherName('')
      setEmail('')
      setStudentEmail('')
      setIndexNo('')
      setStudentId('')
      setProgramme('')
      setYear('')
      setProduct('')
      setBio('')
  
      // Further delay before redirecting
      setTimeout(() => {
        // Redirect to home page
        window.location.pathname = '/student-enterprenuers'
      }, 1000)
    }, 5000)
  };
  

  const handleVerification = () => {
    const id = userInfo.length ? userInfo[(userInfo.length - 1)].id + 1 : 1
    dispatch(addToData({
      id: id,
      firstName: firstName,
      OtherName: OtherName,
      email: email,
      studentEmail: studentEmail,
      indexNo: indexNo,
      programme: programme,
      year: year,
      product: product,
      bio: bio,
    }))
    setIsLoading(prev => !prev)
    success()
  }

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
                <li><NavLink to="/student-enterprenuers" className='bg-orange-500 rounded-full py-2 px-4'>Student Enterprenuers</NavLink></li>
            </ul>
          </div>
          <div className="relative top-[110px] h-full flex flex-col pb-6 px-8 xxl:top-20 lgg:top-[6rem] ssm:top-[50px] ssm:px-4 sssm:top-[35px] ssssm:top-[15px]">
            <h1 className="uppercase text-5xl xxl:text-4xl font-bold w-[50%] lgg:w-[70%] ssm:w-[100%] ssm:text-3xl sssm:text-3xl ssssm:text-lg">Build your profile here and get a unique certified badge</h1>
          </div>
        </div>

        <form className='px-8 flex justify-center items-center py-1 lgg:px-3 mdd:px-0' onSubmit={handleSubmit}>
            <div className='w-[85%] shadow rounded p-6 mdd:w-[95%] sssm:w-full'>
                <div className='mt-12 ssm:mt-6'>
                    <h1 className='capitalize text-3xl font-semibold'>Please fill The Form</h1>
                    <ul className='py-2 flex cursor-pointer'>
                        <li className='py-2 border-b border-input text-input font-semibold'>My details</li>
                    </ul>
                </div>
                <div className='flex justify-between'>
                    <div>class
                        <h1 className='capitalize mt-2 text-lg'>Personal info</h1>
                        <p className='mt-2 text-[#636060e9]'>Update your personal details here</p>
                    </div>
                    <div className='flex gap-4 sssm:hidden'>
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
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            required
                          />
                        <input 
                            type="text" 
                            placeholder='Other name' 
                            className='px-4 py-2 rounded outline-none w-[250px]' 
                            value={OtherName}
                            onChange={e => setOtherName(e.target.value)}
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
                            value={email}
                            className='px-4 py-2 rounded outline-none w-[350px] ssm:max-w-[280px] sssm:max-w-[210px]' 
                            onChange={e => setEmail(e.target.value)}
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
                            value={studentEmail} 
                            onChange={e => setStudentEmail(e.target.value)}
                            className='px-4 py-2 rounded outline-none w-[350px] ssm:max-w-[280px] sssm:max-w-[210px]' 
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
                              placeholder='2072...' 
                              className='px-4 py-2 rounded outline-none w-[260px] sssm:max-w-[210px]' 
                              required
                              value={studentId}
                              onChange={e => setStudentId(e.target.value)}
                            />
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h2 className='text-lg'>Index Number</h2>
                      <div className='flex gap-3 items-center'>
                          <span><Grid3x3Icon className=' text-[#434242c3]'/></span>
                          <input 
                            type="number" 
                            placeholder='73...'
                            value={indexNo} 
                            onChange={e => setIndexNo(e.target.value)}
                            className='px-4 py-2 rounded outline-none w-[260px] sssm:max-w-[210px]' 
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
                              value={programme}
                              placeholder='Bsc. Telecommunication engineering' 
                              className='px-4 py-2 rounded outline-none w-[350px] ssm:max-w-[280px] sssm:max-w-[220px]'
                              onChange={e => setProgramme(e.target.value)}
                              required
                            />
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h2 className='text-lg'>Year</h2>
                      <div className='flex gap-3 items-center'>
                          <span><Grid3x3Icon className=' text-[#434242c3]'/></span>
                          <select 
                            className='px-4 py-2 rounded outline-none w-[250px] sssm:max-w-[210px]' 
                            required
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            >
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
                            value={product}
                            onChange={e => setProduct(e.target.value)}
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
                          value={bio}
                          placeholder='Write about you...' 
                          className='px-4 py-2 rounded outline-none w-[450px] h-[200px] ssm:max-w-[320px] sssm:max-w-[250px]' 
                          onChange={e => setBio(e.target.value)}
                          required
                      />
                  </div>
                </div>
               <div className='mt-4'>
               <button className='px-4 py-1 h-10 text-center rounded text-[#f5f5f5] bg-input cursor-pointer'>Save and Submit
                </button>
               </div>
            </div>
        </form>
        {/* Overlay */}
        {isOpen && 
          <div className='fixed top-0 left-0 z-20 w-full h-full bg-[#21212190]'>
            <div className='flex justify-center items-center h-full w-full px-4 ssm:p-2'>
              <div className='w-[920px] mdd:w-[800px] h-[610px] lgg:h-[550px] bg-white rounded flex shadow ssm:flex-wrap ssm:h-full ssm:p-2 sssm:gap-1'>
                  <div className='w-[55%] bg-input h-full p-4 text-white flex flex-col justify-between items-center ssm:flex-1 ssm:h-1/2'>
                    <h1 className='text-4xl font-semibold capitalize lgg:text-3xl sssm:text-2xl'>Be a Student Enterprenuer now</h1>
                    <div className='w-56 h-60'>
                      <img src={verifyImg} alt="" className='w-full h-full rounded-[50%] object-cover object-center'/>
                    </div>
                  </div>
                  <div className='w-full h-full flex flex-col items-center p-4 justify-center ssm:flex-1 ssm:h-1/2'> 
                      <div className='flex flex-col gap-10 sssm:gap-6'>
                        <div className='flex flex-col gap-6'>
                          <h1 className='text-center text-slate-600 font-semibold text-3xl sssm:text-2xl'></h1>
                          <p className='text-center text-slate-600 sssm:text-sm text-lg'>After clicking on verify, you'll gain a unique certified badge </p>
                        </div>
                        <div className='flex flex-col gap-6 items-center sssm:gap-2'>
                          <button 
                            onClick={() => handleVerification()}
                            className='px-6 py-4 sssm:px-4 sssm:py-2 sssm:w-[220px] mdd:py-3 text-[#f5f5f5] bg-green-500 rounded w-[360px] lgg:w-[300px]'>Verify</button>
                          <button className='px-6 py-4 ssssm:px-4 sssm:py-2 sssm:w-[220px] mdd:py-3 text-[#f5f5f5] bg-red-600 rounded w-[360px] lgg:w-[300px]' onClick={() => setIsOpen(prev => !prev)}>Cancel</button>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        }

        {isLoading && 
          <div className='fixed top-0 left-0 z-20 w-full h-full bg-[#21212190]'>
            <div className='flex justify-center items-center h-full w-full px-4 ssm:p-2'>
              <div className='bg-white w-[200px] h-[200px] p-2 flex justify-center items-center rounded'>
                <div className='flex flex-col items-center gap-6'>
                  <div className="loader"></div>
                  <div>Please Wait...</div>
                </div>
              </div>
            </div>
          </div>
        }


    </div>
  )
}

export default ValidationPage;