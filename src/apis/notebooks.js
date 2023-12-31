import request from '@/helpers/request'
import {friendlyDate} from '@/helpers/date-util'
const URL =  {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebooks/:id',
  DELETE: '/notebooks/:id'
}

export default {
  getAll() {
     return new Promise((resolve,reject) => {
       request(URL.GET)
        .then(res => {
          console.log(res)
          res.data = res.data.sort((notebook1,notebook2) => notebook1.createdAt < notebook2.createdAt ? 1 : -1)
          res.data.forEach(notebook => {
             notebook.friendlyCreatedAt = friendlyDate(notebook.createdAt)            
          });
          resolve(res)
        }).catch(err => {
          reject(err)
        })
       
    })
    
  },
  updateNotebook(notebookid, {title = ''} = {title:''}) {
    return request(URL.UPDATE.replace(':id', notebookid), 'PATCH', { title })
  },
  addNotebook({title=''} = {title:''}) {
    return request(URL.ADD, 'POST', {title})
  },
  deleteNotebook(notebookid) {
    return request(URL.DELETE.replace(':id', notebookid), 'DELETE')    
  }

}