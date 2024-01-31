import React from 'react'

const Goals = () => {
  return (
    <div className='Goals'>
       <nav className='nav2'>
           <div><h1>ChooseLyf</h1></div>
        </nav>
        <section >
          <div className="Goals_container">
            <div className='Goals_container1'>
              <h3>What's your first name?</h3>
              <p>Select up to 3 that are important to you, Including one weight goal.</p>
              <div>
              ` <input className='first_name' placeholder='First Name'  type="text" />
              </div>
            </div>
            <div className="btns_container">
              <button>BACK</button>
              <button>NEXT</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Goals