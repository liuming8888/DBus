/**
 * @author 戎晓伟
 * @description 路由
 */
import HOCFactory from '@/app/utils/HOCFactory'
// 导入自定义组件
import App from '@/app/containers/App'
import SinkHomeWrapper from '@/app/containers/SinkManage/SinkHomeWrapper'
import SinkerTopologyWrapper from '@/app/containers/SinkManage/SinkerTopologyWrapper'
// HOCFactory({'siderHidden': true})(App)
// 导出路由
export default (store) => [
  {
    path: '/sink-manage',
    // component: HOCFactory({'siderHidden': true})(App),
    component: App,
    indexRoute: {
      onEnter: (_, replace) => {
        let TOKEN = window.localStorage.getItem('TOKEN')
        if (!TOKEN) {
          replace('/login')
        }
        replace('/sink-manage/sink-list')
      }
    },
    childRoutes: [
      {
        path: '/sink-manage/sink-list',
        component: SinkHomeWrapper
      },
      {
        path: '/sink-manage/sinker-manage',
        component: SinkerTopologyWrapper
      }
    ]
  }
]

