import React from 'react';
import styles from './profile.module.css';

const Profile = (props) => {
  const { name, email, type, createdAt } = props;
  console.log('data', props.type);

  return (
    <div className={styles.profile}>
      <div className={styles.field}>
        <label>Name:</label>
        <span>{name}</span>
      </div>
      <div className={styles.field}>
        <label>Email:</label>
        <span>{email}</span>
      </div>
      <div className={styles.field}>
        <label>Type:</label>
        <span>{type}</span>
      </div>
      <div className={styles.field}>
        <label>Created At:</label>
        <span>{createdAt}</span>
      </div>
    </div>
  );
};

export default Profile;
