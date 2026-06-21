/**
 * Main application entrypoint for Vault Banking
 */

import { tick } from './utils.js';
import { showToast } from './toast.js';
import { showPage } from './navigation.js';
import { openFeature } from './feature.js';

// Expose these core functions to the global window scope
// so that inline HTML `onclick` attributes work seamlessly.
window.showToast = showToast;
window.showPage = showPage;
window.openFeature = openFeature;

// Initialize the clock ticker on load
tick();
// Tick every 10 seconds to keep clock updated
setInterval(tick, 10000);
