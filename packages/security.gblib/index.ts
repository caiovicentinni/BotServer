/*****************************************************************************\
|                                               ( )_  _                       |
|    _ _    _ __   _ _    __    ___ ___     _ _ | ,_)(_)  ___   ___     _     |
|   ( '_`\ ( '__)/'_` ) /'_ `\/' _ ` _ `\ /'_` )| |  | |/',__)/' _ `\ /'_`\   |
|   | (_) )| |  ( (_| |( (_) || ( ) ( ) |( (_| || |_ | |\__, \| ( ) |( (_) )  |
|   | ,__/'(_)  `\__,_)`\__  |(_) (_) (_)`\__,_)`\__)(_)(____/(_) (_)`\___/'  |
|   | |                ( )_) |                                                |
|   (_)                 \___/'                                                |
|                                                                             |
| General Bots Copyright (c) Pragmatismo.io. All rights reserved.             |
| Licensed under the AGPL-3.0.                                                |
|                                                                             |
| According to our dual licensing model, this program can be used either      |
| under the terms of the GNU Affero General Public License, version 3,        |
| or under a proprietary license.                                             |
|                                                                             |
| The texts of the GNU Affero General Public License with an additional       |
| permission and of our proprietary license can be found at and               |
| in the LICENSE file you have received along with this program.              |
|                                                                             |
| This program is distributed in the hope that it will be useful,             |
| but WITHOUT ANY WARRANTY, without even the implied warranty of              |
| MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                |
| GNU Affero General Public License for more details.                         |
|                                                                             |
| "General Bots" is a registered trademark of Pragmatismo.io.                 |
| The licensing of the program under the AGPLv3 does not imply a              |
| trademark license. Therefore any rights, title and interest in              |
| our trademarks remain entirely with us.                                     |
|                                                                             |
\*****************************************************************************/

/**
 * @fileoverview General Bots server core.
 */

'use strict';

const UrlJoin = require('url-join');

import { GBMinInstance, IGBCoreService, IGBPackage } from 'botlib';

import { Sequelize } from 'sequelize-typescript';
import { GuaribasGroup, GuaribasUser, GuaribasUserGroup } from './models';

export class GBSecurityPackage implements IGBPackage {
  public sysPackages: IGBPackage[] = null;
  public loadPackage(core: IGBCoreService, sequelize: Sequelize): void {
    core.sequelize.addModels([
      GuaribasGroup,
      GuaribasUser,
      GuaribasUserGroup
    ]);

    core;
  }

  public unloadPackage(core: IGBCoreService): void {

  }

  public loadBot(min: GBMinInstance): void {

  }

  public unloadBot(min: GBMinInstance): void {

  }
  public onNewSession(min: GBMinInstance, step: any): void {

  }
}