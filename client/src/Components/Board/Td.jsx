import React from 'react';

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () =>{
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item)
    }

    return (
        <>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td><i></i></td>
                <td onClick={onRemove}><i></i></td>
            </tr>
        </>
    )
};

export default Td;