import { FaUserLarge, FaPhone } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import s from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  const iconDataValue = {
    className: 'global-class-name-icon',
    size: '18px',
  };
  return (
    <>
      <div className={s.contact}>
        <div className={s.containerTitle}>
          <IconContext.Provider value={iconDataValue}>
            <FaUserLarge className={s.icon} />
          </IconContext.Provider>
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.containerPhone}>
          <IconContext.Provider value={iconDataValue}>
            <FaPhone className={s.icon} />
          </IconContext.Provider>
          <a className={s.phone} href={'tel:' + number}>
            {number}
          </a>
        </div>
      </div>
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
