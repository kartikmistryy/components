
const Card = ({priority, selected}) => {

  const emailArray = [
    {
      email: 'john.doe@xyz.co',
      email_title: 'Code Debug'
    },
    {
      email: 'jane.smith@xyz.co',
      email_title: 'Design Changes'
    },
    {
      email: 'alice.jones@xyz.co',
      email_title: 'Feature Request'
    },
    {
      email: 'bob.miller@xyz.co',
      email_title: 'Bug Fix'
    },
    {
      email: 'carol.white@xyz.co',
      email_title: 'Performance Improvement'
    }
  ];


  return (
    <div
        style={{
            zIndex: selected == priority ? 999 : 10 - priority,
            transform: selected == priority ? `translateY(-${140}%)`  : `translateY(-${priority * 20}px)`,
        }} 
        className="flex min-w-[640px] max-w-[640px] w-full h-auto bg-[rgba(0,0,0,0.25)] backdrop-blur-xl rounded-xl flex-col border-[1px] border-[#2e2e2e] absolute transition-all">
      <div className='flex flex-row w-full h-24 p-4 items-start justify-between border-b border-[#2e2e2e]'>
        <span className='flex flex-row gap-4 text-gray-300'>
          <img className='h-10 w-10 rounded-full' src={`./${priority}.png`} alt="" />
          <span className='flex flex-col items-start'>
            <p className='text-sm font-normal'>{emailArray[priority].email}</p>
            <h1 className='text-base font-medium text-gray-100'>{emailArray[priority].email_title}</h1>
            <h5 className='text-sm font-normal flex gap-1 text-gray-100'>To: <p className='text-gray-300'>dieter@rams.com</p></h5>
          </span>
        </span>

        <span>
          <p className='text-sm text-gray-300'>Jan 24, 19:00</p>
        </span>
      </div>
      <div className='p-4 text-gray-300 text-sm'>
        hey dieter, <br />
        labours of love take time – after 2 years in beta we’re today introducing a new Amie: <br /><br />
      
        calendar, todos, and now email all in one place. <br /><br />

        check out our new website, we think you’ll love it. we also have a launch video telling you how we think about calendars.
        <br /><br />
        with love,
        <br />
        ☀️ dennis
      </div>
    </div>
  )
}

export default Card