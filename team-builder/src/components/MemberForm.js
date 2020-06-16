import React from 'react'

const MemberForm = props => {
    const { value, onChange, onSubmit} = props

    return (
        <div>
            <form className='MemberForm' onSubmit={onSubmit}>

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
                            <option value=''>--Select a Team Role--</option>
                            <option value='Front-End Engineer'>Front-End</option>
                            <option value='Back-End Engineer'>Back-End</option>
                            <option value='Designer'>Designer</option>
                        </select>
                    </label>
                </div>
                   
                   <div className='submitForm'>
                       <p>Add Member to Team!</p>
                        <button className='SubmitButton'>Submit</button>
                   </div>
            </form>
        </div>
    )
}

export default MemberForm