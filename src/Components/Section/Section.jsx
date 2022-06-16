import React, { useSyncExternalStore } from 'react';

const Section = ({users}) => {
    return (
        <div className='section'>
            <table className="table">
                <tr className='table-header'>
                    <td><strong>model</strong>:</td>
                    <td><strong>modification:</strong></td>
                    <td><strong>price:</strong></td>
                    <td><strong>id:</strong></td>
                </tr>
                {users.map (item =>(
                <tr className='table-content'>
                <td>{item.model}</td>
                <td>{item.modification}</td>
                <td>{item.price}</td>
                <td>{item.id}</td>                
                </tr> ))}
                
                </table>
            
        </div>
    );
};

export default Section;