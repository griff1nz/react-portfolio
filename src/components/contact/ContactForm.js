import Card from '../../ui/Card';
import classes from './ContactForm.css'

function ContactForm() {
    return <Card>
        <form className='grid place-items-center'>
            <div className='p-2 w-10/12'>
                <label htmlFor='title' className='text-2xl text-white'>Name</label>
                <input type='text' required className='w-full mt-1' id='title'></input>
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='email' className='text-2xl text-white'>Email</label>
                <input type='text' className='w-full mt-1' required id='email'></input>
            </div>
            <div className='p-2 w-10/12'>
                <label htmlFor='message' className='text-2xl text-white'>Message</label>
                <textarea rows='5' required className='w-full mt-1' id='message'></textarea>
            </div>
        </form>
    </Card>
}

export default ContactForm;