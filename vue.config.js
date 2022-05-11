/*
 * @Description:
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-05-11 15:30:29
 * @LastEditors:
 * @LastEditTime: 2022-05-11 15:31:00
 */
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        electronDownload: {
          mirror: 'https://npm.taobao.org/mirrors/electron/'
        }
      }
    }
  }
}
