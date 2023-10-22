import React from 'react';
import Check from 'rc-checkbox';
import classes from '../Table.module.css';
import Button from '../../../../UI/Button/Button';

const FilterListDropdown = ({
  allColumns,
  filterList,
  handleFilterRemoval,
  setFilterList,
  handleFilterUpdate,
}) => {
  return (
    <div className={classes.filterDropdownContainer}>
      <span className={classes.filterHeader}>Filter by</span>

      {allColumns.map((column, id) => {
        let filter = filterList.find(
          (item) => item === column.id + ',' + column.Header
        );
        return (
          column.id !== 'selection' &&
          column.canFilter && (
            <li
              style={{
                padding: 0,
                listStyle: 'none',
              }}
              key={column.id + ',' + column.Header}>
              <label
                className={classes.filterDropdownLabel}
                htmlFor={column.id}
                style={{
                  fontWeight: filter ? '500' : '400',
                  color: filter ? '#193B68' : '#63768E',
                }}>
                <Check
                  id={column.id}
                  checked={filter}
                  onChange={(e) => {
                    e.stopPropagation();
                    return e.target.checked
                      ? setFilterList([
                          ...filterList,
                          column.id + ',' + column.Header,
                        ])
                      : handleFilterRemoval(column.id + ',' + column.Header);
                  }}
                  style={{
                    marginRight: '12px',
                  }}
                />{' '}
                <span> {column.Header}</span>
              </label>
            </li>
          )
        );
      })}
      <Button
        onClick={handleFilterUpdate}
        style={{
          margin: '4px 0',
          padding: '7px 20px',
          color: filterList.length > 0 ? 'white' : '#DADADA',
          backgroundColor: filterList.length > 0 ? '#193B68' : '#F8F8F8',
          lineHeight: '20px',
          borderRadius: '5px',
        }}>
        {' '}
        Update View{' '}
      </Button>
    </div>
  );
};

export default FilterListDropdown;
