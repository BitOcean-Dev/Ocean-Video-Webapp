import React from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children: any
}

const Layout = (props: Props) =>
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>;

export default Layout;
