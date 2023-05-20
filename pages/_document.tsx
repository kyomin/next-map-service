/* Layout을 짜는 곳입니다. */
import { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/components/common/Header';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
