import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import React, {
  useMemo,
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
} from "react";
import {
  useColumnOrder,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";

import arrowLeft from "../../assets/icons/pagination-arrow-left.svg";
import arrowRight from "../../assets/icons/pagination-arrow-right.svg";
import Button from "../../../UI/Button/Button";
import { Checkbox } from "./Checkbox";
import classes from "./Table.module.css";
import ColHeader from "./ColHeader";
import filterCloseIcon from "../../assets/icons/filter-close-icon.svg";
import filterCloseIconHover from "../../assets/icons/filter-close-icon-hover.svg";
import FilterCustomMenu from "./Filter/FilterCustomMenu";
import FilterListDropdown from "./Filter/FilterListDropdown";
import GlobalSearch from "./GlobalSearch";
import { Item } from "./Item";
import Tooltip from "../../../Tooltip/Tooltip";

const iconList = {
  danger: {
    className: "dangerRowIcon",
  },

  default: {
    className: "defaultRowIcon",
  },

  success: {
    className: "successRowIcon",
  },

  warning: {
    className: "warningRowIcon",
  },
};

function prepareRenderElement(data) {
  const reactElement = data.filter((value) => React.isValidElement(value));
  return reactElement;
}

const Table = ({
  rowDeletionRequired,
  actionIconConfig,
  removeRowHandler,
  getRowObjectRequired,
  dataReRender,
  getRowObjectHandler,
  pageSize,
  tableColumns,
  tableData,
  filterRequired,
  sortingRequired,
  searchRequired,
  columnReordering,
  paginationRequired,
  selectionRequired,
  searchPlaceholder,
  rowSelectionHandler,
  searchStyles,
  tableHeaderContent,
  disableTableEmptyText,
  rowEvent,
}) => {
  const [filterList, setFilterList] = useState([]);
  const [tempFilterColumn, setTempFilterColumn] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [visible, setVisible] = useState(false);

  const columns = useMemo(
    () => tableColumns,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const data = useMemo(
    () => tableData,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataReRender && tableData]
  );

  useEffect(
    () => {
      filterRequired && setAllFilters(filterArr);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterArr]
  );
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  let useSelection = selectionRequired
    ? (hooks) => {
        hooks.visibleColumns.push((columns) => [
          {
            id: "selection",
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <Checkbox {...getToggleAllPageRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
            disableSortBy: true,
            style: {
              width: "30px",
            },
            disableDrag: true,
          },
          ...columns,
        ]);
      }
    : "";
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length;

    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  }

  const arrayFilterFn = (rows, id, filterValue) => {
    return rows.filter((row) => {
      const rowValue = row.values[id];
      return rowValue !== undefined ? filterValue.includes(rowValue) : true;
    });
  };
  arrayFilterFn.autoRemove = (val) => {
    return !val;
  };

  const filterTypes = React.useMemo(
    () => ({
      arraySearch: arrayFilterFn,
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // selectedFlatRows,
    page,

    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    setAllFilters,
    preFilteredRows,

    // pageOptions,
    isAllRowsSelected,
    state,
    // gotoPage,
    allColumns,
    visibleColumns,
    setColumnOrder,
    // getToggleHideAllColumnsProps,
    preGlobalFilteredRows,
    setGlobalFilter,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      filterTypes,
    },

    filterRequired && useFilters,
    columnReordering && useColumnOrder,
    searchRequired && useGlobalFilter,
    sortingRequired && useSortBy,
    usePagination,
    useRowSelect,
    useSelection
  );

  useLayoutEffect(
    () => setPageSize(pageSize),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const { pageIndex } = state;

  visibleColumns.forEach((column) => (column.lastItem = false));
  visibleColumns[visibleColumns?.length - 1].lastItem = true;

  useEffect(() => {
    if (rowSelectionHandler) {
      rowSelectionHandler(isAllRowsSelected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllRowsSelected]);

  const arrangeColumn = (result) => {
    if (result.destination === null) {
      alert("Cant drop column outside column box!!!");
      return;
    }
    let tempColumns = columns;

    let source = selectionRequired
      ? result.source.index - 1
      : result.source.index;
    let destination = selectionRequired
      ? result.destination.index - 1
      : result.destination.index;
    let tempColumn = tempColumns.splice(source, 1);
    tempColumns.splice(destination, 0, ...tempColumn);
    let columnArrangement = tempColumns.map((column) => column.accessor);
    setColumnOrder(columnArrangement);
  };

  const handleItemSelection = (id, filterStr) => {
    // if item already exists, remove item
    if (
      filterArr.find(
        (filter) => filter.id === id && filter.value.includes(filterStr)
      )
    ) {
      const editingData = filterArr.filter((item) =>
        item.value.includes(filterStr)
      );

      const itemId = editingData[0].value.indexOf(filterStr);
      editingData[0].value.splice(itemId, 1);

      if (editingData[0].value.length < 1)
        filterArr.splice(filterArr.indexOf(editingData[0]));

      return setFilterArr([...filterArr]);
    }
    // else if item doesn't exists, add item
    else if (
      filterArr.find(
        (filter) => filter.id === id && !filter.value.includes(filterStr)
      )
    ) {
      const editingData = filterArr.find((filter) => filter.id === id);
      const newData = [...filterArr];
      editingData.value.push(filterStr);

      return setFilterArr([...newData]);
    }
    // add item
    return setFilterArr((prevState) => [
      ...prevState,
      { id, value: [filterStr] },
    ]);
  };

  const handleFilterUpdate = () => {
    setFilterList(tempFilterColumn);
    setVisible(false);
  };

  const options = (
    <>
      <p className={classes.dropDownTip}>Sort column view</p>
      <div className={classes.dropdownItems}>
        {allColumns.map((column, index) => {
          return column.id !== "selection" && column.fixedColumn !== true ? (
            <div key={column.id}>
              <Item column={column} />
            </div>
          ) : null;
        })}
      </div>
    </>
  );

  const getValues = (id, flatRows) => {
    let uniqueValues = new Set();
    flatRows.forEach((row) => uniqueValues.add(row.values[id]));

    return [...uniqueValues.values()];
  };

  const handleFilterRemoval = (id) => {
    let filterID = id.split(",")[0];
    setTempFilterColumn(tempFilterColumn.filter((column) => column !== id));
    setFilterList(filterList.filter((item) => item !== id));
    setFilterArr([...filterArr.filter((item) => item.id !== filterID)]);
    setAllFilters(filterArr);
  };

  const handleOutsideClick = (e) => {
    dropdownRef?.current?.contains(e.target) === false && setVisible(false);
  };

  return (
    <>
      <table {...getTableProps()}>
        {(filterRequired || searchRequired) && (
          <caption>
            <div className="d-inline-flex">
              {tableHeaderContent}
              {searchRequired && (
                <GlobalSearch
                  searchStyles={searchStyles}
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                  placeholder={searchPlaceholder}
                />
              )}
              {filterRequired && (
                <>
                  <span>
                    {filterList.length === 0 && (
                      <span
                        style={{ display: "inline-block", margin: "0 30px" }}>
                        Showing:{" "}
                        <span
                          style={{
                            fontWeight: 600,
                            color: "#193B68",
                          }}>
                          {" "}
                          All
                        </span>
                      </span>
                    )}
                  </span>

                  <div
                    ref={dropdownRef}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      marginLeft: "10px",
                    }}>
                    <div onClick={() => setVisible(!visible)}>
                      <Button
                        btnStyle="default"
                        style={{
                          width: 100,
                          color: "#193B68",
                          fontWeight: 500,
                          fontSize: "18px",
                        }}>
                        + Filter
                      </Button>
                    </div>
                    <div
                      className={classes.filterDropdownWrapper}
                      style={{
                        display: visible ? "inline-block" : "none",
                      }}>
                      <FilterListDropdown
                        allColumns={allColumns}
                        handleFilterRemoval={handleFilterRemoval}
                        filterList={tempFilterColumn}
                        setFilterList={setTempFilterColumn}
                        handleFilterUpdate={handleFilterUpdate}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {filterList.length > 0 && (
              <div
                style={{
                  margin: "10px 10px 0 0px",
                  display: "block",
                }}>
                {filterList?.map((item, id) => {
                  let splittedItem = item.split(",");
                  let columnId = splittedItem[0];
                  const list = getValues(columnId, preFilteredRows);

                  const columnHeader = splittedItem[1];

                  return (
                    <div key={id} className={classes.filterBox}>
                      <button
                        className={classes.filterIcon}
                        onClick={() => handleFilterRemoval(item)}>
                        {" "}
                        <img
                          src={filterCloseIcon}
                          onMouseOver={(e) =>
                            (e.currentTarget.src = filterCloseIconHover)
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.src = filterCloseIcon)
                          }
                          width={20}
                          alt=""
                        />{" "}
                      </button>
                      <span>{splittedItem[1]}:</span>

                      <FilterCustomMenu
                        items={list}
                        columnHeader={columnHeader}
                        columnId={columnId}
                        handleItemSelection={handleItemSelection}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </caption>
        )}

        <thead>
          {headerGroups?.map((headerGroup, i) => (
            <DragDropContext onDragEnd={arrangeColumn} key={i}>
              <Droppable droppableId="droppeable-1" direction="horizontal">
                {(provided, snapshot) => (
                  <tr
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, i) => (
                      <Draggable
                        key={column.id}
                        draggableId={column.id}
                        index={i}
                        isDragDisabled={
                          column.disableDrag === true ||
                          columnReordering === false ||
                          column.id === "selection"
                        }>
                        {(provided, snapshot) => (
                          <ColHeader
                            key={i}
                            dragHandle={provided.dragHandleProps}
                            dragProps={provided.draggableProps}
                            innerRef={provided.innerRef}
                            column={column}
                            sortingRequired={sortingRequired}
                            columnReordering={columnReordering}
                            filterRequired={filterRequired}
                            isDragging={snapshot.isDragging}
                            options={options}
                            {...column.getHeaderProps(
                              sortingRequired && column.getSortByToggleProps()
                            )}
                          />
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </tr>
                )}
              </Droppable>
            </DragDropContext>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.length > 0 ? (
            page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  onClick={() => {
                    return rowEvent ? rowEvent(row) : null;
                  }}
                  className={classes.tableRow}
                  key={i}
                  {...getTableBodyProps()}>
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        className={
                          cell.column.lastItem ? classes.lastCell : undefined
                        }
                        onMouseDown={() =>
                          getRowObjectRequired && getRowObjectHandler(cell)
                        }
                        key={i}
                        {...cell.getCellProps()}
                        style={cell.style}>
                        {Array.isArray(cell.value)
                          ? cell.render(prepareRenderElement(cell.value))
                          : cell.render("Cell")}
                        {cell.column.lastItem && (
                          <div className={classes.iconTray}>
                            {actionIconConfig?.map((icon, i) => {
                              let className = iconList[icon?.type].className;

                              return (
                                <div
                                  key={i}
                                  onClick={() =>
                                    icon.clickHandler(cell?.row?.index)
                                  }
                                  className={classes[className]}
                                  style={icon?.styles}>
                                  <Tooltip
                                    style={{ display: "inline-block" }}
                                    offset={{ bottom: 10 }}
                                    label={icon?.content}>
                                    <span>{icon?.tooltipText}</span>
                                  </Tooltip>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        {rowDeletionRequired
                          ? cell.column?.lastItem && (
                              <div className={classes.deleteOverlay}>
                                <Button
                                  btnSize="btn-sm"
                                  clicked={() =>
                                    removeRowHandler(cell?.row?.index)
                                  }
                                  style={{
                                    padding: "2px 8px",
                                    fontSize: "12px",
                                  }}
                                  btnStyle="danger">
                                  Remove
                                </Button>
                              </div>
                            )
                          : null}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : !disableTableEmptyText ? (
            <tr>
              <td className={classes.nodata} colSpan={visibleColumns?.length}>
                No Data
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>

      {paginationRequired ? (
        canNextPage || canPreviousPage ? (
          <div className={classes.paginationContainer}>
            <span>
              Showing
              {"  "}
              {(pageIndex + 1) * pageSize - pageSize + 1} -{" "}
              {canNextPage ? (pageIndex + 1) * pageSize : tableData?.length} of{" "}
              {tableData?.length}
            </span>
            <button
              className={classes.paginateButton}
              onClick={() => previousPage(0)}
              disabled={!canPreviousPage}>
              <img src={arrowLeft} alt={"previous page"} height={15} />
            </button>

            <button
              className={classes.paginateButton}
              onClick={() => nextPage()}
              disabled={!canNextPage}>
              <img src={arrowRight} alt={"next page"} height={15} />
            </button>
          </div>
        ) : null
      ) : null}
    </>
  );
};

Table.propTypes = {
  rowDeletionRequired: PropTypes.bool,
  actionIconConfig: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      styles: PropTypes.object,
      clickHandler: PropTypes.func.isRequired,
      content: PropTypes.string,
      tooltipText: PropTypes.string,
    })
  ),
  removeRowHandler: PropTypes.func,
  getRowObjectRequired: PropTypes.bool,
  dataReRender: PropTypes.bool,
  getRowObjectHandler: PropTypes.func,
  pageSize: PropTypes.number,
  tableColumns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      accessor: PropTypes.string,
      disableFilters: PropTypes.bool,
      disableSortBy: PropTypes.bool,
      filter: PropTypes.string.isRequired,
    })
  ).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object),
  filterRequired: PropTypes.bool,
  sortingRequired: PropTypes.bool,
  searchRequired: PropTypes.bool,
  columnReordering: PropTypes.bool,
  paginationRequired: PropTypes.bool,
  selectionRequired: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  rowSelectionHandler: PropTypes.func,
  searchStyles: PropTypes.object,
  tableHeaderContent: PropTypes.elementType,
  disableTableEmptyText: PropTypes.bool,
  rowEvent: PropTypes.func,
};

Table.defaultProps = {
  pageSize: 10,
  filterRequired: false,
  sortingRequired: false,
  searchRequired: true,
  columnReordering: false,
  paginationRequired: true,
  selectionRequired: false,
  getRowObjectRequired: false,
  dataReRender: false,
  rowDeletionRequired: false,
  searchStyles: { type: "inactive", boxWidth: null },
  tableHeaderContent: null,
  disableTableEmptyText: false,
  tableData: [],
};

export default Table;
