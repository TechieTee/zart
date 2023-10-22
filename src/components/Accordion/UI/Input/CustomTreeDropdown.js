import React, { useState } from 'react'
import styled from 'styled-components'
import TreeSelect from 'antd/es/tree-select'
import 'antd/dist/antd.css'
import { midNeutral } from '@components/utils'
import { ArrowDropDown } from '../../Shared/SvgIcons'

const Data = [
  {
    title: 'Nigeria',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Zone 1',
        value: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: 'Zone 1 Police Headquaters',
            value: '0-0-0-1',
            key: '0-0-0-1',
          },
          {
            title: 'Zone 1 Police Headquaters',
            value: '0-0-0-2',
            key: '0-0-0-2',
          },
          {
            title: 'Zone 1 Police Headquaters',
            value: '0-0-0-3',
            key: '0-0-0-3',
          },
        ],
      },
      {
        title: 'Zone 2',
        value: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: 'Zone 2 Police Headquaters',
            value: '0-0-1-4',
            key: '0-0-1-4',
          },
          {
            title: 'Zone 2 Police Headquaters',
            value: '0-0-1-5',
            key: '0-0-1-5',
          },
          {
            title: 'Zone 2 Police Headquaters',
            value: '0-0-1-6',
            key: '0-0-1-6',
          },
        ],
      },
      {
        title: 'Zone 3',
        value: '0-0-2',
        key: '0-0-2',
        children: [
          {
            title: 'Zone 3 Police Headquaters',
            value: '0-0-2-7',
            key: '0-0-2-7',
          },
          {
            title: 'Zone 3 Police Headquaters',
            value: '0-0-2-8',
            key: '0-0-2-8',
          },
          {
            title: 'Zone 3 Police Headquaters',
            value: '0-0-2-9',
            key: '0-0-2-9',
          },
        ],
      },
      {
        title: 'Zone 4',
        value: '0-0-3',
        key: '0-0-3',
        children: [
          {
            title: 'Zone 4 33Police Headquaters',
            value: '0-0-3-10',
            key: '0-0-3-10',
          },
          {
            title: 'Zone 4 Police Headquaters',
            value: '0-0-3-11',
            key: '0-0-3-11',
          },
          {
            title: 'Zone 4 Police Headquaters',
            value: '0-0-3-12',
            key: '0-0-3-12',
          },
        ],
      },
    ],
  },
]

const { SHOW_PARENT } = TreeSelect

const CustomTreeDropdown = (props) => {
  const { title, titleIcon, treeData } = props
  // States to manage current value
  const [value, setValue] = useState()
  const onChange = () => {
    setValue(value)
  }
  return (
    <>
      <H6>
        {title}
        {titleIcon}
      </H6>
      <CustomTreeDropdownWrapper>
        <TreeSelect
          treeData={treeData}
          value={value}
          onChange={onChange}
          treeCheckable={true}
          showCheckedStrategy={SHOW_PARENT}
          placeholder={'Select'}
          allowClear
          style={{
            width: '100%',
          }}
        />
        <InputIcon>
          {' '}
          <ArrowDropDown />
        </InputIcon>
      </CustomTreeDropdownWrapper>
    </>
  )
}

CustomTreeDropdown.defaultProps = {
  title: '',
  titleIcon: '',
  treeData: { Data },
}
export default CustomTreeDropdown

const H6 = styled.h6`
  font-size: 15px;
  color: ${midNeutral.inc2};
`
const CustomTreeDropdownWrapper = styled.div`
  position: relative;
  /* CUSTOM TREE DROPDOWN */
  .ant-select-tree {
    padding: 5px 0 10px 0 !important;
  }

  .ant-select-tree .ant-select-tree-treenode {
    margin: 4px;
    font-size: 15px;
    color: #505f79;
  }

  .ant-select-focused:not
    .ant-select-multiple
    .ant-select-allow-clear
    .ant-select-show-search {
    outline: none !important;
    border-radius: 4px !important;
    padding: 7px 4px;
    border: 1.5px solid #bb3030 !important;
  }
  .ant-select-selection-overflow {
    overflow: auto;
    max-width: 100%;
  }

  .ant-tree-select-dropdown
    .ant-select-tree-list-holder-inner
    .ant-select-tree-treenode {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .ant-select-multiple .ant-select-selection-item-remove {
    padding: 4px;
    margin: 0 -4px 0 0;
    border-radius: 0 3px 3px 0;
  }
  .ant-select-multiple .ant-select-selection-item-remove:hover {
    color: #e12323 !important;
    cursor: pointer;
    background-color: rgb(240 140 140 / 30%);
  }

  .ant-select-multiple .ant-select-selection-item-remove svg {
    display: inline-block;
    margin: 0 0 11px 0;
  }

  .ant-select-tree .ant-select-tree-treenode:hover {
    background-color: #f5f5f5;
    border-radius: 3px;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 4px !important;
    padding: 7px 4px;
    border: 1.5px solid #d1d1d1 !important;
  }
  .ant-select-multiple .ant-select-selection-placeholder {
    color: #505f79;
    font-size: 15px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector:hover {
    border: 1.5px solid #bfbfbf !important;
    cursor: pointer !important;
  }
  .ant-select-focused:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: 0 0 0 2px rgb(27 105 251 / 60%) !important;
  }

  .ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner {
    background-color: #fff !important;
  }
  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    cursor: text;
    width: 100%;
  }
`
const InputIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
  color: #505f79;
`
