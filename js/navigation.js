/**
 * Page routing and navigation for Vault Banking
 */

export function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById(id);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}
