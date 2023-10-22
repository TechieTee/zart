//NODE TABLE DATA

export const nodeData = {
  nodeid: "N123-434354",
  status: "Unregistered",
  stationid: "1ZC-123-456-78",
};

//NODE TABLE HEADER
export const nodeColumns = [
  {
    Header: "Node ID",
    accessor: "node_id",
    disableFilters: true,
    style: {
      width: "20%",
    },
  },
  {
    Header: "Status",
    accessor: "status",
    disableFilters: true,
    style: {
      width: "20%",
    },
  },
  {
    Header: "Station ID",
    accessor: "station_id",
    disableFilters: true,
    style: {
      width: "35%",
    },
  },
];

export const nodeTableData = [
  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "unregistered",
    station_id: nodeData.stationid,
  },

  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "unregistered",
    station_id: nodeData.stationid,
  },
  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "unregistered",
    station_id: nodeData.stationid,
  },

  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "unregistered",
    station_id: nodeData.stationid,
  },
  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "unregistered",
    station_id: nodeData.stationid,
  },
  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "activated",
    station_id: nodeData.stationid,
  },
  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "activated",
    station_id: nodeData.stationid,
  },
  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "activated",
    station_id: nodeData.stationid,
  },
  {
    id: 1,
    node_id: nodeData.nodeid,
    status: "activated",
    station_id: nodeData.stationid,
  },
];
