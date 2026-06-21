/**
 * Feature views (Send, Receive, Request, Transaction History) for Vault Banking
 */

import { showPage } from './navigation.js';

export function openFeature(type) {
  const titles = { send:'Send Money', receive:'Receive Funds', request:'Request Funds', history:'Transactions' };
  const titleEl = document.getElementById('featureTitle');
  if (titleEl) {
    titleEl.textContent = titles[type] || '';
  }

  let html = '';

  if (type === 'send') {
    html = `
      <div class="form-card">
        <div class="field">
          <label>Recipient name or account</label>
          <input type="text" placeholder="Search or enter account">
        </div>
        <div class="field">
          <label>Amount</label>
          <input type="number" placeholder="$0.00">
        </div>
        <div class="field">
          <label>Note (optional)</label>
          <input type="text" placeholder="What's it for?">
        </div>
      </div>
      <button class="btn" onclick="showToast('✅ Transfer initiated')">Send Money</button>
    `;
  }

  if (type === 'receive') {
    html = `
      <div class="receive-card">
        <div class="qr-box">▦</div>
        <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Scan QR code or share your account details</p>
        <div class="detail-row">
          <span class="dl">Bank</span><span class="dv">Vault Bank</span>
        </div>
        <div class="detail-row">
          <span class="dl">Account No.</span><span class="dv">1234 5678 90</span>
        </div>
        <div class="detail-row">
          <span class="dl">Routing No.</span><span class="dv">021000089</span>
        </div>
        <div class="detail-row">
          <span class="dl">Account Type</span><span class="dv">Checking</span>
        </div>
      </div>
      <button class="btn" onclick="showToast('📋 Details copied to clipboard')">Copy Details</button>
      <button class="btn btn-ghost" style="margin-top:10px" onclick="showToast('📤 Sharing…')">Share via App</button>
    `;
  }

  if (type === 'request') {
    html = `
      <div class="form-card">
        <div class="field">
          <label>Request from</label>
          <input type="text" placeholder="Name or email">
        </div>
        <div class="field">
          <label>Amount</label>
          <input type="number" placeholder="$0.00">
        </div>
        <div class="field">
          <label>Reason</label>
          <input type="text" placeholder="e.g. Dinner split, rent">
        </div>
      </div>
      <button class="btn" onclick="showToast('📨 Request sent!')">Send Request</button>
    `;
  }

  if (type === 'history') {
    html = `
      <div class="tx-filter">
        <div class="filter-chip on">All</div>
        <div class="filter-chip">Income</div>
        <div class="filter-chip">Expenses</div>
        <div class="filter-chip">Transfers</div>
      </div>
      <div class="tx-list">
        ${[
          ['📺', 'Netflix', 'Jun 21 · Subscription', '-$15.99', 'neg'],
          ['💼', 'Salary Deposit', 'Jun 20 · Income', '+$2,000.00', 'pos'],
          ['🛒', 'Groceries', 'Jun 19 · Shopping', '-$85.50', 'neg'],
          ['⚡', 'Electricity Bill', 'Jun 18 · Utilities', '-$42.00', 'neg'],
          ['🍕', 'Dominos Pizza', 'Jun 17 · Food', '-$28.40', 'neg'],
          ['💰', 'Freelance Payment', 'Jun 15 · Income', '+$450.00', 'pos'],
          ['🚗', 'Uber', 'Jun 14 · Transport', '-$12.75', 'neg'],
        ].map(([icon, name, date, amt, cls]) => `
          <div class="tx-item">
            <div class="tx-icon" style="background:rgba(255,255,255,.06)">${icon}</div>
            <div class="tx-info">
              <div class="tx-name">${name}</div>
              <div class="tx-date">${date}</div>
            </div>
            <div class="tx-amount ${cls}">${amt}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const contentEl = document.getElementById('featureContent');
  if (contentEl) {
    contentEl.innerHTML = html;
  }

  // filter chip toggle
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('on'));
      this.classList.add('on');
    });
  });

  showPage('featurePage');
}
