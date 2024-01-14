import Card from '../../ui/Card';
import { useRef } from 'react';
import classes from './ContactForm.css'

function ContactForm() {
    const titleInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;
        console.log(enteredTitle + ' ' + enteredEmail + ' ' + enteredMessage);
    }
    return <Card>
        <form className='grid place-items-center' onSubmit={submitHandler}>
            <div className='p-2 w-10/12'>
                <label htmlFor='title' className='text-2xl text-white'>Name</label>
                <input type='text' required className='w-full mt-1 p-1 bg-slate-600 text-white' id='title' ref={titleInputRef}/>
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='email' className='text-2xl text-white'>Email</label>
                <input type='email' className='w-full mt-1 p-1 bg-slate-600 text-white' required id='email' ref={emailInputRef}></input>
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='message' className='text-2xl text-white'>Message</label>
                <textarea rows='5' required className='w-full mt-1 p-1 bg-slate-600 text-white' id='message' ref={messageInputRef}></textarea>
            </div>
            <button className='p-4 bg-blue-900 rounded-md text-white'>Send</button>
        </form>
    </Card>
}

export default ContactForm;