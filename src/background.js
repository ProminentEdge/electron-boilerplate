import yargs from 'yargs';
import path from 'path';
import initUi from './spade-ui';
import initService from './spade-service';

const argv = yargs.argv;
console.log('----[ argv: ', argv);

if (argv.ui) {
  console.log('----[ spade: running as UI');
  initUi();
} else {
  console.log('----[ spade: running as Service');
  initService();
}
