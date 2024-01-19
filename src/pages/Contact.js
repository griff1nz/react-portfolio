import ContactForm from '../components/contact/ContactForm.js';
function Contact() {
    return <div className='height85'>
        <h1 className='text-center my-4 text-5xl text-color font-semibold'>Contact Me</h1>
        <p className='text-center mb-2 text-color text-xl'>Fill out the form below if you want to get in touch with me!<br/>I look forward to connecting with you.</p>
        <ContactForm />
        {/* <hr className='mt-8 w-6/12 m-auto'></hr>
        <ul className='my-4 w-8/12 mx-auto flex justify-center justify-around'>
            <li><a href='mailto:contact@ziongriffin.com'><p className='text-white text-xl'>Email</p></a></li>
            <li><a href='tel:4844252044'><p className='text-white text-xl'>Phone</p></a></li>
            <li><a href='mailto:contact@ziongriffin.com'><p className='text-white text-xl'>Email</p></a></li>
        </ul> */}
    </div>

}

export default Contact;