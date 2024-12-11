import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [cardFlipped, setCardFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragEnd, setDragEnd] = useState({ x: 0, y: 0 });

  const cardRef = useRef(null);

  const startDrag = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const onDrag = (e) => {
    if (isDragging) {
      setDragEnd({ x: e.clientX, y: e.clientY });
    }
  };

  const endDrag = () => {
    if (isDragging) {
      const distance = dragEnd.x - dragStart.x;
      if (distance < 0 && !cardFlipped) {
        setCardFlipped(true);
      } else if (distance > 0 && cardFlipped) {
        setCardFlipped(false);
      }
      setIsDragging(false);
    }
  };

  return (
    <div className='container'>
      <div
        className='dragDiv'
        draggable
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
      </div>
      <div
        ref={cardRef}
        className={`card ${cardFlipped ? 'flipped' : ''}`}
      >
        <div className="clip"></div>
        <div style={{ zIndex: cardFlipped ? 0 : 1 }} className="front">
          <span>
            <h1>ABC.conf <sup>C25</sup></h1>

            <h1>ABC</h1>
          </span>

          <hr />
          <h5>Welcome <b>@kartikmistry</b></h5>

          <h3>Artificial Intelligence Workshop</h3>
          <h6>by ABC.js</h6>

          <hr />

          <p>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"></path></svg>
             Virtual</p>

        </div>

        <div style={{ zIndex: cardFlipped ? 2 : 0 }}  className="back">
        <h4>Conference Details</h4>
        <ul>
          <li><strong>Event:</strong> Virtual XYZ Conference</li>
          <li><strong>Date:</strong> January 11th, 2024</li>
          <li><strong>Time:</strong> 10:00 AM - 4:00 PM (UTC)</li>
          <li><strong>Location:</strong> Online via Zoom</li>
        </ul>
        <hr />
        <h4>Contact Information</h4>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
            support@xyzconf.com
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-1.594,1.594c-0.739-0.22-2.118-0.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.391-0.391-1.023-0.391-1.414,0L3.581,5.005c-0.38,0.38-0.594,0.902-0.586,1.435c0.023,1.424,0.4,6.37,4.298,10.268s8.844,4.274,10.269,4.298c0.005,0,0.023,0,0.028,0c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L17.707,12.293z M17.58,19.005c-1.248-0.021-5.518-0.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7,4.414L9.586,7L8.293,8.293C8.054,8.531,7.952,8.875,8.021,9.205c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271c0.333,0.071,0.674-0.032,0.912-0.271L17,14.414L19.586,17L17.58,19.005z"></path></svg>
            +1 (555) 987-6543
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth="0" viewBox="0 0 12 16" height="1em" width="1em"><path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
            San Francisco, CA
          </li>
        </ul>
        <hr />
        <p className="p">
          This card confirms that the holder is officially registered and authorized to participate in the virtual XYZ Conference, taking place on January 11th via Zoom. For any technical assistance, please contact us at the provided email or phone number.
        </p>
        <span className='id'>
        ID: 8302
      </span>
      </div>


      </div>
    </div>
  );
}

export default App;
