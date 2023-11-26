import { useEffect, useState } from "react";
import React from "react";
import { Button, Space, Table, Modal } from "antd";

const TableApp = () => {
  let [beers, setBeers] = useState([]);
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedBeer, setSelectedBeer] = useState(null);

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  
  const showModal = (beer) => {
    setSelectedBeer(beer);
  };
  
  const handleOk = () => {
    setSelectedBeer(null);
  };
  
  const handleCancel = () => {
    setSelectedBeer(null);
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "name",
    });
  };
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      filteredValue: filteredInfo.name || null,
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      // ... other properties
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Tagline",
      dataIndex: "tagline",
      key: "tagline",
      filters: beers.map((item) => ({
        text: item.tagline,
        value: item.tagline,
      })),
      onFilter: (value, record) => record.tagline.trim().toLowerCase().includes(value.trim().toLowerCase()),
    },
    
    {
      title: "Info",
      render: (text, record) => (
        <Button onClick={() => showModal(record)} type="primary">
          Info
        </Button>
      ),
    },
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort name</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={beers} onChange={handleChange} />
      <Modal
        title="Information"
        open={selectedBeer !== null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedBeer && (
          <div key={selectedBeer.id}>
            <p>ID: {selectedBeer.id}</p>
            <p>Name: {selectedBeer.name}</p>
            <p>Tagline: {selectedBeer.tagline}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default TableApp;
