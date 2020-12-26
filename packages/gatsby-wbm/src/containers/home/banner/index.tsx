import React, { Fragment, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TelegramIcon from '@material-ui/icons/Telegram';
import FeaturePost from '../../../components/feature-post/feature-post';
import {
  AnnouncementWrapper,
  BannerWrapper,
  BannerInner,
  FeaturePosts,
  Title,
} from './style';

type BannerProps = {};

const Banner: React.FunctionComponent<BannerProps> = () => {
  const [announcement, setAnnouncement]: any = useState(null);

  useEffect(() => {
    setAnnouncement(() => (
      <AnnouncementWrapper>
        <Typography variant="h5">
          <Link
            href="https://t.me/webbrainsmedia"
            target="_blank"
            rel="noopener"
            style={{ color: '#e05a7b', textDecoration: 'none' }}
          >
            Join The Exclusive Telegram Developer Channel For Free By Clicking
            Here (500+ Awesome Devs Already Joined) <TelegramIcon />
          </Link>
        </Typography>
      </AnnouncementWrapper>
    ));
  }, []);

  const Data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
        filter: { frontmatter: { tags: { eq: "featured" } } }
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              visibility
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 90, maxHeight: 90, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const Posts = Data.allMdx.edges;

  return (
    <>
      {announcement}
      <BannerWrapper>
        <BannerInner>
          <FeaturePosts>
            <Title>Featured Posts</Title>
            {Posts.map(({ node }: any) => {
              const title = node.frontmatter.title || node.fields.slug;
              const visibility = node.frontmatter.visibility
                ? node.frontmatter.visibility
                : false;
              // Random Placeholder Color
              const placeholderColors = [
                '#55efc4',
                '#81ecec',
                '#74b9ff',
                '#a29bfe',
                '#ffeaa7',
                '#fab1a0',
                '#e17055',
                '#0984e3',
                '#badc58',
                '#c7ecee',
              ];
              const setColor =
                placeholderColors[
                  Math.floor(Math.random() * placeholderColors.length)
                ];

              return (
                <Fragment key={node.fields.slug}>
                  {visibility ? (
                    <FeaturePost
                      key={node.fields.slug}
                      title={title}
                      image={
                        node.frontmatter.cover == null
                          ? null
                          : node.frontmatter.cover.childImageSharp.fluid
                      }
                      url={node.fields.slug}
                      tags={node.frontmatter.tags}
                      placeholderBG={setColor}
                    />
                  ) : (
                    ''
                  )}
                </Fragment>
              );
            })}
          </FeaturePosts>
        </BannerInner>
      </BannerWrapper>
    </>
  );
};

export default Banner;
