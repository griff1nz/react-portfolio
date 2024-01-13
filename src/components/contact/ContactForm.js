import Card from '../ui/Card';
function ContactForm() {
    return <Card>
        <form>
            <div>
                <label htmlFor='title'>Name</label>
                <input type='text' required id='title'></input>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' required id='email'></input>
            </div>
        </form>
    </Card>
}

export default ContactForm;