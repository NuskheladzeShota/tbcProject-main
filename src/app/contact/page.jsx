import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Information</h1>
            <p className="contact-info">Hello, this is the contact page.</p>
            <p className="contact-info">My name is <strong>Shota Nuskheladze</strong>.</p>
            <p className="contact-info">My email is <a href="mailto:shota@gmail.com">nuskheladzeshota@gmail.com</a>.</p>
            <p className="contact-info">My phone number is <strong>55555555</strong>.</p>
            <p className="contact-info">My address is <strong>123 Street, City, Country</strong>.</p>
            
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
