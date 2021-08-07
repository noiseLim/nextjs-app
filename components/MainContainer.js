import A from '../components/A';
import Head from 'next/head';

const MainContainer = ({ children, keyword }) => {
  return (
    <>
      <Head>
        <meta keyword={'nextjs' + keyword}></meta>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
        <title>Главная страница</title>
      </Head>
      <div>
        <div className='navbar'>
          <A href='/' text='Главная' />
          <A href='/users' text='Список пользователей' />
        </div>
      </div>
      <div className='children'>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: radial-gradient(
              ellipse at left bottom,
              rgba(22, 24, 47, 1) 0%,
              rgba(38, 20, 72, 0.9) 59%,
              rgba(17, 27, 75, 0.9) 100%
            );
            padding: 15px;
          }
          .children {
            padding: 10px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
