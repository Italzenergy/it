import React, { useState, useEffect } from 'react';
import { Grid, Card, Typography, Button, Tooltip, IconButton } from '@mui/material';
import './DashboardUsuario.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';

const DashboardUsuario = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar tamaño de pantalla y ocultar navbar superior
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      }
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    // Ocultar navbar superior
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.display = 'none';
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      if (navbar) navbar.style.display = 'flex';
    };
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: <DashboardIcon /> },
    { name: 'Accounts', icon: <AccountBalanceIcon /> },
    { name: 'Cards', icon: <CreditCardIcon /> },
    { name: 'Transactions', icon: <SwapHorizIcon /> },
    { name: 'Analytics', icon: <AnalyticsIcon /> },
    { name: 'Settings', icon: <SettingsIcon /> }
  ];
  
  const accounts = [
    { name: "City Bank", amount: "$221,478" },
    { name: "Debit Card", amount: "$32,600" },
    { name: "Visa Card", amount: "$18,245" },
    { name: "Cash", amount: "$4,320" }
  ];
  
  const financialData = {
    totalBalance: "$276,543",
    personalFunds: "$32,500.28",
    income: {
      amount: "$8,450",
      change: "vs last month"
    },
    expenses: {
      amount: "$3,240",
      change: "vs last month"
    },
    savings: {
      amount: "$5,210",
      change: "vs last month"
    },
    cardDetails: {
      month: "September 2023",
      balance: "$32,500.28",
      cardHolder: "Saltul Islam",
      drivers: "VISA",
      expiry: "09/25"
    }
  };

  return (
    <div className="dashboard-container">
      {/* Barra superior para móviles */}
      {isMobile && (
        <div className="mobile-top-bar">
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MenuIcon style={{ color: '#ffd700' }} />
          </IconButton>
          <Typography variant="h6" className="app-name">Prestadero</Typography>
        </div>
      )}

      {/* Barra lateral */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-circle">
            <Typography variant="h6">P</Typography>
          </div>
          <Typography variant="h6" className="app-name">Prestadero</Typography>
        </div>
        
        <div className="sidebar-menu">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`menu-item ${activeSection === item.name ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(item.name);
                if (isMobile) setSidebarOpen(false);
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-left">
            <Typography variant="h5" className="welcome-title">
              Bienvenido, <strong>Usuario</strong>
            </Typography>
            <Typography variant="subtitle1" className="date-info">
              Today is Wednesday, 28 May 2025
            </Typography>
          </div>
          <div className="header-right">
            <div className="header-icons">
              <Tooltip title="Profile" arrow>
                <div className="header-icon">
                  <PersonIcon />
                </div>
              </Tooltip>
              <Tooltip title="Notifications" arrow>
                <div className="header-icon">
                  <NotificationsIcon />
                </div>
              </Tooltip>
              <Tooltip title="Messages" arrow>
                <div className="header-icon">
                  <EmailIcon />
                </div>
              </Tooltip>
              <Tooltip title="Help" arrow>
                <div className="header-icon">
                  <HelpIcon />
                </div>
              </Tooltip>
            </div>
            
            <Button variant="contained" className="download-btn">
              Reportar falla
            </Button>
          </div>
        </div>

        {/* Sección de cuentas */}
        <div className="section">
          <Typography variant="h6" className="section-title">
            My Accounts
          </Typography>
          <div className="accounts-grid">
            {accounts.map((account, index) => (
              <Card className="account-card" key={index}>
                <div className="account-info">
                  <Typography variant="subtitle1" className="account-name">
                    {account.name}
                  </Typography>
                  <Typography variant="h5" className="account-amount">
                    {account.amount}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sección de balance y estadísticas */}
        <div className="stats-section">
          <div className="stats-left">
            <Card className="balance-card">
              <div className="balance-header">
                <Typography variant="h5" className="balance-title">
                  Total Balance
                </Typography>
              </div>
              
              <div className="total-balance-container">
                <Typography variant="h3" className="total-balance">
                  {financialData.totalBalance}
                </Typography>
                
                <div className="personal-funds">
                  <Typography variant="subtitle2" className="funds-title">
                    Personal Funds
                  </Typography>
                  <Typography variant="h5" className="funds-amount">
                    {financialData.personalFunds}
                  </Typography>
                  <div className="funds-items">
                    <Typography variant="body2" className="funds-item">
                      Credit Limits
                    </Typography>
                    <Typography variant="body2" className="funds-item">
                      Investments
                    </Typography>
                  </div>
                </div>
              </div>
              
              <div className="financial-stats">
                <Card className="stat-card">
                  <div className="stat-card-content">
                    <Typography variant="subtitle2" className="stat-card-title">
                      Income
                    </Typography>
                    <div className="stat-card-amount">
                      <Typography variant="h5">{financialData.income.amount}</Typography>
                    </div>
                    <Typography variant="caption" className="stat-card-change">
                      {financialData.income.change}
                    </Typography>
                  </div>
                </Card>
                
                <Card className="stat-card">
                  <div className="stat-card-content">
                    <Typography variant="subtitle2" className="stat-card-title">
                      Expenses
                    </Typography>
                    <div className="stat-card-amount">
                      <Typography variant="h5">{financialData.expenses.amount}</Typography>
                    </div>
                    <Typography variant="caption" className="stat-card-change">
                      {financialData.expenses.change}
                    </Typography>
                  </div>
                </Card>
              </div>
              
              <div className="balance-charts">
                <div className="chart-header">
                  <Typography variant="h6">Financial Overview</Typography>
                  <div className="chart-actions">
                    <Button variant="outlined" size="small">Balance</Button>
                    <Button variant="outlined" size="small">Financials</Button>
                  </div>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '120px' }}></div>
                    <div className="bar" style={{ height: '80px' }}></div>
                    <div className="bar" style={{ height: '160px' }}></div>
                    <div className="bar" style={{ height: '60px' }}></div>
                    <div className="bar" style={{ height: '100px' }}></div>
                  </div>
                  <div className="chart-labels">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="stats-right">
            <Card className="card-details">
              <div className="card-header">
                <Typography variant="h6">{financialData.cardDetails.month}</Typography>
              </div>
              
              <div className="card-content">
                <div className="card-balance">
                  <Typography variant="subtitle2">Current Balance</Typography>
                  <Typography variant="h4">{financialData.cardDetails.balance}</Typography>
                </div>
                
                <div className="card-holder">
                  <Typography variant="subtitle2">CARD HOLDER</Typography>
                  <Typography variant="h5">{financialData.cardDetails.cardHolder}</Typography>
                </div>
                
                <div className="card-info">
                  <div className="card-type">
                    <Typography variant="subtitle2">Drivers</Typography>
                    <Typography variant="h5">{financialData.cardDetails.drivers}</Typography>
                  </div>
                  
                  <div className="card-expiry">
                    <Typography variant="subtitle2">Expiry</Typography>
                    <Typography variant="h5">{financialData.cardDetails.expiry}</Typography>
                  </div>
                </div>
              </div>
              
              <div className="card-chart">
                <div className="chart-header">
                  <Typography variant="h6">Card Usage</Typography>
                </div>
                <div className="pie-chart-placeholder">
                  <div className="pie-chart">
                    <div className="pie-center"></div>
                  </div>
                  <div className="pie-labels">
                    <div className="label-item">
                      <span className="color-dot dot1"></span>
                      <span>Food</span>
                    </div>
                    <div className="label-item">
                      <span className="color-dot dot2"></span>
                      <span>Shopping</span>
                    </div>
                    <div className="label-item">
                      <span className="color-dot dot3"></span>
                      <span>Travel</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsuario;