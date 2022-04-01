import React, { useState } from 'react';

const Post = ({ onSaveData}) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form);
        console.log(form);
        setForm({
            name: '',
            email: '',
            phone: '',
            website: '',
        })
    }

    return (
        <>
            <div>고객 추가하기</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Name<input required placeholder='이름 입력' type='text' name='name' value={form.name} onChange={handleChange}/></label>
                    <label htmlFor="email">Name<input required placeholder='이름 입력' type='text' name='email' value={form.email} onChange={handleChange}/></label>
                </div>
                <div>
                    <label htmlFor="phone">Name<input required placeholder='이름 입력' type='text' name='phone' value={form.phone} onChange={handleChange}/></label>
                    <label htmlFor="website">Name<input required placeholder='이름 입력' type='text' name='website' value={form.website} onChange={handleChange}/></label>
                </div>
                <div>
                    <button type='submit'>저장</button>
                </div>
            </form>
        </>
    );
};

export default Post;