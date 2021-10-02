import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ'

/* const url = axios.create({baseURL: 'https://sistemacaliva.com/api/'})

url.interceptors.request.use((config)=>{
    config.headers = token
    return config
}) */

const url = axios.create({
    baseURL: 'https://sistemacaliva.com/api/',
    timeout: 3000,
    headers: {'Authorization': 'Bearer '+ token}
  });
  
 


export default url