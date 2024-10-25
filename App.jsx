import React, {useState, useEffect} from 'react'
import './bootstrap.css'

const App = () => {
  const [date, setDate]=useState(0)
  const [month, setMonth]=useState(0)
  const [year, setYear]=useState(0)
  const [hour, setHour]=useState(0)
  const [minute, setMinute]=useState(0)
  const [seconds, setSeconds]=useState(0)
  const [weekDay, setWeekDay]=useState(0)
  const [ampm, setAmpm]=useState("AM")

  useEffect(()=>{
    const changeData=setTimeout(()=>{
      var d=new Date()
      setDate(d.getDate())
      setMonth(d.getMonth()+1)
      setYear(d.getFullYear())

      setHour(d.getHours())
      setMinute(d.getMinutes())
      setSeconds(d.getSeconds())

      hour>12 && setHour(hour-12); setAmpm("PM")

      switch(d.getDay())
      {
        case 0:setWeekDay("Sunday")
        break;
        case 1:setWeekDay("Monday")
        break;
        case 2:setWeekDay("Tuesday")
        break;
        case 3:setWeekDay("Wednesday")
        break;
        case 4:setWeekDay("Thursday")
        break;
        case 5:setWeekDay("Friday")
        break;
        case 6:setWeekDay("Saturday")
        break;
      }
    }, 1000)
  })

  return (
    <div className='flex justify-center items-center w-[100%] h-[100vh] bg-emerald-900'>
      <div className='w-[40%] h-[50vh] bg-teal-100 rounded-lg row items-center'>
        <div className='row justify-content-between'>
          <span className='col-4 text-center fw-bold fs-4'><span className='fs-1 text-slate-600'>{date}</span> DATE</span>
          <span className='col-4 text-center fw-bold fs-4'><span className='fs-1 text-slate-600'>{month}</span> MONTH</span>
          <span className='col-4 text-center fw-bold fs-4'><span className='fs-1 text-slate-600'>{year}</span> YEAR</span>
        </div>

        <div className='row justify-content-between'>
          <span className='col-3 text-center fw-bold fs-4'><span className='fs-1 text-slate-600'>{hour}</span></span>
          <span className='col-1 text-center fw-bold fs-4 mt-[10px] row items-center'>:</span>
          <span className='col-3 text-center fw-bold fs-4'><span className='fs-1 text-slate-600'>{minute}</span></span>
          <span className='col-1 text-center fw-bold fs-4 row items-center'>:</span>
          <span className='col-3 text-center fw-bold fs-4'><span className='fs-1 text-slate-600'>{seconds}</span> {ampm}</span>
        </div>

        <div className='row'>
          <span className='col-12 text-center fw-bold fs-1 text-slate-600'>{weekDay}</span>
        </div>
      </div>
    </div>
  )
}

export default App