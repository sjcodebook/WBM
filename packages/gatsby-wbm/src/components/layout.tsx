import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import Navbar from './navbar/navbar';
import Newsletter from './newsletter/newsletter';
import Footer from './footer/footer';
import ScrollUpButton from './scroll-up-button/scroll-up-button';
import ResetCss from './reset-css';
import { theme } from '../theme';
import { Link } from 'gatsby';
import SpeedDialTooltipOpen from '../components/social-tray/social';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>

        {children}

        <Newsletter />
        <Footer>
          <Link to={'/privacy-policy'} activeClassName="active-link">
            {'Privacy Policy'}
          </Link>
          ||
          <Link to={'/disclaimer'} activeClassName="active-link">
            {'Disclaimer'}
          </Link>
          ||
          <Link to={'/terms'} activeClassName="active-link">
            {'Terms Of Use'}
          </Link>
          <br />
          Copyright &copy; {new Date().getFullYear()}
          <a href="https://webbrainsmedia.com"> WebBrainsMedia</a>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
        <SpeedDialTooltipOpen />
      </>
    </ThemeProvider>
  );
};

export default Layout;
