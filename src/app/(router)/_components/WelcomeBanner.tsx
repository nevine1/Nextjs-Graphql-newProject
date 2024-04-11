import React from 'react'

interface Props {
    
}

export const WelcomeBanner = (props: Props) => {
    return (
        <div className="p-3">
           <h1 className="font-bold text-[40px]">Welcome to 
                <span className="text-primary"> Vena</span> academy
           </h1>
           <h1 className="sm:text-[16px] text-[18px] text-grey-600">Learn, explore and build web applications</h1>
          
        </div>
    )
}
