import React,{useState} from 'react';
import Firebase from './Firebase';

import '../css/contact.css';
import FormComponent from './FormComponent';

function Contact() {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        message: ''
    });

    const interaction = Firebase.database().ref("messages");
    const handleChange = (e)=>{
        const {name, value} = e.target;

        setDetails({
            ...details,
            [name]: value
        });
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
            
            
            let info = interaction.push();
            info.set(details);

            document.querySelector(".alert")
            .classList.add("moveIn");
            document.querySelector(".alert")
            .style.display = "flex";

            setTimeout(()=>{
                document.querySelector(".alert")
                .style.display = "none";
            },3000)
        
        

            setDetails({
                name:'',
                email:'',
                message: ''
            })
    }
  return (
    <>
      <section className='contact section bd_grid' id='contact'>
        <div className='circle contact_circleOne'></div>
        <div className='circle contact_circleTwo'></div>

        <h2 className='section_title'>
            Contact Me<br />
            <span>Let's talk </span>
        </h2>
        <div className='contactContainer bd_grid'>
            <form 
            id='contactForm'
            className='contactForm'
            onSubmit={handleSubmit}>
                <FormComponent 
                    type = "text"
                    name = "name"
                    value={details.name}
                    onChange = {handleChange}
                    labels = "Your Name"
                    required
                />
                <FormComponent 
                    type = "email"
                    name = "email"
                    value={details.email}
                    onChange = {handleChange}
                    labels = "Your Email"
                    required
                />
                <textarea
                    name = "message"
                    value={details.message}
                    onChange = {handleChange}
                    placeholder="Type a message"
                    id='messegeContent'
                    className='contact'
                    required
                />
                <input 
                type='submit' 
                value='Send' 
                className='button contact_button'
                />
            </form>
        </div>
    </section>
    </>
  )
}

export default Contact
