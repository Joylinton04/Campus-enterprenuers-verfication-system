import bgPhotos from '../assets/bg-photos-1.jpg'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Home = () => {

  return (
    <div className="min-h-screen w-full">
      <div className="relative">
      {/*  */}
        <div className="home-screen relative text-[#f5f5f5]">
          <img src={bgPhotos} alt="" className='-z-20 absolute top-0 left-0 w-full h-full object-cover object-center brightness-[0.45]'/>
          <div className="flex justify-between items-center p-6 ssssm:p-2">
            <div className="text-2xl font-bold flex items-center justify-center">
              <img src={Logo} alt=""className='w-9 h-9 object-cover object-center'/>
              <h1>KNUST</h1>
            </div>
            <ul className="flex justify-between items-center gap-8 font-medium cursor-pointer ssm:hidden">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/student-enterprenuers" className='bg-orange-500 rounded-full py-2 px-4'>Student Enterprenuers</NavLink></li>
            </ul>
          </div>
          <div className="relative top-[150px] h-full flex flex-col pb-6 px-8 xxl:top-20 ssm:top-[38px] sssm:top-[15px] ssm:px-4 ssssm:top-[20px]">
            <h1 className="uppercase text-5xl xxl:text-4xl font-bold w-[50%] mdd:w-[85%] ssm:w-full ssm:text-3xl sssm:text-2xl ssssm:text-lg">We ensure e-commerce safety and Fraud Prevention among Students on campus</h1>
            <div className="w-[70%] mt-2 mdd:w-[95%] ssm:text-sm text-slate-[#f5f5f5] sssm:text-xs">This system helps students access information and verifies the legitimacy of student entrepreneurs to prevent fraud and ensure a safe campus environment</div>
            <NavLink to="/verify"><button className="p-4 xxl:p-3 bg-orange-600 text-white font-semibold uppercase w-[200px] text-center mt-6 rounded mdd:w-[158px] sssm:w-[100px] sssm:text-xs sssm:whitespace-nowrap">Get Started</button></NavLink>
          </div>
        </div>

        <div className='flex gap-12 justify-center relative -top-12 mdd:flex-wrap'>
            <div className='flex flex-col max-w-[400px] shadow-sm'>
              <div className='text-white font-semibold text-center p-3 bg-[#f0f8ff2c]'>No.1 of universities</div>
              <div className='text-slate-600 relative p-2 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt assumenda aspernatur possimus cum? Eum tempora natus nobis quia odio reiciendis, autem facere nesciunt! Accusantium aliquid atque velit molestias eveniet?</div>
            </div>
            <div className='flex flex-col max-w-[400px] shadow-sm'>
              <div className='text-white font-semibold text-center p-3 bg-[#f0f8ff2c] bg-slate-500'>No.1 of universities</div>
              <div className='text-slate-600 relative p-2 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt assumenda aspernatur possimus cum? Eum tempora natus nobis quia odio reiciendis, autem facere nesciunt! Accusantium aliquid atque velit molestias eveniet?</div>
            </div>
        </div>

        <div className='flex justify-center gap-32 px-6 py-4 relative top-[90px] xxl:gap-6 mdd:flex-wrap'>
              <div className='uppercase text-4xl font-semibold xxl:w-[30%] lgg:w-full mdd:text-center'><span className='border-b-2 border-orange-600 lgg:border-none'>Your security</span> is our priority</div>
              <div className='max-w-[600px] text-slate-600 leading-loose mdd:text-center'>
              We are committed to providing a safe and secure e-commerce experience on campus. Our system ensures the legitimacy of student entrepreneurs and prevents fraud, fostering a trustworthy environment for all students. By verifying the identity and authenticity of sellers, we protect buyers from scams and fraudulent activities. {/* Our robust security measures and constant monitoring create a reliable platform where you can shop and sell with confidence. */}
              </div>
        </div>
        <div className='flex  relative top-[120px] px-6 py-4 justify-center gap-32 xxl:gap-6 mdd:flex-wrap'>
            <div className='uppercase text-4xl font-semibold p-6 text-center'><span className='border-b-2 border-orange-600 border-none'>How</span> the system works</div>
            <div className='text-slate-600 px-6 max-w-[600px] leading-loose mdd:text-center'>To become recognized entrepreneurs on campus, students must go through a detailed registration process. This involves submitting their personal information, such as full name, student ID, academic program, and contact details, as well as any relevant business credentials or certifications. The system then verifies these credentials against the university's records to confirm their legitimacy.Once registered and verified, these student entrepreneurs are issued a unique certification badge that is displayed on their profile. Buyers can easily check this badge to ensure they are dealing with a verified seller. </div>
        </div>

        <div className='relative top-[125px] px-6 py-4 shadow-md'>
            <div>
              <h1 className="text-3xl text-center font-semibold"><span className='border-b border-input'>Students</span> Fraud experiences on Campus</h1>
            </div>
            <div className='flex justify-center gap-8 mt-12 lgg:flex-wrap'>
              <div className='max-w-[420px] flex flex-col items-center gap-4'>
                  <div className='w-16 h-16 rounded-[50%] bg-slate-400'></div>
                  <h1 className='text-center text-lg font-semibold'>Anonymous</h1>
                  <p className='text-slate-600 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et culpa maxime voluptatibus, deleniti itaque officiis similique fuga dolore id eius eum. Quod, saepe eligendi velit eaque quidem ab maxime!</p>
              </div>
              <div className='max-w-[420px] flex flex-col items-center gap-4'>
                  <div className='w-16 h-16 rounded-[50%] bg-slate-400'></div>
                  <h1 className='text-center text-lg font-semibold'>Anonymous</h1>
                  <p className='text-slate-600 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et culpa maxime voluptatibus, deleniti itaque officiis similique fuga dolore id eius eum. Quod, saepe eligendi velit eaque quidem ab maxime!</p>
              </div>
              <div className='max-w-[420px] flex flex-col items-center gap-4'>
                  <div className='w-16 h-16 rounded-[50%] bg-slate-400'></div>
                  <h1 className='text-center text-lg font-semibold'>Anonymous</h1>
                  <p className='text-slate-600 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et culpa maxime voluptatibus, deleniti itaque officiis similique fuga dolore id eius eum. Quod, saepe eligendi velit eaque quidem ab maxime!</p>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Home;