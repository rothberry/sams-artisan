import { useState } from "react"

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        content: "",
    })
    const handleChange = (e) =>
        setFormState({ ...formState, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted: ", formState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Your Name:
                <input
                    value={formState.name}
                    name="name"
                    placeholder={"Your Name"}
                    onChange={handleChange}
                />
            </label>
            <label>
                Message:
                <textarea
                    id="txtArea"
                    rows="10"
                    cols="70"
                    value={formState.content}
                    name="content"
                    placeholder={"Your Message"}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value={"SUBMIT"} />
        </form>
    )
}

export default ContactForm
