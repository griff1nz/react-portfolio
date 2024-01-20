import Card from '../../ui/Card';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import classes from './ContactForm.css'

var resultText;
function ContactForm() {
    // state={
    //     showMessage: false
    // }
    const [display, setDisplay] = useState('false');
    const toggleDisplay = () => {
        setDisplay((bro) => bro = 'true');
    }
    const form = useRef();
    function submitHandler(event) {
        event.preventDefault();
        // console.log(event.target);
        emailjs.sendForm('service_h9o888o', 'template_z1c1w1e', event.target, 'h9ELx99Vgm-T_q-4P') //Will have to find a way to hide this later
            .then((result) => {
                console.log(result.text);

                resultText = "Thank you for your email! I will get back to you as soon as I can."
                toggleDisplay();
            }, (error) => {
                console.log(error.text);
                resultText = "There was an error sending your email; Please try again."
                toggleDisplay();
            });
        event.target.reset();
    }
    return <Card>
        <form className='grid place-items-center' onSubmit={submitHandler}>
            <div className='p-2 w-10/12'>
                <label htmlFor='nametext' className='text-2xl text-color'>Name</label>
                <input type='text' required className='w-full mt-1 p-1 bg-slate-600 text-color rounded-md' name='name' id='nametext' />
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='emailtext' className='text-2xl text-color'>Email</label>
                <input type='email' className='w-full mt-1 p-1 bg-slate-600 text-color rounded-md' required name='email' id='emailtext'></input>
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='subjecttext' className='text-2xl text-color'>Subject</label>
                <input type='text' required className='w-full mt-1 p-1 bg-slate-600 text-color rounded-md' name='subject' id='subjecttext' />
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='messagetext' className='text-2xl text-color'>Message</label>
                <textarea rows='5' required className='w-full mt-1 p-1 bg-slate-600 text-color rounded-md' name='message' id='messagetext'></textarea>
            </div>
            <button className='p-4 bg-blue-900 rounded-md text-color hover:scale-95 transition ease-in-out duration-150'>Send</button>
            {display == 'true' && <p className='text-color mt-3'>{resultText}</p>}
        </form>
    </Card>
}

export default ContactForm;