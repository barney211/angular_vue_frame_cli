import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
// import detail from '@/components/detail'
import projectPlan from '@/components/projectPlan'
import modelDesign from '@/components/modelDesign/modelDesign'
import modelHome from '@/components/modelDesign/modelHome'
import sketch from '@/components/modelDesign/sketch'
import effectPic from '@/components/modelDesign/effectPic'
import mathModel from '@/components/modelDesign/mathModel'
import mudModel from '@/components/modelDesign/mudModel'
import engineeringDesign from '@/components/engineeringDesign'
import concurrentEngineering from '@/components/concurrentEngineering'
import validationEng from '@/components/validationEng'
import techConsultation from '@/components/techConsultation'
import projects from '@/components/projects'


Vue.use(Router)

export default new Router({
  routes: [
     {
       path: '/',
       name: 'home',
       component: home
     },
    {
      path: '/projectPlan',
      name: 'projectPlan',
      component: projectPlan
    },
    {
      path: '/modelDesign',
      name: 'modelDesign',
      component: modelDesign,
      children:[
        {path:'/modelDesign',name:'modelHome',component:modelHome},
        {path:'/modelDesign/sketch',name:'sketch',component:sketch},
        {path:'/modelDesign/effectPic',name:'effectPic',component:effectPic},
        {path:'/modelDesign/mathModel',name:'mathModel',component:mathModel},
        {path:'/modelDesign/mudModel',name:'mudModel',component:mudModel},
      ]
    },
    {
      path: '/engineeringDesign',
      name: 'engineeringDesign',
      component: engineeringDesign
    },
    {
      path: '/concurrentEngineering',
      name: 'concurrentEngineering',
      component: concurrentEngineering
    },
    {
      path: '/validationEng',
      name: 'validationEng',
      component: validationEng
    },
    {
      path: '/techConsultation',
      name: 'techConsultation',
      component: techConsultation
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    }
    // {
    //   path: '/detail',
    //   name: 'detail',
    //   component: detail
    // }
  ]
})
