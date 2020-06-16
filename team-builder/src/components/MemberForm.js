import React from 'react'

const MemberForm = props => {
    const { value, onChange, onSubmit} = props

    return (
        <div>
            <form>

                <div className='FormInputs'>
                    <label>Member Name:&nbsp;
                        <input />
                    </label>

                    <label>Member Email:&nbsp;
                        <input />
                    </label>

                    <select>Member Role:&nbsp;
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                   
            </form>
            <p>I am the Member Form!</p>
        </div>
    )
}

export default MemberForm