import { useState } from "react";


export const Contact = () => {
  const [input, setInput] = useState({});
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  }
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
}
  return (
    <section className="contactForm">
      <form name="contact" method="post" action="/Success" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Your Name:{" "}
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Email:{" "}
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:{" "}
          <textarea
            name="message"
            value={input.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

