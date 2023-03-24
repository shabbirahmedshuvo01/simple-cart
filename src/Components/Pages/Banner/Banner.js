import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <section className='d-flex gap-5 m-5 justify-content-center align-items-center'>
                <div className='text-start'>
                    <h1 className='text-warning'>Lorem ipsum dolor sit amet consectetur</h1>

                    <p className='text-start mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nesciunt!</p>

                    <button className='btn rounded-pill btn-outline-info'>Learn More <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                        </svg>
                    </span></button>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/video-editing-doodle-concept-animation-montage_107791-13486.jpg?size=626&ext=jpg&ga=GA1.2.1345697097.1673023916&semt=sph" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;