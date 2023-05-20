import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

const Header = () => {
  return (
    <header className="header">
      <div className="flexItem">
        <Link href="/" className="box">
          <Image
            src="/next-logo.png"
            width={110}
            height={20}
            key={'next-logo'}
            alt="지도 로고"
          />
        </Link>
      </div>
      <div className="flexItem">
        <button
          onClick={() => {
            alert('복사');
          }}
          className="box"
          style={{ marginRight: 8 }}
          key="copy-button"
        >
          <AiOutlineShareAlt size={20} />
        </button>        
        <Link href="/feedback" className="box" key="link-button">
          <VscFeedback size={20} />
        </Link>        
      </div>
    </header>
  );
};

export default Header;
