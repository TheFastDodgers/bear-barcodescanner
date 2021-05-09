import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonLink = styled(Link)`
  padding-bottom: 1em;
  text-decoration: none;
  color: #fff;
  margin-left: 1em;

  &:active,
  &:focus,
  &:hover {
    color: #1e90ff;
    cursor: pointer;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default ButtonLink;
