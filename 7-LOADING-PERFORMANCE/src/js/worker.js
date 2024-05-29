import { getSpentTime } from './common';

// Implement onmessage event handler of service worker here
// Since we decided to send 'start' message in './index.js' file here we should check
// that event contains this message first. Then if message matches - we should count
// spent time using getSpentTime function and send it back using postMessage method
// of service worker
