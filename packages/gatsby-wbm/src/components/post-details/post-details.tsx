import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Avatar } from '@material-ui/core';
import SanmatiImage from '../../images/sanmati.jpg';
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostAuthor,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from './post-details.style';

type PostDetailsProps = {
  title: string;
  date?: string;
  preview?: any;
  description: any;
  tags?: [];
  className?: string;
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  preview,
  description,
  tags,
  className,
  ...props
}) => {
  const [authorTag, setAuthorTag]: any = useState(null);
  const addClass: string[] = ['post_details'];

  useEffect(() => {
    setAuthorTag(
      <PostAuthor>
        <div style={{ display: 'flex', float: 'left' }}>
          <Avatar alt="Sanmati Kumar Jain" src={SanmatiImage} />
        </div>
        <div
          style={{
            display: 'inline-block',
            marginLeft: '10px',
            marginTop: '10px',
          }}
        >
          <a href="https://twitter.com/jainsanmati846" target="_blank">
            Sanmati Kumar Jain
          </a>
        </div>
      </PostAuthor>
    );
  }, []);

  if (className) {
    addClass.push(className);
  }

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
    placeholderColors[Math.floor(Math.random() * placeholderColors.length)];

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>
      <PostDate>{date}</PostDate>
      <PostTitle>{title}</PostTitle>
      {authorTag}
      {preview == null ? null : (
        <PostPreview className="post_preview">
          <Img fluid={preview} alt={title} backgroundColor={setColor} />
        </PostPreview>
      )}

      <PostDescriptionWrapper className="post_des_wrapper">
        <PostDescription className="post_des">
          <MDXRenderer>{description}</MDXRenderer>
        </PostDescription>
        {tags == null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

export default PostDetails;
