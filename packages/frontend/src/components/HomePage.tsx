'use client';

import RequestForm from './RequestForm';
const HomePage = () =>{

    return(
        <div className="flex items-center justify-center flex-col h-full w-full space-y-5">
          <div className="text-center mb-6 max-w-[630px] space-y-[6px]">
            <h1 className="text-white tracking-[0.1em] text-[40px] font-bebas-neue" style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>SOLAR-POWER YOUR HOME</h1>
            <p className="font-montserrat text-base text-white h-[40px] max-w-[578px]" style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>Enter your information to schedule a free consultation with a solar specialist and explore how solar can power your Los Angeles-area home.</p>
          </div>
          <RequestForm />
        </div>      
    )
}

export default HomePage