import React from 'react';

const Cart = () => {
    return (
        <div
        // style={{
        //     backgroundImage: `url('https://img.freepik.com/free-photo/dark-blue-product-background_53876-92801.jpg?size=626&ext=jpg&ga=GA1.2.1345697097.1673023916&semt=ais')`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover'
        // }}
        >

            <h4>Book Your Special Residential</h4>

            <section className='m-5'>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Booking Name</span>
                    <input type="text" class="form-control" placeholder="Booking Name" aria-label="Booking Name" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">@gmail.com</span>
                </div>

                <div class="mb-3">
                    <label for="basic-url" class="form-label">Your vanity URL</label>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon3">NID/Proffesional Id</span>
                        <input type="number" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                    <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text">.00</span>
                </div>

                <div class="input-group mb-3">
                    <label className='input-group-text'>Choose a car:</label>
                    <select className='btn btn-success' name="packages" id="packages">
                        <option className='btn btn-warning input-group-text' value="Basic">Basic Package</option>
                        <option className='btn btn-danger input-group-text' value="Premium">Premium Package</option>
                        <option className='btn btn-info input-group-text' value="Standard">Standard Package</option>
                    </select>
                </div>

                <div class="input-group">
                    <span class="input-group-text">Special Criteria</span>
                    <textarea class="form-control" aria-label="special criteria"></textarea>
                </div>
            </section>

        </div>
    );
};

export default Cart;