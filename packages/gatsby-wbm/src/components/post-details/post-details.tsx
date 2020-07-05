import * as React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
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
  const addClass: string[] = ['post_details'];

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
      <PostTitle>{title}</PostTitle>
      <PostDate>{date}</PostDate>
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
