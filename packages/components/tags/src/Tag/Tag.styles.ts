import { ThemeProps } from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { TagShape } from './Tag';

const defaultStatusStyles = css`
  border-radius: 9px;
  font-size: 10px;
  height: 18px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  padding: 0 8px;
  line-height: 18px;
`;

type InsertShapeStyles = {
  shape?: TagShape;
  textColor?: string;
  color?: string;
  removable?: boolean;
  isActionable?: boolean;
} & ThemeProps;

const insertShapeStyles = (props: InsertShapeStyles): FlattenSimpleInterpolation => {
  switch (props.shape) {
    case TagShape.SMALL_SQUARE:
      return css`
        color: ${props.textColor || '#fff'};
        border-radius: 3px;
        font-size: 10px;
        height: 14px;
        line-height: 14px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.1px;
        padding: 0 4px;
      `;

    case TagShape.SMALL_ROUND:
      return css`
        color: ${props.textColor || '#fff'};
        border-radius: 8px;
        font-size: 10px;
        height: 14px;
        line-height: 14px;
        text-transform: uppercase;
        letter-spacing: 0.1px;
        padding: 0 4px;
      `;

    case TagShape.DEFAULT_ROUND:
      return css`
        color: ${props.textColor || '#fff'};
        border-radius: 12px;
        font-size: 13px;
        height: 24px;
        line-height: 24px;

        padding: ${props.removable ? '0' : '0 12px'};

        span {
          padding: ${props.removable ? '0 12px' : '0'};
        }

        ${props.isActionable &&
          css`
            &:hover {
              span {
                padding: ${props.removable ? '0 7px 0 12px' : '0'};
                width: calc(100% - 16px);
              }

              button {
                margin-left: -16px;
                left: 10px;
              }
            }
          `}
      `;

    case TagShape.DEFAULT_SQUARE:
      return css`
        color: ${props.textColor || '#fff'};
        border-radius: 3px;
        font-size: 13px;
        height: 24px;
        line-height: 24px;
        padding: 0 8px;
      `;

    case TagShape.SINGLE_CHARACTER_SQUARE:
      return css`
        color: ${props.textColor || '#fff'};
        border-radius: 12px;
        font-size: 13px;
        height: 24px;
        width: 24px;
        line-height: 24px;
        justify-content: center;
      `;

    case TagShape.SINGLE_CHARACTER_ROUND:
      return css`
        color: ${props.textColor || '#fff'};
        border-radius: 3px;
        font-size: 13px;
        height: 24px;
        width: 24px;
        line-height: 24px;
        justify-content: center;
      `;

    case TagShape.STATUS_NEUTRAL:
      return css`
        border: 1px solid ${props.color || props.theme.palette['grey-500']};
        color: ${props.textColor || props.color || props.theme.palette['grey-500']};
        ${defaultStatusStyles}
      `;

    case TagShape.STATUS_SUCCESS:
      return css`
        border: 1px solid ${props.theme.palette['green-600']};
        color: ${props.theme.palette['green-600']};
        ${defaultStatusStyles}
      `;

    case TagShape.STATUS_ERROR:
      return css`
        border: 1px solid ${props.theme.palette['red-600']};
        color: ${props.theme.palette['red-600']};
        ${defaultStatusStyles}
      `;

    case TagShape.STATUS_WARNING:
      return css`
        border: 1px solid ${props.theme.palette['yellow-600']};
        color: ${props.theme.palette['yellow-600']};
        ${defaultStatusStyles}
      `;

    default:
      return css``;
  }
};

type TagProps = {
  isStatusShape?: boolean;
  shape?: TagShape;
  color?: string;
  textColor?: string;
  removable?: boolean;
  disabled?: boolean;
  isActionable?: boolean;
} & ThemeProps;

export const Tag = styled.div<TagProps>`
  position: relative;
  margin: 4px;
  display: inline-flex;
  font-weight: 500;
  overflow: hidden;

  ${(props): FlattenSimpleInterpolation => insertShapeStyles(props)};

  ${(props: TagProps): FlattenSimpleInterpolation | false =>
    !!props.disabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `}

  ${(props: TagProps): FlattenSimpleInterpolation | false =>
    !props.isStatusShape &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props.color || props.theme.palette['grey-500']};
      }

      ${props.isActionable &&
        css`
          &:hover:before {
            filter: brightness(90%);
          }
        `};
    `}

  div.content {
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
  }

  img {
    width: 18px;
    height: 18px;
    margin: 0 4px 0 0;
  }

  span {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    color: #fff;
    height: 18px;
    width: 18px;
    border-radius: 10px;
    padding: 0;
    border: none;
    outline: none;
    margin: 3px 3px 3px 0;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: none;

    > div {
      position: relative;
      line-height: 16px;
      width: 100%;
      height: 100%;
    }

    &:before {
      background-color: ${(props): string => props.color || props.theme.palette['grey-500']};
      filter: brightness(70%);
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &:hover:before {
      filter: brightness(60%);
    }
  }

  .icon {
    && {
      transform: translate(1px, -3px);
    }
  }

  ${(props): FlattenSimpleInterpolation | false =>
    !!props.isActionable &&
    css`
      &:hover {
        button {
          display: inline-block;
        }
      }
    `};

  &:last-of-type {
    margin-right: 0;
  }
`;

export const DeleteButton = styled.div``;