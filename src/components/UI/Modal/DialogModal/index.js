import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollOverlay,
  StyledModal,
} from './styles'
// import infoIcon from '../../../assets/icons/test-icon.svg'
// import errorIcon from '../../../assets/icons/upload.svg'
// import warningIcon from '../../../assets/icons/report.svg'
// import successIcon from '../../../assets/icons/view-icon.svg'
import Button from '../../Button/Button'
import isEmpty from 'lodash/isEmpty'

/*
    # --------------- #
    # Prop Types Def  #
    # --------------- #
*/
const propTypes = {
  iconStyle: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  className: PropTypes.string,
  modalSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  styles: PropTypes.object,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  ModalTitle: PropTypes.string,
  actionButton: PropTypes.arrayOf(PropTypes.object),
}

/*
    # --------------- #
    # Default Props  #
    # --------------- #
*/
const defaultProps = {
  iconStyle: 'success',
  className: undefined,
  modalSize: 'sm',
  styles: undefined,
  actionButton: [
    {
      id: 23,
      className: 'mr-3',
      btnStyle: 'primary',
      btnSize: 'btn-sm',
      children: 'Save',
    },
    {
      id: 223,
      btnStyle: 'default',
      btnSize: 'btn-sm',
      children: 'Cancel',
    },
  ],
  isOpen: false,
  toggleModal: () => {},
  ModalTitle: 'Modal Title',
}

/*
    # ---------------------------- #
    # Re-usable Hoook && Functions #
    # ---------------------------- #
*/
const useOnEscapeKeyDown = (isListening, onEscapeKeyDown) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.keyCode || event.charCode) === 27) {
        onEscapeKeyDown()
      }
    }

    if (isListening) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isListening, onEscapeKeyDown])
}

// function renderModalIcon({ iconStyle }) {
//   switch (iconStyle) {
//     case 'warning':
//       return <img className='mr-3' src={warningIcon} alt='warning-icon' />
//     case 'error':
//       return <img className='mr-3' src={errorIcon} alt='error-icon' />
//     case 'info':
//       return <img className='mr-3' src={infoIcon} alt='info-icon' />
//     case 'success':
//       return <img className='mr-3' src={successIcon} alt='success-icon' />

//     default:
//       break
//   }
// }

/*
    # ------------------- #
    # Main Component Def  #
    # ------------------- #
*/
function DialogModal({
  iconStyle,
  className,
  modalSize,
  styles,
  actionButton,
  isOpen,
  toggleModal,
  ModalTitle,
  children,
}) {
  // const isModalContent = !isEmpty(modalContent);

  useOnEscapeKeyDown(isOpen, toggleModal)
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <ScrollOverlay onClick={toggleModal}>
            <StyledModal
              onClick={(e) => e.stopPropagation()}
              {...styles}
              className={className}
              modalSize={modalSize}
            >
              <ModalHeader>
                {/* {renderModalIcon({ iconStyle })} */}
                <h3>{ModalTitle}</h3>
              </ModalHeader>
              <ModalContent>{children}</ModalContent>
              <ModalFooter>
                {actionButton.map((item, index) => {
                  return (
                    <Button key={item.id} {...item}>
                      {item.children}
                    </Button>
                  )
                })}
              </ModalFooter>
            </StyledModal>
          </ScrollOverlay>,
          modalRoot
        )}
    </>
  )
}

// const $root = document.getElementById("app");
const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.append(modalRoot)
DialogModal.propTypes = propTypes
DialogModal.defaultProps = defaultProps

export default DialogModal
