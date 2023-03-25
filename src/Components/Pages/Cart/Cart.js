import React, { useRef, useState } from 'react';

const Cart = () => {

    const bookingName = useRef('');
    const userEmail = useRef('');
    const idCard = useRef('');
    const amount = useRef('');
    // const Package = useRef('');
    const criteria = useRef('');


    const [pack, setPack] = useState();


    const handleBooking = () => {

        const name = bookingName.current.value;
        const email = userEmail.current.value + "@gmail.com";
        const userId = idCard.current.value;
        const price = amount.current.value;
        const PackageWork = pack;
        const description = criteria.current.value;

        console.log(name, email, userId, price, PackageWork, description);


    };

    return (
        <div
            style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXAvQ7GTRW7R6MwTguIn7Q2ILwKSZ95f41A&usqp=CAU')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >

            <h4>Book Your Special Residential</h4>

            <section className='m-5'>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Booking Name</span>
                    <input type="name" ref={bookingName} class="form-control" placeholder="Booking Name" aria-label="Booking Name" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <input type="email" ref={userEmail} class="form-control" placeholder="user email" aria-label="user email" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">@gmail.com</span>
                </div>

                <div class="mb-3">
                    <label for="basic-url" class="form-label">Your vanity URL</label>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon3">NID/Proffesional Id</span>
                        <input type="number" ref={idCard} class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                    <div class="form-text" id="basic-addon4">Please Provide Your Identityfication Card</div>
                </div>

                <span><p>Please Add Advance Booking Amount Min: <span className='text-danger'>100$</span> </p></span>

                <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input ref={amount} type="number" class="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text">.00</span>
                </div>

                <div class="input-group mb-3">
                    <label className='input-group-text'>Choose a Package:</label>
                    <select className='btn btn-success' id="packages" onChange={e => setPack(e.target.value)}>
                        <option className='btn btn-warning input-group-text' value="Basic">Basic Package</option>
                        <option className='btn btn-danger input-group-text' value="Premium">Premium Package</option>
                        <option className='btn btn-info input-group-text' value="Standard">Standard Package</option>
                    </select>
                </div>

                <div class="input-group">
                    <span class="input-group-text">Special Criteria</span>
                    <textarea ref={criteria} class="form-control" aria-label="special criteria"></textarea>
                </div>

                <button onClick={() => handleBooking()} className='btn btn-success btn-lg m-5'>Submit</button>
            </section>

        </div>
    );
};

export default Cart;