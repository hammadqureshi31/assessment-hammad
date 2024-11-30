import React from 'react'

const SecondSection = () => {
  return (
    <div>
        {/* choose services  */}
        <div>
            <div>
                <h1>choose services</h1>
                <div>
                    <input type="text" />
                    <div>
                        <img src="./magnifying-glass.png" alt="" />
                    </div>
                </div>
            </div>

            {/* here create selects */}
            <div></div>
        </div>

        {/* booking details */}
        <div>
            <h3>booking details</h3>
            <hr />
            <div>
                <img src="./handbag.png" alt="" />
                <p>Service</p>
            </div>
            <hr />
            <div>
                <img src="./bag.png" alt="" />
                <p>Employee</p>
            </div>
            <hr />
            <div>
                <img src="./location.png" alt="" />
                <p>Location</p>
            </div>
            <hr />
            <div>
                <img src="./date.png" alt="" />
                <p>Date & Time</p>
            </div>
        </div>

        <img src="./secondSection.png" alt="" className='abolute right-0'/>
    </div>
  )
}

export default SecondSection