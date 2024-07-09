import bgPhotos from '../assets/verify-cover.jpg'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Enterprenuers = () => {
  const usersInfo = useSelector(state => state.usersData.usersInfo)
  const dispatch = useDispatch()
  


  // const users = [
  //   { 
  //     fullName: 'Kofi Mensah', 
  //     programme: 'Computer Science', 
  //     year: '3', 
  //     product: 'Laptop', 
  //     certified: true 
  //   },
  //   { fullName: 'Esther Smith', programme: 'Computer Engineering', year: '2', product: 'Calculator', certified: false },
  //   { fullName: 'Black Sheriff', programme: 'Business', year: '1', product: 'Textbook', certified: true },
  //   // Add more users as needed
  // ];

  return (
    <div className='min-h-screen'>
        <div className="verify-cover relative text-[#f5f5f5]">
          <img src={bgPhotos} alt="" className='-z-20 absolute top-0 left-0 w-full h-full object-cover object-center brightness-[0.4]'/>
          <div className="flex justify-between items-center p-6 ssm:p-4">
            <div className="text-2xl font-bold flex items-center justify-center">
              <img src={Logo} alt=""className='w-9 h-9 object-cover object-center'/>
              <h1>KNUST</h1>
            </div>
            <ul className="flex justify-between gap-8 font-medium cursor-pointer ssm:hidden">
              <li><NavLink to="/">Home</NavLink></li>
              <li className='font-bold'><NavLink to="/feedback">Feedback</NavLink></li>
                <li><NavLink to="/student-enterprenuers" className='bg-orange-500 rounded-full py-2 px-4'>Student Enterprenuers</NavLink></li>
            </ul>
          </div>
          <div className="relative top-[110px] h-full flex flex-col pb-6 px-8 xxl:top-20 lgg:top-[6rem] ssm:top-[50px] ssm:px-4 sssm:top-[35px] ssssm:top-[15px]">
            <h1 className="uppercase text-5xl xxl:text-4xl font-bold w-[80%] lgg:w-[70%] ssm:w-[100%] ssm:text-3xl sssm:text-3xl ssssm:text-lg">Certified Students Enterpreneurs</h1>
          </div>
        </div>

    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-3xl uppercase font-bold mb-5">Certified Enterprenuers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Full Name</th>
              <th className="py-2 px-4 border-b">Programme</th>
              <th className="py-2 px-4 border-b">Year</th>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Certified</th>
            </tr>
          </thead>
          <tbody>
            {usersInfo.map((user, index) => (
              <tr key={index} className="text-center">
                <td className="py-4 px-4 border-b">{user?.firstName + ' ' + user?.OtherName}</td>
                <td className="py-4 px-4 border-b">{user.programme}</td>
                <td className="py-4 px-4 border-b">{user.year}</td>
                <td className="py-4 px-4 border-b">{user.product}</td>
                <td className="py-4 px-4 border-b">
                  {user.certified ? (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                      Certified
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                      Not Certified
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </div>
  )
}

export default Enterprenuers;