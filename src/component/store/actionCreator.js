// 创建奏折
export default {
    changename(name){
      let action={
        type:'CHANGE_NAME',
        params:name
      }
      return  action
    }
  }