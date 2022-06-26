import React from 'react'

export default function About() {
  return (
    <div className='container'>
        <h2 className="my-3">About us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Contact details
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab saepe nihil cupiditate rem, earum veritatis esse dignissimos reiciendis quo adipisci ullam animi minus laboriosam magnam eum placeat explicabo. Magni.</strong>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
