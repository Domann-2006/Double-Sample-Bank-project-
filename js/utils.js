/**
 * Helper utilities for Vault Banking
 */

// Live clock ticker
export function tick() {
  const now = new Date();
  const t = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.querySelectorAll('#liveTime, #featTime').forEach(el => el.textContent = t);
}
