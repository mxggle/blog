import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('timeFormatter', (value,short = false) => {
  if(short){
      return value ? dayjs(value).format('YYYY年M月D日'): '';
  }else{
      return value ? dayjs(value).format('YYYY年M月D日 HH:mm:ss'): '';
  }
})