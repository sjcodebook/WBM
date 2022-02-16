import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/webbrainsmedia',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/webbrainsmedia/',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/jainsahil846',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/in/sjcodebook/',
    tooltip: 'Linked In',
  },
  {
    icon: <FaTelegramPlane />,
    url: 'https://t.me/webbrainsmedia',
    tooltip: 'Telegram',
  },
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      {/* <AboutPageTitle>
        <h2>About WebBrainsMedia</h2>
      </AboutPageTitle> */}

      {/* <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage> */}

      <AboutDetails>
        <h2>Hey there, what’s up?</h2>
        <p>
          WebBrainsMedia is a tech blog created with the sole purpose of
          explaining complex tech in a simple and concise way thus creating
          value for budding developers out there.
        </p>
        <p>
          Here you will find blogs on the latest tech, tutorials on programming
          languages, explanations to data structure and algorithm concepts and
          questions, and much more... So stay tuned!!
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
