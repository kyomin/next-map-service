// Libs
import { Fragment } from 'react';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

// Components
import Header from '@/components/common/Header';
import styles from '../styles/header.module.scss';

export default function Feedback() {
  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            onClick={() => {
              alert('복사');
            }}
            className={styles.box}
            style={{ marginRight: 8 }}
            key="copy-button"
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href="/feedback" className={styles.box} key="link-button">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
    </Fragment>
  );
}
