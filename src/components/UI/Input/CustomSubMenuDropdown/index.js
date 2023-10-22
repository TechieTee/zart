import React, { useState, useEffect, useRef } from 'react'
import { ArrowDropDown, ChevronRight, InfoIcon } from '../../../Shared/SvgIcons'
import {
  DropdownMenu,
  InputArea,
  MenuItem,
  Menu,
  SubMenu,
  SubMenuScrollBar,
  Title,
  Prefix,
  menuStyleSelected,
  InputAreaIcon,
} from './styles'

function useDropdownVisible(initialIsVisible) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(initialIsVisible)

  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropdownVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isDropdownVisible, setIsDropdownVisible }
}

const SubMenuDropdown = ({
  title = '',
  titleIcon = <InfoIcon />,
  placeholder = '',
  value = '',
  menuData = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const { ref, isDropdownVisible, setIsDropdownVisible } = useDropdownVisible(
    false
  )

  function toggleDropdown(e) {
    setIsDropdownVisible((prevState) => !prevState)
  }

  useEffect(() => {
    if (value !== '') {
      setIsDropdownVisible((prevState) => !prevState)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div ref={ref}>
      <Title>
        {title}
        {titleIcon}
      </Title>
      <InputArea btnStyleClicked={isDropdownVisible} onClick={toggleDropdown}>
        {' '}
        <span>{value || placeholder} </span>
        <InputAreaIcon>
          {' '}
          <ArrowDropDown />
        </InputAreaIcon>
      </InputArea>
      {isDropdownVisible && (
        <DropdownMenu>
          <Menu>
            {menuData?.map((menu, index) => (
              <MenuItem
                onClick={() => setCurrentIndex(index)}
                menuStyleSelected={index === currentIndex && menuStyleSelected}
              >
                {menu.title}
                <span>
                  <ChevronRight />
                </span>
              </MenuItem>
            ))}
          </Menu>
          <SubMenu>
            {menuData?.length > 0 ? (
              menuData?.map((subMenu, index) => (
                <>
                  {index === currentIndex && (
                    <SubMenuScrollBar>{subMenu.component} </SubMenuScrollBar>
                  )}{' '}
                </>
              ))
            ) : (
              <Prefix>Select an Application</Prefix>
            )}
          </SubMenu>
        </DropdownMenu>
      )}
    </div>
  )
}

export default SubMenuDropdown
