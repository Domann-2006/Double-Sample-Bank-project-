/**
 * Toast notifications for Vault Banking
 */

export function showToast(msg) {
  const t = document.getElementById('toast');
  if (t) {
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
  }
}
