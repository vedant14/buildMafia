import React, { useState } from "react";
import { Wrapper } from "./styles";
import { supabase } from "../../services/supabaseClient";

export function SubmitForm() {
    const [url, setUrl] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => {
        setUrl(e.target.value.trim());
        setError(null);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const isValid = validateData(url);
        if (isValid) {
            setError(null);
            setSubmit(true);
            uploadData();
        } else {
            setError("Please enter a valid PH URL");
        }
    };

    const handleClear = () => {
        setError(null);
        setSubmit(false);
        setUrl("");
    };

    const uploadData = async () => {
        const { data, error } = await supabase
            .from("submissions")
            .insert([{ url: url }]);
    };

    const validateData = (value) => {
        const re = /^(https:\/\/www\.producthunt\.com\/posts\/[-a-zA-Z0-9@:%._\+~#=]{2,256})/;
        return value && re.test(value);
    };
    return (
        <Wrapper className="Container">
            {submit === true ? (
                <div>
                    <h1>Thanks for subscribing</h1>
                    <button onClick={() => handleClear()}>Submit more</button>
                </div>
            ) : (
                <>
                    <li className="head">Stay updated</li>
                    <p>
                        Whenever a new test comes, you’ll be the first to hear.
                    </p>
                    <input
                        label="URL"
                        autoFocus
                        onChange={(e) => handleEmailChange(e)}
                        type="text"
                        value={url}
                        placeholder="Enter the PH Url"
                        className="input-email"
                    />
                    {error && <li className="error">{error}</li>}
                    <button onClick={(event) => handleFormSubmit(event)}>
                        Subscribe
                    </button>
                </>
            )}
        </Wrapper>
    );
}
