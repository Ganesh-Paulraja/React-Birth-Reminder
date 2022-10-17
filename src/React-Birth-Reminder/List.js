import React, { useState } from 'react'
import Data from './Data'

export default function List() {
  const [people, setPeople] = useState(Data);
  const [btnText, setBtnText] = useState('Clear All');
  const clickAll = () => {
    if(people.length < 5) {
      setPeople(Data);
      setBtnText('Clear All');
    } else {
      setPeople([]);
      setBtnText('Show All');
    }
  }
  return (
    <div className='list-wrapper bg-[#efcd00] w-screen min-h-screen relative flex px-8 items-center'>
      <div className="list-pop min-h-[200px] min-w-full sm:min-w-[430px] scale-90 bg-white mx-auto rounded-lg" style={{boxShadow: "1px 1px 10px #322b00"}}>
        <h1 className='text-center text-[3rem] py-10'><span>{people.length}</span> Birthdays Today</h1>
        <div className="list-box">
          {people.map((val)=> {
            const {id, name, age, image} = val;
            return (
              <div className="user-detail flex px-8 py-5" key={id}>
                <div className="user-img w-[75px] h-[75px] rounded-[50%] overflow-hidden relative">
                  <img src={image} alt="" className='max-w-[150px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]' />
                </div>
                <div className="user-text flex justify-center flex-col pl-10">
                  <h2 className='font-bold tracking-[3px]'>{name}</h2>
                  <p className='text-gray-500'>{age} years</p>
                </div> 
              </div>
            )
          })} 
          <button className='w-[calc(100%-10rem)] bg-[#efcd00] mb-5 mx-auto h-16 text-white font-black text-[2rem] block' onClick={clickAll}>{btnText}</button>
        </div>   
      </div>
    </div>
  )
}
