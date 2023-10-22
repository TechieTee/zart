import styled, { css } from 'styled-components/macro'
import { light } from '../../../utils/colors'

export const ScrollOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  min-height: 100%;
  background: rgba(2, 19, 51, 0.5);
  display: flex;
  justify-content: center;
  padding: 100px;
`

export const StyledModal = styled.div`
  display: inline-block;
  position: relative;
  background: ${light.default};

  /* min-height: 100%; */
  vertical-align: middle;
  border-radius: 3px;
  width: 100%;
  height: fit-content;
  /* box-shadow: ''; */
  filter: drop-shadow(0px 3px 5px rgba(9, 30, 66, 0.2)),
    drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31));
  ${(props) => modalSizes[props.modalSize]}
`

const modalSizes = {
  sm: css`
    max-width: 550px;
  `,
  md: css`
    max-width: 700px;
  `,
  lg: css`
    max-width: 950px;
  `,
}

export const ModalHeader = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 22px;
  width: 100%;
  ${(props) =>
    props.border &&
    css`
      box-shadow: inset 0px -2px 0px #e5e5e6;
    `}
  img {
    display: inline-block;
  }
  h3 {
    display: inline-block;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }
`

export const ModalFooter = styled.div`
  padding: 22px;
  display: flex;
  justify-content: flex-end;
  ${(props) =>
    props.border &&
    css`
      box-shadow: inset 0px 2px 0px #e5e5e6;
    `}
`

// export const ModalContent = styled.div`
//   margin: 22px;
// overflow: auto;
// overflow-x: hidden;
//   resize: none;
//   height: 100%;
//   max-height: 200px;
//   p{
//       margin:0
//   }

//   &::-webkit-scrollbar-track{
//       background-color: #EBECF0;
//   }

//   &::-webkit-scrollbar{
//       width: 10px;
//       background-color: #EBECF0;;
//   }

//   &::-webkit-scrollbar-thumb{
//       border-radius: 100px;
//       background-color: #505F79;
//   }

// `

export const ModalContent = styled.div`
  margin: 22px;
  ${'' /* overflow: auto;
overflow-x: hidden; */}
  ${'' /* height: 100%;
max-height: 500px; */}
p {
    margin: 0;
  }
  ${
    '' /* 
&::-webkit-scrollbar-track {
  background-color: #ebecf0;
}

&::-webkit-scrollbar {
  width: 10px;
  background-color: #ebecf0;
}

&::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: #505f79;
} */
  }
`
