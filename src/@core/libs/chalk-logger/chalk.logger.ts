import { Logger } from '@nestjs/common';
import chalk from 'chalk';

export class ChalkLogger extends Logger {
    error(message: any, trace?: string, context?: string) {
        super.error(chalk.red(message), trace, context);
    }

    warn(message: any, context?: string) {
        super.warn(chalk.yellow(message), context);
    }

    debug(message: any, context?: string) {
        super.debug(chalk.cyan(message), context);
    }

    verbose(message: any, context?: string) {
        super.verbose(chalk.magenta(message), context);
    }

    log(message: any, context?: string) {
        super.log(chalk.green(message), context);
    }
}
