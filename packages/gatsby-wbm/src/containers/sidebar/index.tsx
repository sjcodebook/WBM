import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import _ from 'lodash';
// import Img from 'gatsby-image';
import FeaturePost from '../../components/feature-post/feature-post';
import Constants from '../../constants/constants';
// import PromotionImage from '../../images/ad.png';
import {
  SidebarWrapper,
  SidebarWidget,
  WidgetTitle,
  TagItem,
  // InstagramWrapper,
  // InstagramPhoto,
} from './style';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type SidebarProps = {};

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { visibility: { eq: true } } }
        limit: 5
      ) {
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
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `);

  const Posts = Data.allMdx.edges;
  const Tags = Data.allMdx.group;
  const randomNum = Math.floor(Math.random() * Constants.quotes.length);

  return (
    <SidebarWrapper>
      {/* <SidebarWidget>
        <WidgetTitle>Promotion</WidgetTitle>
        <a
          href="https://1.envato.market/r1jdv"
          aria-label="Get StoryHub"
          target="_blank"
        >
          <img src={PromotionImage} alt="Get StoryHub" />
        </a>
      </SidebarWidget> */}
      <SidebarWidget>
        <WidgetTitle>Latest Post</WidgetTitle>
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug;
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
          );
        })}
      </SidebarWidget>
      <SidebarWidget>
        <WidgetTitle>Random Quote</WidgetTitle>
        <Card style={{ minWidth: 275, background: '#f5f7fa' }} raised>
          <CardContent>
            <Typography variant="h5" component="h2">
              {Constants.quotes[randomNum].quote}
            </Typography>
            <Typography color="textSecondary">
              - {Constants.quotes[randomNum].author}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Tags</WidgetTitle>
        {Tags.map((tag: any) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>({tag.totalCount})</span>
            </Link>
          </TagItem>
        ))}
      </SidebarWidget>
      {/* <SidebarWidget>
        <WidgetTitle>Instagram</WidgetTitle>
        {InstagramPhotos ? (
          <InstagramWrapper>
            {InstagramPhotos.map(({ node }: any) => {
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
                <InstagramPhoto key={node.id}>
                  <a
                    href={`https://www.instagram.com/p/${node.id}`}
                    target="_blank"
                  >
                    <Img
                      fluid={node.localFile.childImageSharp.fluid}
                      alt="Instagram Photo"
                      backgroundColor={setColor}
                    />
                  </a>
                </InstagramPhoto>
              );
            })}
          </InstagramWrapper>
        ) : (
          ''
        )}
      </SidebarWidget> */}
    </SidebarWrapper>
  );
};

export default Sidebar;
