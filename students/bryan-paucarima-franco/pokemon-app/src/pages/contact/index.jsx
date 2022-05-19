import Header from "../../components/header";

function Contact() {

    const handleSubmit = e => {
        e.preventDefault()
        const { name, email } = e.target;

        fetch(`https://formsubmit.co/ajax/${email.value}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                message: "Registro completado!!!" 
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <>
            <Header></Header>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" required />
                <input type="email" name="email" required />
                <button type="submit">Send</button>
            </form>
        </>

    )
}

export default Contact;
