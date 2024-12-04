import React, { useState, useEffect } from 'react';
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
    <div className="dashboard">
      {/* Main Content */}
      <main className="main-content">
        <div className="row">
          {/* Dropdown */}
          <div className="dropdown-container col-12 col-md-3">
            <select className="dropdown" onChange={handleDropdownChange}>
              {investments.map(investment => (
                <option key={investment.id} value={investment.id}>
                  {investment.name}
                </option>
              ))}
            </select>
          </div>
          {/* Information Section */}
          <div className="info-container col-12 col-md-9">
            <div className="info-card">
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
          <div className="tabs-container col-12">
            <div className="tabs-card">
              <div className="tabs-header">
                {Object.keys(selectedInvestment.tabs).map(tabId => (
                  <button
                    key={tabId}
                    className={`tab-button ${activeTab === tabId ? 'active' : ''}`}
                    onClick={() => setActiveTab(tabId)}
                  >
                    Tab #{tabId}
                  </button>
                ))}
              </div>
              <div className="tabs-body">
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
