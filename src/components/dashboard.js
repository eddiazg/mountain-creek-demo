import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faChartPie, faCogs, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [investments, setInvestments] = useState([]);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    const fetchInvestments = async () => {
      const response = await fetch('/investmentsData.json');
      const data = await response.json();
      setInvestments(data.investments);
      setSelectedInvestment(data.investments[0]);
    };
    fetchInvestments();
  }, []);

  const handleDropdownChange = (e) => {
    const selectedId = parseInt(e.target.value, 10);
    const investment = investments.find(inv => inv.id === selectedId);
    setSelectedInvestment(investment);
    setActiveTab("1");
  };

  if (!selectedInvestment) return <div>Loading...</div>;

  return (
    <div className="dashboard d-flex">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Menu</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faChartPie} /> <span>Investments</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Reports</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faCogs} /> <span>Settings</span>
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content container-fluid">
        <div className="row">
          {/* Dropdown */}
          <div className="drop-container">
            <select className="drop-option" onChange={handleDropdownChange}>
              {investments.map(investment => (
                <option key={investment.id} value={investment.id}>
                  {investment.name}
                </option>
              ))}
            </select>
          </div>
          {/* Information Section */}
          <div className="col-12">
            <div className="info card mb-3">
              <div className="card-body">
                <h5 className="card-title">Details for {selectedInvestment.name}</h5>
                <p><strong>A Legal Entity:</strong> {selectedInvestment.details.legalEntity}</p>
                <p><strong>An Investment Vehicle:</strong> {selectedInvestment.details.investmentVehicle}</p>
                <p><strong>Investor:</strong> {selectedInvestment.details.investor}</p>
                <p><strong>Commitments:</strong> {selectedInvestment.details.commitments}</p>
                <p><strong>Demographics:</strong> {selectedInvestment.details.demographics}</p>
                <p><strong>Unit Details:</strong> {selectedInvestment.details.unitDetails}</p>
                <p><strong>Transactional Data:</strong> {selectedInvestment.details.transactionalData}</p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="col-12">
            <div className="tabs card">
              <div className="card-header d-flex">
                {Object.keys(selectedInvestment.tabs).map(tabId => (
                  <button
                    key={tabId}
                    className={`btn ${activeTab === tabId ? 'btn-primary' : 'btn-outline-secondary'} flex-grow-1`}
                    onClick={() => setActiveTab(tabId)}
                  >
                    Tab #{tabId}
                  </button>
                ))}
              </div>
              <div className="card-body">
                {selectedInvestment.tabs[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
