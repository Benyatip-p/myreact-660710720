import React from 'react';
import flower from '../flower.jpg';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src={flower}
        alt="User Avatar"
        style={{
            borderRadius: '0%',
            width: '250px',
            height: '250px',
            border: '5px solid #d59ed2ff'
        }}
    />
);

const UserName = () => (
    <h2 style={{ color: '#667eea', margin: '10px' }}>
        นางสาว เบญญทิพย์ พรสันเทียะ
    </h2>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '16px' }}>
        นักศึกษาคณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ มหาวิทยาศิลปากร
    </p>
);

const PersonalInform = () => (
    <p style={{ color: '#aa72d2ff', fontSize: '16px' }}>
        เกิดวันที่ 23 พฤศจิกายน 2547
    </p>
);

const UserFavoriteThings = () => (
    <p style={{ color: '#a10e8bff', fontSize: '16px' }}>
        สิ่งที่ชอบ : การ์ตูนญี่ปุ่น, ดนตรี, ,มายคราฟ
        สัตว์เลี้ยง : ชิวาว่า 1 ตัว ชื่อ "กอหญ้า"
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '100px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserBio />
            <UserName />
            <PersonalInform/>
            <UserFavoriteThings/>
            
        </div>
    );
};

export default UserCard;