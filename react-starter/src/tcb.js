import tcb from '@cloudbase/js-sdk'

window._tcbEnv = window._tcbEnv || {}
export const envId = 'my-webify-app-6gb155vqabd4c410'
export const region = window._tcbEnv.TCB_REGION

export const getApp = () => {
  const app = tcb.init({
    env: envId,
    region: region
  })

  app.auth({
    persistence: 'local'
  })

  return app
}
