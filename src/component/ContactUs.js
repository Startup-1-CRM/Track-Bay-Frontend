import React from 'react'
import styled from 'styled-components';


const FormStyling = styled.div`
#fcf-form {
    display:block;
    background-color: #316DDD;
    width:60%;
    margin:auto;
    padding: 10px 2px;
    margin-top:20px;
    border-radius:10px;
    margin-bottom:-5rem;
}

.fcf-body {
    margin: 0;
    font-family: -apple-system, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
    padding: 30px;
    padding-bottom: 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    max-width: 100%;
}
.fcf-form-group {
    margin-bottom: 1rem;
}

.fcf-input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 80%;
    margin:auto;
}
.fcf-form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1.0;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    outline: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.fcf-form-control:focus {
    border: 1px solid #313131;
}
select.fcf-form-control[size], select.fcf-form-control[multiple] {
    height: auto;
}

textarea.fcf-form-control {
    font-family: -apple-system, Arial, sans-serif;
    height: auto;
}

label.fcf-label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

.fcf-credit {
    padding-top: 10px;
    font-size: 0.9rem;
    color: #545b62;
}

.fcf-credit a {
    color: #545b62;
    text-decoration: underline;
}

.fcf-credit a:hover {
    color: #0056b3;
    text-decoration: underline;
}
.fcf-btn {
    display: inline-block;
    font-weight: 200;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
    .fcf-btn {
        transition: none;
    }
}

.fcf-btn:hover {
    color: #212529;
    text-decoration: none;
}

.fcf-btn:focus, .fcf-btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.fcf-btn-primary {
    color: black;
    background-color: #F1AE2B;
    border-color: #ff0000;
}
.fcf-btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
}

.fcf-btn-primary:focus, .fcf-btn-primary.focus {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.fcf-btn-lg, .fcf-btn-group-lg>.fcf-btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
}
.fcf-btn-block {
    display: block;
    width: 50%;
    margin:auto;
}

.fcf-btn-block+.fcf-btn-block {
    margin-top: 0.5rem;
}

input[type="submit"].fcf-btn-block, input[type="reset"].fcf-btn-block, input[type="button"].fcf-btn-block {
    width: 50%;
}
h3{
    color:white;
}
`

export const ContactUs = () =>
{
    return (
        <FormStyling>
            <div id="fcf-form">
                <h3 class="fcf-h3">Contact us</h3>

                <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">

                    <div class="fcf-form-group">
                        <label for="Name" class="fcf-label"></label>
                        <div class="fcf-input-group">
                            <input type="text" id="Name" name="Name" class="fcf-form-control" placeholder='Full Name' required />
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <label for="Email" class="fcf-label"></label>
                        <div class="fcf-input-group">
                            <input type="email" id="Email" name="Email" class="fcf-form-control" placeholder= "Email" required />
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <label for="Message" class="fcf-label"></label>
                        <div class="fcf-input-group">
                            <textarea id="Message" name="Message" class="fcf-form-control" rows="8" maxlength="3000" placeholder='Description' required></textarea>
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Submit</button>
                    </div>

                 

                </form>
            </div>
        </FormStyling>
    )
}

export default ContactUs;
