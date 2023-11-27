import request from '@/helpers/request'

const URL =  {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebooks/:id',
  DELETE: '/notebooks/:id'
}

export default {
  getALL() {
    return request(URL.GET)
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