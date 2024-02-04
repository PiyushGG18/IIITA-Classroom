import React from 'react';
// import Single from '../assets/single.png'
// import Double from '../assets/double.png'
// import Triple from '../assets/triple.png'

const data = [
    {
        course_name : 'Business Analytics',
        course : 'Btech - IT/ITBI',
        proffesor : 'Dr. Ranajana Vyas'

        
    }
    
]

const Dashboard = () => {
    return (
        <div>
        <div className='px-4 flex font-bold font-poppins'>Subjects</div>
        <div className='w-full py-[2rem] px-4 bg-white '>
            {data.map((d)=>(
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <div className='text-2xl font-bold py-8 text-left'>{d.course_name} -{'>'}</div>
                    <div className='text-xl font- mt-5  text-black font-poppins text-left'>{d.course}</div>
                    {/* <p className=' text-4xl font-bold'>$149</p> */}
                    {/* <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div> */}
                    <div className='py-14'></div>
                    <div className='py-14'></div>
                    
                    <div className='text-xl font- mt-5  text-black font-poppins text-left'>{d.proffesor}</div>
                    {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
                </div>
                <div className='w-full shadow-xl flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
                    {/* <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
                     <div className='text-2xl font-bold py-8 text-left '>Business Analytics -{'>'}</div>
                    <div className='text-xl font- mt-5  text-black font-poppins text-left '>Btech - IT/ITBI</div>
                    {/* <p className=' text-4xl font-bold'>$149</p> */}
                    {/* <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div> */}
                    <div className='py-14'></div>
                    <div className='py-14'></div>
                    
                    <div className='text-xl font- mt-5  text-black font-poppins text-left '>Dr. Ranajana Vyas</div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                    {/* <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
                     <div className='text-2xl font-bold py-8 text-left  '>Business Analytics -{'>'}</div>
                    <div className='text-xl font- mt-5  text-black font-poppins text-left '>Btech - IT/ITBI</div>
                    {/* <p className=' text-4xl font-bold'>$149</p> */}
                    {/* <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div> */}
                    <div className='py-14'></div>
                    <div className='py-14'></div>
                    
                    <div className='text-xl font- mt-5  text-black font-poppins text-left '>Dr. Ranajana Vyas</div>
                </div>
            </div>
            ))}
        </div>
        </div>
        
    );
};

export default Dashboard;