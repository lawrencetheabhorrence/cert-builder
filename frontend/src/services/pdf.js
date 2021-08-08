import axios from 'axios'
import FileDownload from 'js-file-download'
const baseUrl = 'http://localhost:3001'

export const printTemplate = (templateFile, data) => {
  const templateData = {
    templateFile: templateFile,
    data: data
  }
  axios.post(`${baseUrl}/`, templateData, {responseType: 'arraybuffer', headers: { 'Accept': 'application/pdf' }})
  .then(res => { FileDownload(res.data, 'certificate.pdf')})
}
