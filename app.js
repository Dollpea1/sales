/**
 * ApexSales - Vanilla JS Sales Analytics Dashboard Engine
 * Persistent WebStorage (localStorage) with zero dependencies.
 */

(function () {
  'use strict';

  // Storage key
  const STORAGE_KEY = 'apex_sales_transactions_data';

  // Seed sample data spanning recent months in 2026
  const DEFAULT_TRANSACTIONS = [
    {
      id: "INV-2026-001",
      customer: "GlobalTech Dynamics",
      rep: "Sarah Jenkins",
      product: "Enterprise Suite Ultimate",
      category: "Enterprise Suite",
      amount: 18500,
      date: "2026-01-14",
      region: "North America",
      status: "Completed"
    },
    {
      id: "INV-2026-002",
      customer: "Nordic Logistics AB",
      rep: "David Miller",
      product: "Cloud Infrastructure Pro",
      category: "Cloud Infrastructure",
      amount: 9200,
      date: "2026-01-22",
      region: "Europe (EMEA)",
      status: "Completed"
    },
    {
      id: "INV-2026-003",
      customer: "Quantum FinTech",
      rep: "Priya Sharma",
      product: "AI Copilot 100-Seat Pack",
      category: "AI Copilot License",
      amount: 14400,
      date: "2026-02-05",
      region: "Asia Pacific (APAC)",
      status: "Completed"
    },
    {
      id: "INV-2026-004",
      customer: "Starlight Media Group",
      rep: "Alex Vance",
      product: "Cybersecurity Fortress Suite",
      category: "Cybersecurity Add-on",
      amount: 7800,
      date: "2026-02-18",
      region: "North America",
      status: "Completed"
    },
    {
      id: "INV-2026-005",
      customer: "Vanguard Retail Corp",
      rep: "Marcus Lee",
      product: "Architecture Consulting & Migration",
      category: "Consulting & Training",
      amount: 12500,
      date: "2026-02-27",
      region: "North America",
      status: "Completed"
    },
    {
      id: "INV-2026-006",
      customer: "Solaris Clean Energy",
      rep: "Sarah Jenkins",
      product: "Cloud Infrastructure Pro",
      category: "Cloud Infrastructure",
      amount: 11000,
      date: "2026-03-09",
      region: "Europe (EMEA)",
      status: "Completed"
    },
    {
      id: "INV-2026-007",
      customer: "Apex BioHealth Labs",
      rep: "David Miller",
      product: "Enterprise Suite Base",
      category: "Enterprise Suite",
      amount: 14200,
      date: "2026-03-15",
      region: "North America",
      status: "Completed"
    },
    {
      id: "INV-2026-008",
      customer: "Tokyo Rail & Transit",
      rep: "Priya Sharma",
      product: "AI Copilot 250-Seat Pack",
      category: "AI Copilot License",
      amount: 28500,
      date: "2026-04-03",
      region: "Asia Pacific (APAC)",
      status: "Completed"
    },
    {
      id: "INV-2026-009",
      customer: "Rio Telecom S.A.",
      rep: "Alex Vance",
      product: "Cybersecurity Managed Detection",
      category: "Cybersecurity Add-on",
      amount: 6900,
      date: "2026-04-19",
      region: "Latin America (LATAM)",
      status: "Pending"
    },
    {
      id: "INV-2026-010",
      customer: "Meridian Insurance",
      rep: "Sarah Jenkins",
      product: "Enterprise Suite Ultimate",
      category: "Enterprise Suite",
      amount: 22000,
      date: "2026-05-11",
      region: "North America",
      status: "Completed"
    },
    {
      id: "INV-2026-011",
      customer: "Helios Robotics Corp",
      rep: "Marcus Lee",
      product: "AI Copilot Engineering Tier",
      category: "AI Copilot License",
      amount: 16800,
      date: "2026-05-24",
      region: "Europe (EMEA)",
      status: "Completed"
    },
    {
      id: "INV-2026-012",
      customer: "Bavaria Auto Systems",
      rep: "David Miller",
      product: "Cloud Infrastructure Enterprise",
      category: "Cloud Infrastructure",
      amount: 19500,
      date: "2026-06-08",
      region: "Europe (EMEA)",
      status: "Completed"
    },
    {
      id: "INV-2026-013",
      customer: "Pacific Commerce Bank",
      rep: "Priya Sharma",
      product: "Cybersecurity Defense Core",
      category: "Cybersecurity Add-on",
      amount: 8300,
      date: "2026-06-20",
      region: "Asia Pacific (APAC)",
      status: "Completed"
    },
    {
      id: "INV-2026-014",
      customer: "AeroSpace Innovate",
      rep: "Sarah Jenkins",
      product: "Implementation Masterclass & SLA",
      category: "Consulting & Training",
      amount: 9500,
      date: "2026-07-04",
      region: "North America",
      status: "Completed"
    },
    {
      id: "INV-2026-015",
      customer: "Kobe Heavy Industries",
      rep: "Priya Sharma",
      product: "Enterprise Suite Base",
      category: "Enterprise Suite",
      amount: 15600,
      date: "2026-07-17",
      region: "Asia Pacific (APAC)",
      status: "Completed"
    },
    {
      id: "INV-2026-016",
      customer: "Andes Mining Consortium",
      rep: "Alex Vance",
      product: "Cloud Infrastructure Pro",
      category: "Cloud Infrastructure",
      amount: 8700,
      date: "2026-08-02",
      region: "Latin America (LATAM)",
      status: "Completed"
    },
    {
      id: "INV-2026-017",
      customer: "Geneva Wealth Group",
      rep: "David Miller",
      product: "AI Copilot 50-Seat Pack",
      category: "AI Copilot License",
      amount: 7500,
      date: "2026-08-16",
      region: "Europe (EMEA)",
      status: "Completed"
    },
    {
      id: "INV-2026-018",
      customer: "Horizon Media Studios",
      rep: "Marcus Lee",
      product: "Cloud Infrastructure Scale",
      category: "Cloud Infrastructure",
      amount: 13200,
      date: "2026-08-28",
      region: "North America",
      status: "Completed"
    },
    {
      id: "INV-2026-019",
      customer: "Sao Paulo Health Network",
      rep: "Alex Vance",
      product: "Enterprise Suite Ultimate",
      category: "Enterprise Suite",
      amount: 21000,
      date: "2026-09-07",
      region: "Latin America (LATAM)",
      status: "Completed"
    },
    {
      id: "INV-2026-020",
      customer: "Beacon Financial UK",
      rep: "David Miller",
      product: "Cybersecurity SOC Support",
      category: "Cybersecurity Add-on",
      amount: 10400,
      date: "2026-09-19",
      region: "Europe (EMEA)",
      status: "Completed"
    },
    {
      id: "INV-2026-021",
      customer: "Nexus Gaming Studio",
      rep: "Marcus Lee",
      product: "Cloud Infrastructure Pro",
      category: "Cloud Infrastructure",
      amount: 5400,
      date: "2026-09-25",
      region: "North America",
      status: "Refunded"
    },
    {
      id: "INV-2026-022",
      customer: "Sydney Logistics Group",
      rep: "Priya Sharma",
      product: "Cloud Infrastructure Scale",
      category: "Cloud Infrastructure",
      amount: 14900,
      date: "2026-10-02",
      region: "Asia Pacific (APAC)",
      status: "Completed"
    },
    {
      id: "INV-2026-023",
      customer: "Delta Precision Parts",
      rep: "Sarah Jenkins",
      product: "AI Copilot Enterprise Add-on",
      category: "AI Copilot License",
      amount: 19800,
      date: "2026-10-14",
      region: "North America",
      status: "Completed"
    },
    {
      id: "INV-2026-024",
      customer: "Valparaiso Shipping",
      rep: "Alex Vance",
      product: "Executive Architecture Consulting",
      category: "Consulting & Training",
      amount: 11500,
      date: "2026-10-21",
      region: "Latin America (LATAM)",
      status: "Pending"
    },
    {
      id: "INV-2026-025",
      customer: "Zurich Automation AG",
      rep: "David Miller",
      product: "Enterprise Suite Ultimate",
      category: "Enterprise Suite",
      amount: 24500,
      date: "2026-10-28",
      region: "Europe (EMEA)",
      status: "Completed"
    }
  ];

  // Category Color Scheme (Explicit RGB/Hex values - No CSS variables)
  const CATEGORY_COLORS = {
    "Enterprise Suite": "#3b82f6",       // Blue
    "Cloud Infrastructure": "#06b6d4",   // Cyan
    "AI Copilot License": "#8b5cf6",     // Purple
    "Consulting & Training": "#10b981",  // Emerald
    "Cybersecurity Add-on": "#f59e0b"    // Amber
  };

  // State Management
  const state = {
    transactions: [],
    selectedPeriod: 'all',
    searchQuery: '',
    selectedCategory: 'all',
    selectedStatus: 'all',
    sortBy: 'date',
    sortAsc: false,
    currentPage: 1,
    pageSize: 8
  };

  // DOM Elements
  const elements = {
    // KPI elements
    kpiRevenue: document.getElementById('kpi-revenue'),
    kpiRevenueTrend: document.getElementById('kpi-revenue-trend'),
    kpiOrders: document.getElementById('kpi-orders'),
    kpiOrdersRate: document.getElementById('kpi-orders-rate'),
    kpiAov: document.getElementById('kpi-aov'),
    kpiTargetDiff: document.getElementById('kpi-target-diff'),
    kpiProfit: document.getElementById('kpi-profit'),
    kpiMarginRate: document.getElementById('kpi-margin-rate'),

    // Category summary elements
    categoryTotalVal: document.getElementById('category-total-val'),
    categoryLegend: document.getElementById('categoryLegend'),

    // Leaderboard
    repLeaderboard: document.getElementById('repLeaderboard'),
    repCountBadge: document.getElementById('rep-count-badge'),

    // Ledger Table
    tableRows: document.getElementById('transaction-rows'),
    ledgerCount: document.getElementById('ledger-count'),
    filterSearch: document.getElementById('filter-search'),
    filterCategory: document.getElementById('filter-category'),
    filterStatus: document.getElementById('filter-status'),
    paginationInfo: document.getElementById('pagination-info'),
    paginationPages: document.getElementById('pagination-pages'),
    btnPrevPage: document.getElementById('btn-prev-page'),
    btnNextPage: document.getElementById('btn-next-page'),

    // Canvases & Tooltips
    timelineCanvas: document.getElementById('timelineChart'),
    timelineTooltip: document.getElementById('timelineTooltip'),
    categoryCanvas: document.getElementById('categoryChart'),
    regionalCanvas: document.getElementById('regionalChart'),
    regionalTooltip: document.getElementById('regionalTooltip'),

    // Timeframe Buttons
    timeframeButtons: document.querySelectorAll('.timeframe-btn'),

    // Modal
    modal: document.getElementById('saleModal'),
    modalTitle: document.getElementById('modal-title'),
    form: document.getElementById('saleForm'),
    btnOpenModal: document.getElementById('btn-open-modal'),
    btnQuickAdd: document.getElementById('btn-quick-add'),
    btnModalClose: document.getElementById('btn-modal-close'),
    btnModalCancel: document.getElementById('btn-modal-cancel'),
    saleEditId: document.getElementById('sale-edit-id'),
    saleCustomer: document.getElementById('sale-customer'),
    saleRep: document.getElementById('sale-rep'),
    saleProduct: document.getElementById('sale-product'),
    saleCategory: document.getElementById('sale-category'),
    saleAmount: document.getElementById('sale-amount'),
    saleDate: document.getElementById('sale-date'),
    saleRegion: document.getElementById('sale-region'),
    saleStatus: document.getElementById('sale-status'),

    // Actions & Tools
    btnExportCsv: document.getElementById('btn-export-csv'),
    btnResetData: document.getElementById('btn-reset-data'),
    storageStatusText: document.getElementById('storage-status-text'),
    toast: document.getElementById('toast')
  };

  /**
   * Initialize Dashboard Data from WebStorage
   */
  function initStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        state.transactions = JSON.parse(stored);
      } else {
        state.transactions = JSON.parse(JSON.stringify(DEFAULT_TRANSACTIONS));
        saveToStorage();
      }
      elements.storageStatusText.textContent = `${state.transactions.length} records in LocalStorage`;
    } catch (e) {
      console.warn('Storage unavailable or corrupted, defaulting to memory state:', e);
      state.transactions = JSON.parse(JSON.stringify(DEFAULT_TRANSACTIONS));
      elements.storageStatusText.textContent = 'Storage Error - Memory only';
    }
  }

  function saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.transactions));
      elements.storageStatusText.textContent = `${state.transactions.length} records in LocalStorage`;
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
      showToast('Error saving to local storage', 'error');
    }
  }

  /**
   * Formatters
   */
  function formatCurrency(val) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const date = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
    return dateStr;
  }

  /**
   * Notification Toast
   */
  let toastTimer = null;
  function showToast(message, type = 'info') {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.className = `toast show toast-${type}`;
    toastTimer = setTimeout(() => {
      elements.toast.className = 'toast';
    }, 3200);
  }

  /**
   * Filter and Slice Transactions based on current state
   */
  function getFilteredTransactions() {
    let list = [...state.transactions];

    // Filter by timeframe
    if (state.selectedPeriod !== 'all') {
      const now = new Date(2026, 10, 1); // Mock Anchor date: Nov 1, 2026
      if (state.selectedPeriod === '30') {
        const cutoff = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
        list = list.filter(t => new Date(t.date) >= cutoff);
      } else if (state.selectedPeriod === '90') {
        const cutoff = new Date(now.getTime() - (90 * 24 * 60 * 60 * 1000));
        list = list.filter(t => new Date(t.date) >= cutoff);
      } else if (state.selectedPeriod === 'year') {
        list = list.filter(t => t.date.startsWith('2026'));
      }
    }

    // Filter by Search text
    if (state.searchQuery.trim() !== '') {
      const query = state.searchQuery.toLowerCase().trim();
      list = list.filter(t =>
        (t.customer && t.customer.toLowerCase().includes(query)) ||
        (t.rep && t.rep.toLowerCase().includes(query)) ||
        (t.product && t.product.toLowerCase().includes(query)) ||
        (t.id && t.id.toLowerCase().includes(query)) ||
        (t.region && t.region.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (state.selectedCategory !== 'all') {
      list = list.filter(t => t.category === state.selectedCategory);
    }

    // Filter by status
    if (state.selectedStatus !== 'all') {
      list = list.filter(t => t.status === state.selectedStatus);
    }

    // Sort
    list.sort((a, b) => {
      let valA = a[state.sortBy];
      let valB = b[state.sortBy];

      if (state.sortBy === 'amount') {
        valA = Number(valA);
        valB = Number(valB);
      } else if (typeof valA === 'string') {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (valA < valB) return state.sortAsc ? -1 : 1;
      if (valA > valB) return state.sortAsc ? 1 : -1;
      return 0;
    });

    return list;
  }

  /**
   * Render Top KPI Cards
   */
  function renderKPIs(filtered) {
    const totalTransactions = filtered.length;
    const completedTransactions = filtered.filter(t => t.status === 'Completed');
    const grossRevenue = completedTransactions.reduce((acc, curr) => acc + Number(curr.amount), 0);
    const avgOrderValue = completedTransactions.length ? grossRevenue / completedTransactions.length : 0;
    const estimatedProfit = grossRevenue * 0.685; // 68.5% blended SaaS margin

    // Set animated / display values
    elements.kpiRevenue.textContent = formatCurrency(grossRevenue);
    elements.kpiOrders.textContent = completedTransactions.length.toString();
    elements.kpiAov.textContent = formatCurrency(avgOrderValue);
    elements.kpiProfit.textContent = formatCurrency(estimatedProfit);

    const completionRate = totalTransactions > 0
      ? ((completedTransactions.length / totalTransactions) * 100).toFixed(1)
      : '0.0';
    elements.kpiOrdersRate.textContent = `${completionRate}% completed`;

    // Dynamic targets comparison
    const aovTarget = 3500;
    const aovDiff = aovTarget > 0 ? (((avgOrderValue - aovTarget) / aovTarget) * 100).toFixed(1) : 0;
    if (aovDiff >= 0) {
      elements.kpiTargetDiff.textContent = `+${aovDiff}%`;
      elements.kpiTargetDiff.className = 'kpi-badge badge-positive';
    } else {
      elements.kpiTargetDiff.textContent = `${aovDiff}%`;
      elements.kpiTargetDiff.className = 'kpi-badge badge-negative';
    }
  }

  /**
   * Render Table with Pagination & Action Buttons
   */
  function renderTable(filtered) {
    elements.ledgerCount.textContent = `${filtered.length} Records`;

    const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
    if (state.currentPage > totalPages) {
      state.currentPage = totalPages;
    }

    const startIndex = (state.currentPage - 1) * state.pageSize;
    const pageItems = filtered.slice(startIndex, startIndex + state.pageSize);

    if (filtered.length === 0) {
      elements.tableRows.innerHTML = `
        <tr>
          <td colspan="9" style="text-align: center; padding: 48px 16px; color: #64748b;">
            <div style="font-size: 1.1rem; font-weight: 500; color: #94a3b8; margin-bottom: 6px;">No transactions match your criteria</div>
            <p style="font-size: 0.82rem;">Try adjusting the search query, category, or timeframe filters.</p>
          </td>
        </tr>
      `;
      elements.paginationInfo.textContent = 'Showing 0 of 0 records';
      elements.paginationPages.innerHTML = '';
      elements.btnPrevPage.disabled = true;
      elements.btnNextPage.disabled = true;
      return;
    }

    let rowsHtml = '';
    pageItems.forEach(item => {
      const statusClass = item.status === 'Completed'
        ? 'status-completed'
        : item.status === 'Pending'
        ? 'status-pending'
        : 'status-refunded';

      rowsHtml += `
        <tr>
          <td><strong style="color: #60a5fa; font-family: monospace;">${item.id}</strong></td>
          <td>${formatDate(item.date)}</td>
          <td><span style="font-weight: 600; color: #ffffff;">${escapeHtml(item.customer)}</span></td>
          <td><span style="color: #cbd5e1;">${escapeHtml(item.product)}</span></td>
          <td><span style="color: #94a3b8; font-size: 0.78rem;">${escapeHtml(item.region)}</span></td>
          <td class="text-right"><span class="amount-highlight">${formatCurrency(item.amount)}</span></td>
          <td><span class="status-badge ${statusClass}">${item.status}</span></td>
          <td><span style="color: #cbd5e1;">${escapeHtml(item.rep)}</span></td>
          <td class="text-center">
            <div class="action-btn-group">
              <button class="icon-action-btn btn-edit" title="Edit sale" data-id="${item.id}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button class="icon-action-btn btn-delete" title="Delete record" data-id="${item.id}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    });

    elements.tableRows.innerHTML = rowsHtml;

    // Attach row listeners
    elements.tableRows.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openEditModal(id);
      });
    });

    elements.tableRows.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        deleteTransaction(id);
      });
    });

    // Update pagination controls
    const endCount = Math.min(startIndex + state.pageSize, filtered.length);
    elements.paginationInfo.textContent = `Showing ${startIndex + 1}-${endCount} of ${filtered.length} records`;

    elements.btnPrevPage.disabled = state.currentPage <= 1;
    elements.btnNextPage.disabled = state.currentPage >= totalPages;

    let pagesHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      pagesHtml += `<button class="page-num ${i === state.currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    elements.paginationPages.innerHTML = pagesHtml;

    elements.paginationPages.querySelectorAll('.page-num').forEach(btn => {
      btn.addEventListener('click', (e) => {
        state.currentPage = parseInt(e.currentTarget.getAttribute('data-page'), 10);
        renderTable(getFilteredTransactions());
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Render Sales Rep Leaderboard
   */
  function renderRepLeaderboard(filtered) {
    const repMap = {};
    filtered.forEach(t => {
      if (!repMap[t.rep]) {
        repMap[t.rep] = { name: t.rep, revenue: 0, deals: 0, completed: 0 };
      }
      repMap[t.rep].deals += 1;
      if (t.status === 'Completed') {
        repMap[t.rep].revenue += Number(t.amount);
        repMap[t.rep].completed += 1;
      }
    });

    const reps = Object.values(repMap).sort((a, b) => b.revenue - a.revenue);
    const maxRev = reps.length > 0 ? Math.max(...reps.map(r => r.revenue), 1) : 1;

    elements.repCountBadge.textContent = `${reps.length} Reps Tracking`;

    if (reps.length === 0) {
      elements.repLeaderboard.innerHTML = '<div style="color: #64748b; font-size: 0.85rem; padding: 20px; text-align: center;">No rep performance records available for this filter.</div>';
      return;
    }

    let html = '';
    reps.forEach((rep, index) => {
      const percentage = Math.min(100, Math.round((rep.revenue / maxRev) * 100));
      const initials = rep.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

      html += `
        <div class="rep-row">
          <div class="rep-rank">#${index + 1}</div>
          <div class="rep-avatar">${initials}</div>
          <div class="rep-info">
            <div class="rep-name">${escapeHtml(rep.name)}</div>
            <div class="rep-subtitle">${rep.deals} deals logged (${rep.completed} closed)</div>
            <div class="rep-progress-track">
              <div class="rep-progress-fill" style="width: ${percentage}%"></div>
            </div>
          </div>
          <div class="rep-metrics">
            <div class="rep-revenue">${formatCurrency(rep.revenue)}</div>
            <div class="rep-deals">${percentage}% share</div>
          </div>
        </div>
      `;
    });

    elements.repLeaderboard.innerHTML = html;
  }

  /**
   * HIGH-DPI CANVAS SETUP HELPER
   */
  function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, width: rect.width, height: rect.height };
  }

  /**
   * Custom Canvas Chart 1: Revenue Timeline (Area & Line chart with interactive hover)
   */
  let timelinePoints = [];

  function renderTimelineChart(filtered) {
    const canvas = elements.timelineCanvas;
    if (!canvas) return;
    const { ctx, width, height } = setupCanvas(canvas);
    timelinePoints = [];

    // Group sales by month (Jan - Oct 2026 or whatever is in data)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyData = {};

    months.forEach((m, idx) => {
      monthlyData[idx] = { month: m, revenue: 0, deals: 0 };
    });

    filtered.forEach(t => {
      const d = new Date(t.date);
      if (!isNaN(d.getTime())) {
        const mIdx = d.getMonth();
        if (monthlyData[mIdx]) {
          monthlyData[mIdx].deals += 1;
          if (t.status === 'Completed') {
            monthlyData[mIdx].revenue += Number(t.amount);
          }
        }
      }
    });

    // Determine relevant month range to plot (months 0 to 10 for Jan - Nov)
    const plotMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const dataPoints = plotMonths.map(i => monthlyData[i]);

    const maxRev = Math.max(...dataPoints.map(d => d.revenue), 10000);
    // Grid padding
    const padding = { top: 25, right: 30, bottom: 35, left: 60 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Draw horizontal grid lines
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#243044';
    ctx.fillStyle = '#64748b';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'right';

    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
      const yVal = (maxRev / gridSteps) * i;
      const yPos = padding.top + chartH - (i / gridSteps) * chartH;

      ctx.beginPath();
      ctx.moveTo(padding.left, yPos);
      ctx.lineTo(width - padding.right, yPos);
      ctx.stroke();

      const label = yVal >= 1000 ? `$${Math.round(yVal / 1000)}k` : `$${Math.round(yVal)}`;
      ctx.fillText(label, padding.left - 10, yPos + 4);
    }

    // Calculate Coordinates
    const stepX = chartW / (dataPoints.length - 1);
    const coords = dataPoints.map((d, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + chartH - (d.revenue / maxRev) * chartH;
      return { x, y, data: d };
    });
    timelinePoints = coords;

    if (coords.length > 1) {
      // Draw Area Fill Gradient
      const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.45)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

      ctx.beginPath();
      ctx.moveTo(coords[0].x, height - padding.bottom);
      ctx.lineTo(coords[0].x, coords[0].y);

      for (let i = 1; i < coords.length; i++) {
        const xc = (coords[i - 1].x + coords[i].x) / 2;
        const yc = (coords[i - 1].y + coords[i].y) / 2;
        ctx.quadraticCurveTo(coords[i - 1].x, coords[i - 1].y, xc, yc);
      }
      ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
      ctx.lineTo(coords[coords.length - 1].x, height - padding.bottom);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw Main Curve Line
      ctx.beginPath();
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.moveTo(coords[0].x, coords[0].y);
      for (let i = 1; i < coords.length; i++) {
        const xc = (coords[i - 1].x + coords[i].x) / 2;
        const yc = (coords[i - 1].y + coords[i].y) / 2;
        ctx.quadraticCurveTo(coords[i - 1].x, coords[i - 1].y, xc, yc);
      }
      ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
      ctx.stroke();

      // Draw Points & X-Axis Labels
      ctx.textAlign = 'center';
      coords.forEach((pt) => {
        // Point outer circle
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#0f172a';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#60a5fa';
        ctx.stroke();

        // X label
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(pt.data.month, pt.x, height - padding.bottom + 18);
      });
    }
  }

  // Timeline Canvas Tooltip Event
  elements.timelineCanvas.addEventListener('mousemove', (e) => {
    const rect = elements.timelineCanvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let nearest = null;
    let minDist = 35;

    timelinePoints.forEach(pt => {
      const dist = Math.hypot(pt.x - mouseX, pt.y - mouseY);
      if (dist < minDist) {
        minDist = dist;
        nearest = pt;
      }
    });

    if (nearest) {
      elements.timelineTooltip.style.display = 'block';
      elements.timelineTooltip.style.left = `${nearest.x}px`;
      elements.timelineTooltip.style.top = `${nearest.y - 12}px`;
      elements.timelineTooltip.innerHTML = `
        <div style="font-weight: 700; color: #ffffff; margin-bottom: 2px;">${nearest.data.month} 2026</div>
        <div style="color: #60a5fa; font-weight: 600;">Revenue: ${formatCurrency(nearest.data.revenue)}</div>
        <div style="color: #94a3b8;">Deals: ${nearest.data.deals} transactions</div>
      `;
    } else {
      elements.timelineTooltip.style.display = 'none';
    }
  });

  elements.timelineCanvas.addEventListener('mouseleave', () => {
    elements.timelineTooltip.style.display = 'none';
  });

  /**
   * Custom Canvas Chart 2: Category Donut Chart
   */
  function renderCategoryChart(filtered) {
    const canvas = elements.categoryCanvas;
    if (!canvas) return;
    const { ctx, width, height } = setupCanvas(canvas);

    const categorySums = {};
    Object.keys(CATEGORY_COLORS).forEach(c => categorySums[c] = 0);

    let totalVal = 0;
    filtered.forEach(t => {
      if (t.status === 'Completed') {
        const val = Number(t.amount);
        categorySums[t.category] = (categorySums[t.category] || 0) + val;
        totalVal += val;
      }
    });

    elements.categoryTotalVal.textContent = formatCurrency(totalVal);

    // Render legend in HTML below canvas
    let legendHtml = '';
    Object.keys(categorySums).forEach(cat => {
      const amount = categorySums[cat];
      const pct = totalVal > 0 ? ((amount / totalVal) * 100).toFixed(0) : 0;
      const color = CATEGORY_COLORS[cat] || '#64748b';

      legendHtml += `
        <div class="cat-legend-row">
          <div class="cat-legend-name">
            <span class="cat-legend-color" style="background-color: ${color};"></span>
            <span>${escapeHtml(cat)}</span>
          </div>
          <div class="cat-legend-metric">${pct}% (${formatCurrency(amount)})</div>
        </div>
      `;
    });
    elements.categoryLegend.innerHTML = legendHtml;

    // Draw Donut on Canvas
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    const innerRadius = radius * 0.68;

    if (totalVal === 0) {
      // Empty placeholder ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.arc(centerX, centerY, innerRadius, Math.PI * 2, 0, true);
      ctx.fillStyle = '#334155';
      ctx.fill();
      return;
    }

    let currentAngle = -0.5 * Math.PI; // Start at top (12 o'clock)
    const gapAngle = 0.035; // Distinct gap between slices

    Object.keys(categorySums).forEach(cat => {
      const value = categorySums[cat];
      if (value <= 0) return;

      const sliceAngle = (value / totalVal) * (Math.PI * 2);
      const start = currentAngle + gapAngle / 2;
      const end = currentAngle + sliceAngle - gapAngle / 2;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, start, end);
      ctx.arc(centerX, centerY, innerRadius, end, start, true);
      ctx.closePath();
      ctx.fillStyle = CATEGORY_COLORS[cat] || '#64748b';
      ctx.fill();

      currentAngle += sliceAngle;
    });
  }

  /**
   * Custom Canvas Chart 3: Regional Revenue Horizontal Bar Chart
   */
  let regionalBars = [];

  function renderRegionalChart(filtered) {
    const canvas = elements.regionalCanvas;
    if (!canvas) return;
    const { ctx, width, height } = setupCanvas(canvas);
    regionalBars = [];

    const regions = [
      { name: "North America", color: "#3b82f6", target: 90000 },
      { name: "Europe (EMEA)", color: "#10b981", target: 80000 },
      { name: "Asia Pacific (APAC)", color: "#8b5cf6", target: 75000 },
      { name: "Latin America (LATAM)", color: "#f59e0b", target: 50000 }
    ];

    const regionData = {};
    regions.forEach(r => {
      regionData[r.name] = { total: 0, deals: 0 };
    });

    filtered.forEach(t => {
      if (regionData[t.region]) {
        regionData[t.region].deals += 1;
        if (t.status === 'Completed') {
          regionData[t.region].total += Number(t.amount);
        }
      }
    });

    const maxVal = Math.max(...regions.map(r => Math.max(regionData[r.name].total, r.target)), 100000);
    const padding = { top: 20, right: 35, bottom: 20, left: 140 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;
    const barHeight = Math.min(26, chartH / (regions.length * 1.8));
    const stepY = chartH / regions.length;

    ctx.clearRect(0, 0, width, height);

    regions.forEach((r, idx) => {
      const data = regionData[r.name];
      const y = padding.top + idx * stepY + (stepY - barHeight) / 2;
      const barW = Math.max(4, (data.total / maxVal) * chartW);
      const targetX = padding.left + (r.target / maxVal) * chartW;

      // Track bounding box for tooltip
      regionalBars.push({
        name: r.name,
        revenue: data.total,
        target: r.target,
        deals: data.deals,
        x: padding.left,
        y: y,
        w: chartW,
        h: barHeight
      });

      // Region Label
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(r.name, padding.left - 12, y + barHeight / 2 + 4);

      // Background Track
      ctx.beginPath();
      roundRect(ctx, padding.left, y, chartW, barHeight, 5);
      ctx.fillStyle = '#172033';
      ctx.fill();

      // Active Filled Bar
      ctx.beginPath();
      roundRect(ctx, padding.left, y, barW, barHeight, 5);
      ctx.fillStyle = r.color;
      ctx.fill();

      // Quota Target Line
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(targetX, y - 4);
      ctx.lineTo(targetX, y + barHeight + 4);
      ctx.stroke();

      // Value label at end of bar
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(formatCurrency(data.total), padding.left + barW + 8, y + barHeight / 2 + 4);
    });
  }

  function roundRect(ctx, x, y, width, height, radius) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  // Regional Canvas Tooltip Event
  elements.regionalCanvas.addEventListener('mousemove', (e) => {
    const rect = elements.regionalCanvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let hovered = null;
    regionalBars.forEach(b => {
      if (mouseX >= b.x - 120 && mouseX <= b.x + b.w + 60 && mouseY >= b.y && mouseY <= b.y + b.h) {
        hovered = b;
      }
    });

    if (hovered) {
      elements.regionalTooltip.style.display = 'block';
      elements.regionalTooltip.style.left = `${mouseX}px`;
      elements.regionalTooltip.style.top = `${hovered.y - 12}px`;
      const pacing = ((hovered.revenue / hovered.target) * 100).toFixed(1);

      elements.regionalTooltip.innerHTML = `
        <div style="font-weight: 700; color: #ffffff; margin-bottom: 2px;">${hovered.name}</div>
        <div style="color: #34d399; font-weight: 600;">Revenue: ${formatCurrency(hovered.revenue)}</div>
        <div style="color: #94a3b8;">Target: ${formatCurrency(hovered.target)} (${pacing}% attained)</div>
        <div style="color: #94a3b8;">Volume: ${hovered.deals} deals recorded</div>
      `;
    } else {
      elements.regionalTooltip.style.display = 'none';
    }
  });

  elements.regionalCanvas.addEventListener('mouseleave', () => {
    elements.regionalTooltip.style.display = 'none';
  });

  /**
   * Master Render Function
   */
  function refreshDashboard() {
    const filtered = getFilteredTransactions();
    renderKPIs(filtered);
    renderTimelineChart(filtered);
    renderCategoryChart(filtered);
    renderRegionalChart(filtered);
    renderRepLeaderboard(filtered);
    renderTable(filtered);
  }

  /**
   * Modal Management: Add & Edit Transactions
   */
  function openAddModal() {
    elements.modalTitle.textContent = "Record New Sales Transaction";
    elements.saleEditId.value = "";
    elements.form.reset();

    // Default transaction date to today (or 2026-11-01)
    const today = new Date().toISOString().split('T')[0];
    elements.saleDate.value = today;

    elements.modal.classList.add('open');
    elements.saleCustomer.focus();
  }

  function openEditModal(id) {
    const item = state.transactions.find(t => t.id === id);
    if (!item) return;

    elements.modalTitle.textContent = `Edit Transaction: ${item.id}`;
    elements.saleEditId.value = item.id;
    elements.saleCustomer.value = item.customer;
    elements.saleRep.value = item.rep;
    elements.saleProduct.value = item.product;
    elements.saleCategory.value = item.category;
    elements.saleAmount.value = item.amount;
    elements.saleDate.value = item.date;
    elements.saleRegion.value = item.region;
    elements.saleStatus.value = item.status;

    elements.modal.classList.add('open');
    elements.saleCustomer.focus();
  }

  function closeModal() {
    elements.modal.classList.remove('open');
    elements.form.reset();
  }

  function saveModalTransaction(e) {
    e.preventDefault();

    const editId = elements.saleEditId.value.trim();
    const customer = elements.saleCustomer.value.trim();
    const rep = elements.saleRep.value.trim();
    const product = elements.saleProduct.value.trim();
    const category = elements.saleCategory.value;
    const amount = parseFloat(elements.saleAmount.value);
    const date = elements.saleDate.value;
    const region = elements.saleRegion.value;
    const status = elements.saleStatus.value;

    if (!customer || !rep || !product || isNaN(amount) || amount <= 0 || !date) {
      showToast('Please fill out all required fields with valid values.', 'error');
      return;
    }

    if (editId) {
      // Update existing record
      const idx = state.transactions.findIndex(t => t.id === editId);
      if (idx !== -1) {
        state.transactions[idx] = {
          ...state.transactions[idx],
          customer,
          rep,
          product,
          category,
          amount,
          date,
          region,
          status
        };
        showToast(`Transaction ${editId} updated successfully!`, 'success');
      }
    } else {
      // Create new record with sequential ID
      const newIndex = state.transactions.length + 1;
      const formattedNum = String(newIndex).padStart(3, '0');
      const newId = `INV-2026-${formattedNum}`;

      const newRecord = {
        id: newId,
        customer,
        rep,
        product,
        category,
        amount,
        date,
        region,
        status
      };

      state.transactions.unshift(newRecord);
      showToast(`New sale record ${newId} recorded!`, 'success');
    }

    saveToStorage();
    closeModal();
    refreshDashboard();
  }

  function deleteTransaction(id) {
    const confirmed = window.confirm(`Are you sure you want to delete transaction ${id}?`);
    if (!confirmed) return;

    state.transactions = state.transactions.filter(t => t.id !== id);
    saveToStorage();
    refreshDashboard();
    showToast(`Transaction ${id} removed.`, 'info');
  }

  /**
   * Export CSV Functionality
   */
  function exportCSV() {
    const list = getFilteredTransactions();
    if (list.length === 0) {
      showToast('No records available to export.', 'error');
      return;
    }

    const headers = ["Invoice ID", "Date", "Customer", "Rep", "Product", "Category", "Amount", "Region", "Status"];
    const rows = list.map(t => [
      `"${t.id}"`,
      `"${t.date}"`,
      `"${(t.customer || '').replace(/"/g, '""')}"`,
      `"${(t.rep || '').replace(/"/g, '""')}"`,
      `"${(t.product || '').replace(/"/g, '""')}"`,
      `"${t.category}"`,
      t.amount,
      `"${t.region}"`,
      `"${t.status}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `apex_sales_report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Exported ${list.length} rows to CSV!`, 'success');
  }

  /**
   * Reset Sample Demo Data
   */
  function resetDemoData() {
    const confirmed = window.confirm('Reset all transaction records back to default sample dataset?');
    if (!confirmed) return;

    state.transactions = JSON.parse(JSON.stringify(DEFAULT_TRANSACTIONS));
    saveToStorage();
    state.currentPage = 1;
    refreshDashboard();
    showToast('Reset to demo sales dataset.', 'info');
  }

  /**
   * Bind DOM Events
   */
  function bindEvents() {
    // Timeframe selector
    elements.timeframeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        elements.timeframeButtons.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        state.selectedPeriod = e.currentTarget.getAttribute('data-period');
        state.currentPage = 1;
        refreshDashboard();
      });
    });

    // Search input
    let searchDebounce = null;
    elements.filterSearch.addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        refreshDashboard();
      }, 150);
    });

    // Category dropdown
    elements.filterCategory.addEventListener('change', (e) => {
      state.selectedCategory = e.target.value;
      state.currentPage = 1;
      refreshDashboard();
    });

    // Status dropdown
    elements.filterStatus.addEventListener('change', (e) => {
      state.selectedStatus = e.target.value;
      state.currentPage = 1;
      refreshDashboard();
    });

    // Sort headers
    document.querySelectorAll('.data-table th.sortable').forEach(th => {
      th.addEventListener('click', (e) => {
        const field = e.currentTarget.getAttribute('data-sort');
        if (state.sortBy === field) {
          state.sortAsc = !state.sortAsc;
        } else {
          state.sortBy = field;
          state.sortAsc = true;
        }

        // Update header sort indicator
        document.querySelectorAll('.data-table th.sortable .sort-icon').forEach(icon => {
          icon.textContent = '↕';
        });
        const currentIcon = e.currentTarget.querySelector('.sort-icon');
        if (currentIcon) {
          currentIcon.textContent = state.sortAsc ? '↑' : '↓';
        }

        refreshDashboard();
      });
    });

    // Pagination buttons
    elements.btnPrevPage.addEventListener('click', () => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
        renderTable(getFilteredTransactions());
      }
    });

    elements.btnNextPage.addEventListener('click', () => {
      const filtered = getFilteredTransactions();
      const totalPages = Math.ceil(filtered.length / state.pageSize);
      if (state.currentPage < totalPages) {
        state.currentPage += 1;
        renderTable(filtered);
      }
    });

    // Modal triggers
    elements.btnOpenModal.addEventListener('click', openAddModal);
    elements.btnQuickAdd.addEventListener('click', openAddModal);
    elements.btnModalClose.addEventListener('click', closeModal);
    elements.btnModalCancel.addEventListener('click', closeModal);
    elements.form.addEventListener('submit', saveModalTransaction);

    elements.modal.addEventListener('click', (e) => {
      if (e.target === elements.modal) closeModal();
    });

    // Tools
    elements.btnExportCsv.addEventListener('click', exportCSV);
    elements.btnResetData.addEventListener('click', resetDemoData);

    // Responsive Canvas Resizing on window resize
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const filtered = getFilteredTransactions();
        renderTimelineChart(filtered);
        renderCategoryChart(filtered);
        renderRegionalChart(filtered);
      }, 150);
    });
  }

  // Initial Boot
  initStorage();
  bindEvents();
  refreshDashboard();

})();

