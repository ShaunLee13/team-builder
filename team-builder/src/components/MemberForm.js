import React from 'react'

const MemberForm = props => {
    const { value, onChange, onSubmit} = props

    return (
        <div>
            <form>

                <div className='FormInputs'>
                    <label>Member Name:&nbsp;
                        <input 
                            type='text' 
                            name='name' 
                            value={value.name} 
                            onChange={onChange}
                        />
                    </label>

                    <label>Member Email:&nbsp;
                    <input 
                            type='email' 
                            name='email' 
                            value={value.email} 
                            onChange={onChange}
                        />
                    </label>

                    <label>Member Role:&nbsp;
                        <select
                            name='role'
                            value={value.role}
                            onChange={onChange}
                        >
                            <option>--Select a Team Role--</option>
                            <option>Front-End</option>
                            <option>Back-End</option>
                            <option>Designer</option>
                        </select>
                    </label>
                </div>
                   
            </form>
            <p>I am the Member Form!</p>
        </div>
    )
}

export default MemberForm