import { Subject } from 'rxjs';

export const AlertType = {
  Success: 'Success',
  Error: 'Error',
  Info: 'Info',
  Warning: 'Warning',
};

const alertSubject = new Subject();
const defaultId = 'default-alert';

function alert(_alert: any) {
  alertSubject.next(_alert);
}
function success(message: any, options: any) {
  alert({ ...options, type: AlertType.Success, message });
}

function error(message: any) {
  alert({ type: AlertType.Error, message });
}

function info(message: any, options: any) {
  alert({ ...options, type: AlertType.Info, message });
}

function warn(message: any, options: any) {
  alert({ ...options, type: AlertType.Warning, message });
}

function clear(id = defaultId) {
  alertSubject.next({ id });
}

export const AlertService = {
  success,
  error,
  info,
  warn,
  alert,
  clear,
};
