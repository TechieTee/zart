import {
  darkNeutral,
  light,
  midNeutral,
  primary,
  secondary,
} from '@components/utils'
import styled from 'styled-components'

// STYLED COMPONENT
export const Title = styled.h6`
  font-size: 15px;
  color: ${midNeutral.inc2};
`
export const InputArea = styled.button`
  background: ${light.default};
  text-align: left;
  border: ${(props) =>
    props.btnStyleClicked ? '1.5px solid #1B69FB' : '1.5px solid #d1d1d1'};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    border: 1.5px solid ${primary.default};
  }
  &:focus {
    border: 1.5px solid ${primary.default};
    outline: none;
    &:hover {
      border: 1.5px solid ${primary.default};
      outline: none;
    }
  }
  span {
    color: ${midNeutral.inc3};
    font-size: 15px;
    float: left;
    width: 97%;
  }
`
export const InputAreaIcon = styled.span`
  float: right !important;
  width: 3% !important;
`

export const DropdownMenu = styled.div`
  position: absolute;
  margin-top: 2px;
  width: 600px;
  height: 280px;
  background: ${light.default};
  box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2),
    0px 0px 1px rgba(9, 30, 66, 0.31);
  border-radius: 3px;
  display: flex;
`
export const Menu = styled.ul`
  padding: 15px 0 8px 20px;
  width: 35%;
  height: 280px;
  list-style-type: none;
  border-radius: 3px 0 0 3px;
  background: ${light.inc2};
`
export const MenuItem = styled.li`
  font-size: 16px;
  line-height: 40px;
  font-weight: 500;
  color: ${darkNeutral.default};
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    background: #b8bfcb;
    border-radius: 4px 0px 0px 4px;
    color: ${light.default};
  }
  span {
    color: #f4f5f7;
    float: right;
    margin-right: 10px;
  }
  ${(props) => props.menuStyleSelected};
`
export const menuStyleSelected = {
  color: light.default,
  background: secondary.inc1,
  borderRadius: '4px 0px 0px 4px',
}
export const SubMenu = styled.div`
  width: 65%;
  height: 280px;
  border-radius: 0 2px 2px 0;
  background: ${light.default};
  z-index: 1;
`
export const SubMenuScrollBar = styled.div`
  overflow: auto;
  width: 99%;
  height: 260px;
  margin: 15px 0 0 0;
  background: ${light.default};
  text-align: left;

  ::-webkit-scrollbar {
    width: 11px;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${light.inc3};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${midNeutral.inc1};
    outline: none;
    border-radius: 5px;
  }
`

export const Prefix = styled.h5`
  font-size: 16px;
  font-weight: normal;
  margin-top: 120px;
  text-align: center;
  color: ${midNeutral.inc1};
`
