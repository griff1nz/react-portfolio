import Card from '../../ui/Card';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import classes from './ContactForm.css'

function ContactForm() {
    const form = useRef();
    function submitHandler(event) {
        event.preventDefault();
        // console.log(event.target);
        emailjs.sendForm('service_h9o888o', 'template_z1c1w1e', event.target, 'h9ELx99Vgm-T_q-4P') //Will have to find a way to hide this later
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        });
        event.target.reset();
    }
    return <Card>
        <form className='grid place-items-center' onSubmit={submitHandler}>
            <div className='p-2 w-10/12'>
                <label htmlFor='name' className='text-2xl text-white'>Name</label>
                <input type='text' required className='w-full mt-1 p-1 bg-slate-600 text-white rounded-md' name='name'/>
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='email' className='text-2xl text-white'>Email</label>
                <input type='email' className='w-full mt-1 p-1 bg-slate-600 text-white rounded-md' required name='email'></input>
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='subject' className='text-2xl text-white'>Subject</label>
                <input type='text' required className='w-full mt-1 p-1 bg-slate-600 text-white rounded-md' name='subject'/>
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='message' className='text-2xl text-white'>Message</label>
                <textarea rows='5' required className='w-full mt-1 p-1 bg-slate-600 text-white rounded-md' name='message'></textarea>
            </div>
            <button className='p-4 bg-blue-900 rounded-md text-white'>Send</button>
        </form>
    </Card>
}

export default ContactForm;