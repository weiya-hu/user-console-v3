<template>
  <div class="check_group">
    <div v-for="(item,index) in permits" :key="index" class="flexl permit_page">
      <div class="flexl permit_page_front els">
        <el-checkbox
          v-model="checkAll[item.checkAll.permit_id]"
          :indeterminate="isIndeterminate[item.checkAll.permit_id]"
          @change="checkAllChange($event,item.checkAll.permit_id)"
          >{{item.checkAll.permit_name}}
        </el-checkbox>
      </div>
      <el-checkbox-group
        v-model="checkedList[item.checkAll.permit_id]"
        @change="CheckedPermitChange($event,item.checkAll.permit_id)"
      >
      <div  class="flexl permit_page_operate">
        <el-checkbox class="permit_page_operate_check" v-for="(itm) in item.children" :key="itm.permit_id" :label="itm.permit_id">{{
          itm.permit_name
        }}</el-checkbox>
        </div>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * 权限管理的复选框封装
 * @author hwy
 */

import { ref, computed, watch } from 'vue'

interface IPermit{
  permit_name:string,
  pid:number,
  permit_id:number
}
const props = withDefaults(
  defineProps<{
    item:IPermit[] //单个角色所有勾选项，包括未勾选和勾选的
    ckeckedLists:any //单个角色所有被勾选项
    allChecked:any //单个角色的全选勾选操作，用户操作的
    getcheckedListFlag:any //角色切换flag，角色切换后ckeckedLists要改变，ckeckedLists没有直接作用到组件，是写在函数里面的，这里给个改变的时机，调用函数
  }>(),{}
)
//'update:modelValue'：勾选的结果，'allChecked'：组件勾选值变化后反馈到父组件的全选勾选框，'isIndeterminate'：组件勾选值变化后反馈到父组件的全选勾选框的是否半勾选样式
const emit = defineEmits(['update:modelValue','allChecked','isIndeterminate'])

const checkAll = ref() //{pid:boolean，pid:boolean} 勾选组是否全选的集合
const isIndeterminate = ref() //{pid:boolean，pid:boolean} 勾选组是否是半勾选的集合
const checkes = ref() // {pid:[permit_id.]} 所有的permit_id集合
const checkedList = ref() //{pid:[permit_id]} 被选中的permit_id集合

//监听checkAll变化切换父组件中全选选择框的值
watch(checkAll, (newName) => {
  let trueFlag =true, falseFlag =true,isIndeterminateFlag=false
  for(let i in newName){
    !newName[i] && (trueFlag=false)
    newName[i] && (falseFlag=false)
  }
  for(let j in isIndeterminate.value){
    isIndeterminate.value[j] && (isIndeterminateFlag=true)
  }
  emit('allChecked',trueFlag);
  emit('isIndeterminate',(!trueFlag && !falseFlag) || isIndeterminateFlag);
});

//监听父组件的全选值变化，变化组件的勾选值
watch(()=>props.allChecked, (newName) => {
  let newNames = newName.split(',');
  (newNames[1] == 'true') && (()=>{
    checkedList.value=JSON.parse(JSON.stringify(checkes.value)) 
    emit('update:modelValue',checkedList.value)
    checkAll.value = trueOrFalse(checkAll.value,true)
    isIndeterminate.value = trueOrFalse(isIndeterminate.value,false)
  })();
  (newNames[1] == 'false') && (()=>{
    checkedList.value = trueOrFalse(checkedList.value,[])
    emit('update:modelValue',checkedList.value)
    checkAll.value = trueOrFalse(checkAll.value,false)
    isIndeterminate.value = trueOrFalse(isIndeterminate.value,false)
  })()
});

watch(()=>props.getcheckedListFlag, (newName) => {
  getList()
});

const trueOrFalse = (object:any,flag:any)=>{
  let obj = JSON.parse(JSON.stringify(object)) 
  for(let i in obj){obj[i]=flag}
  return obj
}
//在item={checkAll:item,children:[]}的children中push pid=checkAll.permit_id=的IPermit
const findSamePararm = (arr:any,itm:IPermit)=>{
  arr.forEach((item:any)=>{
    if(item.checkAll.permit_id === itm.pid){
      item.children.push(itm)
      return arr
    }
  })
  return arr
}

//获取初始是否全选checkAll，是否部分选isIndeterminate
const getIsChecked = (arr:any,obj:any)=>{
  let objt = <any>{},object = <any>{}
  arr.forEach((item:any) => {
    objt[item.checkAll.permit_id]=item.children.length===obj[item.checkAll.permit_id].length
    object[item.checkAll.permit_id] = obj[item.checkAll.permit_id].length>0 && obj[item.checkAll.permit_id].length < item.children.length
  });
  return [objt,object]
}

// 返回[{checkAll:IPermit,children:IPermit[]}],仅显示用
// checkedList= {pid:[permit_id,permit_id]}
const permits = computed(()=>{
  let arr = <any>[]
  props.item.forEach((item) => {
    !item.pid && arr.push({checkAll:item,children:[]})
    item.pid && (arr = findSamePararm(arr,item))
  })
  return arr
})

const getList=()=>{
  let arr = <any>[],obj = <any>{},checks = <any>{}
  props.item.forEach((item) => {
    !item.pid && arr.push({checkAll:item,children:[]})
    item.pid && (()=>{
      arr = findSamePararm(arr,item)
      obj[item.pid]=[]
      checks[item.pid]=checks[item.pid]?checks[item.pid].concat(item.permit_id):[item.permit_id]
    })()
  })

  checkes.value = checks
  checkedList.value={...obj,...props.ckeckedLists}
  emit('update:modelValue',checkedList.value)
  checkAll.value = getIsChecked(arr,checkedList.value)[0]
  isIndeterminate.value = getIsChecked(arr,checkedList.value)[1]
}

getList()
//全选勾选事件
const checkAllChange = (val:any,permitId:any)=>{
  checkedList.value = {...checkedList.value,[permitId]:val ? checkes.value[permitId] : []} 
  emit('update:modelValue',checkedList.value)
  isIndeterminate.value={...isIndeterminate.value,[permitId]:false}
  checkAll.value ={...checkAll.value,[permitId]:val} //这一步不写也可以不选，但是监听的checkAll没有变化，所以赋值一次
}

//子选项勾选事件
const CheckedPermitChange=(value:any,permitId:any)=>{
  const checkedCount = value.length
  checkAll.value ={...checkAll.value,[permitId]:checkedCount === checkes.value[permitId].length} 
  isIndeterminate.value ={...isIndeterminate.value,[permitId]:checkedCount > 0 && checkedCount < checkes.value[permitId].length}
  checkedList.value = {...checkedList.value,[permitId]:value}  
  emit('update:modelValue',checkedList.value)
}
</script>
<style lang="scss" scoped>
.check_group{
  border: 1px solid rgba(221,221,221,1);
  border-bottom:none;
  .permit_page{
    border-bottom: 1px solid rgba(221,221,221,1);
    align-items: stretch;
    .permit_page_front{
      width: 220px;
      min-width: 220px;
      padding-left: 24px;
      border-right: 1px solid rgba(221,221,221,1);
      background: #F2F3F3;
    }
    .permit_page_operate{
      flex-wrap: wrap;
      padding-left: 22px;
      .permit_page_operate_check{
        height: 48px;
        width: 190px;
      }
    }
  }
  
}
</style>
