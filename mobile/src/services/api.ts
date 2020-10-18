import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.108:3333',
  //se for para um celular físico, é necessário colocar o IP da maquina
  //se for no emulador do android execute o seguinte comando: adb reverse tcp:3333 tcp:3333
});

export default api;
