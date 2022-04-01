import React, { userEffect, userState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal'

const Board = () {
    const [info, setInfo] = userState([]);
    const [selected, setSelected] = userState('');
    const [modalOn, setModalOn] = userState(false);

    // 고유값 Id , ref 사용
    const nextId = useRef(11);

    // 더미 데이터
    userEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setInfo(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleSave = (data) => {
        // 데이터 수정
        if (data.id) { // 수정 데이터에는 id 존재 
            setInfo(
                info.map(row => data.id === row.id ? {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.websitse,
                } : row)
            )
        } else { // 바로 추가
            setInfo(info => info.concat(
                {
                    id: nextId.current,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                }
            ))
            nextId.current += 1;
        }
    }

    const handleRemove = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }

    const handleEdit = (item) => {
        setModalOn(true);
        const selectedData = {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            website: item.website,
        };
        console.log(selectedData);
        setSelected(selectedData);
    }

    const handleCancel = () => {
        setModalOn(false);
    }

    const handleEditSubmit = (item) => {
        console.log(item);
        handleSave(item);
        setModalOn(false);
    }

    return (
        <div>
            <div>게시판</div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Website</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>
                </table>
                <Post onSaveData={handleSave}/>
                {ondalOn && <Modal selectedData={selected} hanleCancel={handleCancel} handleEditSubmit={handleEditSubmit} />}
        </div>
    )
}