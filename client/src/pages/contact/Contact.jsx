import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./contact.css";

export default function Contact() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [email, setEmail] = useState("");
	const handleSubmit = () => {
		if (!title || !desc || !email) {
			alert("Form details are missing.");
		} else {
			alert("You will be contacted soon");
		}
	};

	return (
		<div class="contact-top">
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup">
					<input
						type="text"
						placeholder="Full Name"
						className="writeInput"
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="writeFormGroup">
					<input
						type="text"
						placeholder="Email"
						className="writeInput"
						autoFocus={true}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Write Something..."
						type="text"
						className="writeInput writeText"
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<button className="writeSubmit" type="submit">
					Contact
				</button>
			</form>
			<Sidebar />
		</div>
	);
}
