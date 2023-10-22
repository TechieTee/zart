import React from 'react';
import classes from './Table.module.css';
import UpArrow from '../../assets/icons/single-up-arrow.svg';
import { DropDown } from '../Dropdown/DropDown';
import DownArrow from '../../assets/icons/single-down-arrow.svg';
import Nav from '../../assets/icons/navigation-icon.svg';
import DragIcon from '../../assets/icons/drag-icon.svg';

const ColHeader = ({
  dragProps,
  dragHandle,
  column,
  isDragging,
  sortingRequired,
  columnReordering,
  options,
  filterRequired,
  innerRef,
}) => {
  return (
    <th
      {...dragHandle}
      ref={innerRef}
      className={[
        classes.thead,
        isDragging ? classes.dragToggleBgColor : '',
      ].join(' ')}
      {...column.getHeaderProps(
        sortingRequired && column.getSortByToggleProps()
      )}
      {...dragProps}
      style={{
        ...dragProps.style,
        ...column.style,
        cursor: !column.disableDrag ? 'all-scroll' : 'default',
        WebkitCursor: !column.disableDrag ? 'all-scroll' : 'default',
      }}>
      <span className={column.lastItem ? classes.textContainer : ''}>
        {column.disableDrag !== true && columnReordering === true ? (
          <span className={classes.dragIcon}>
            <img src={DragIcon} width="5" alt="" />
          </span>
        ) : null}
        <span style={{ display: 'inline-block' }}>
          {column.render('Header')}
        </span>
      </span>

      <div className={classes.featureContainer}>
        {sortingRequired && column.canSort ? (
          <div className={classes.sortIconContainer}>
            {column.isSorted && !column.isSortedDesc ? (
              <>
                <img
                  src={UpArrow}
                  className={classes.sortIcon}
                  alt="arrow-up-icon"
                  style={{ opacity: 1 }}
                />
                <img
                  src={DownArrow}
                  className={classes.sortIcon}
                  alt="arrow-down-icon"
                  style={{ opacity: 0.4 }}
                />
              </>
            ) : column.isSorted && column.isSortedDesc ? (
              <>
                <img
                  src={UpArrow}
                  className={classes.sortIcon}
                  alt="arrow-up-icon"
                  style={{ opacity: 0.4 }}
                />
                <img
                  src={DownArrow}
                  className={classes.sortIcon}
                  alt="arrow-down-icon"
                  style={{ opacity: 1 }}
                />
              </>
            ) : (
              <>
                <img
                  src={UpArrow}
                  className={classes.sortIcon}
                  alt="arrow-up-icon"
                  style={{ opacity: 0.4 }}
                />
                <img
                  src={DownArrow}
                  className={classes.sortIcon}
                  alt="arrow-down-icon"
                  style={{ opacity: 0.4 }}
                />
              </>
            )}
          </div>
        ) : (
          ''
        )}
        {columnReordering && column.lastItem ? (
          <DropDown
            mainIcon={Nav}
            options={options}
            optionStyle={{
              backgroundColor: '#FFFFFF',
              width: '168px',
              height: 'maxHeight',
              color: ' #193B68',
              position: 'absolute',
              top: '45px',
              right: '0px',
              boxShadow: ' 0px 0px 12px rgba(0, 0, 0, 0.25)',
            }}
          />
        ) : null}
      </div>
    </th>
  );
};

export default ColHeader;
