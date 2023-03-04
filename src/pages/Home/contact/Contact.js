
import React, { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
import img from '../../../assets/Mention.gif'
import { toast } from 'react-hot-toast';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_emailserviceid}`, `${process.env.REACT_APP_templateid}`, form.current, `${process.env.REACT_APP_emailpublickey}`)
            .then((result) => {
                console.log(result.text);
                toast.success('email sent successfully')
            }, (error) => {
                console.log(error.text);

            });
    };




    return (
        <div className='my-20'>


            <h1 className='text-center text-6xl font-bold mb-7 animate-pulse border w-96 text-white/90 mx-auto py-3 
             rounded-xl'>Contact Me</h1>


            {/* component  */}
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img src={img} alt="" className=' ml-7' />

                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="user_name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Email</span>
                                </label>
                                <textarea name="message" className="textarea textarea-bordered" placeholder="Message"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn' type="submit" value="send email" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Contact;