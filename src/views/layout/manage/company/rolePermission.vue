<template>
  <div class="flexb role_permission">
    <div class="role_left">
      <div class="flexb role_all_txt">
        <div>全部角色</div>
        <div class="fleximg" @click="addRoleClick"><span>+</span>添加</div>
      </div>
      <div class="role_all">
        <div 
          v-for="(item, index) in roleAll"
          :key="index"
          :class="Number(roleId) === Number(index)? 'role_item_active role_item els':'role_item els'"
          @click="roleChange(index)"
        >{{item}}
          <div class="flexr role_operate">
            <div class="fleximg" @click="addPersonModel"><img src="@/assets/images/role_add.png"></div>
            <div class="fleximg" @click="changeRoleNameDialogoShow($event,item)"><img src="@/assets/images/role_edit.png"></div>
            <div class="fleximg" @click="deleteRole"><img src="@/assets/images/role_delete.png"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="role_right">
      <div class="flexb role_right_top">
        <div>
          <div v-if="!changeRoleShow" class="flexl"> 
            <div class="role_name els">{{roleAll[roleId]}}</div>
            <div class="fleximg edit_img" @click="changeRoleNameToggle(roleAll[roleId])"><img src="@/assets/images/role_edit.png"></div>
          </div>
          <div v-else class="flexl">
            <el-input 
              v-model="roleName" 
              ref="RoleNameRef" 
              class="role_name_input" 
              placeholder="请输入角色名" 
            />
            <el-button type="primary" @click="saveRoleName">保存</el-button>
            <el-button type="info" plain @click="changeRoleShow=false">取消</el-button>
          </div>
        </div>
        <div>
          <el-button type="info" plain @click="deleteRole">删除角色</el-button>
          <el-button type="primary" @click="addPersonModel"
            ><KzIcon href="#icon-tianjia" size="14px" color="white" />添加人员</el-button
          >
        </div>
      </div>
      <div class="role_right_down">
        <div class="flexb">
          <el-button-group size="middle" class="btn_tab">
            <el-button 
              v-for="(item,index) in roleManage"
              :key="item"
              :class="roleOrperm === index ? 'btn_tab_active role_toggle':'role_toggle'" 
              @click=" permitOrPerson(index)"
            >{{item}}</el-button>
          </el-button-group>
          <div v-if="!roleOrperm"><el-button type="primary" @click="savePermitChange">保存</el-button> </div>
        </div>
        <div class="role_perm">
          <div v-if="!roleOrperm">
            <div v-for="(item,index) in permitList" :key="index">
              <el-checkbox 
                v-model="item.select" 
                :label="item.instance_name" 
                size="large" 
                :indeterminate="item.indeterminate"
                @change="allCheckToggle($event,index)"
              />
              <div class="check_group_pre">
                <KzCheckGroup 
                  :item="item.list" 
                  :ckeckedLists="permitCheckedListed[item.instance_id]" 
                  @allChecked="(val)=>allChackChange(val,index)" 
                  @isIndeterminate="(val)=>isIndeterminateChange(val,index)" 
                  v-model="userCheckList[item.instance_id]"
                  :allChecked = "item.userSelect"
                  :getcheckedListFlag="getcheckedListFlag"
                />
              </div>
            </div>
          </div>
          <div v-else>
            <el-table
              ref="multipleTableRef"
              :data="rolePersonList"
              style="width: 100%"
            >
              <el-table-column type="selection" width="70" align="center"/>
              <el-table-column label="姓名" min-width="120">
                <template #default="{row}">{{ row.user_name }}</template>
              </el-table-column>
              <el-table-column label="分组" min-width="120">
                <template #default="{row}">{{ row.group_name }}</template>
              </el-table-column>
              <el-table-column label="联系电话" min-width="120">
                <template #default="{row}">{{ row.mobile }}</template>
              </el-table-column>
              <el-table-column label="添加时间" min-width="150">
                <template #default="{row}">{{ formatDate(new Date(row.create_time) ,'yyyy-MM-dd') }}</template>
              </el-table-column>
              <el-table-column label="操作" min-width="120" align="center">
                <template #default="{row}">
                  <div class="fleximg ">
                    <el-button class="person_table_operate" type="text" @click="personChangeRole(row.id)">变更角色</el-button>
                    <el-button type="text" @click="roleDeletePerson(row.id)">删除</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <KzDialog v-model='changeRoleNameDialogo' title="修改角色名" @sure="saveRoleName">
      <div>
        <el-input 
          v-model="roleName"
          ref="RoleNameEditRef" 
          class="role_name_input" 
          placeholder="请输入角色名" 
        />
      </div>
    </KzDialog>
    <KzDialog v-model='addRoleShow' title="新增角色" @sure="addRoleNameDo">
      <div>
        <el-input 
          v-model="addRoleName"
          ref="addRoleNameRef" 
          class="role_name_input" 
          placeholder="请输入角色名" 
        />
      </div>
    </KzDialog>
    <KzDialog v-model='changePersonRoleShow' title="变更角色" @sure="addRoleNameDo">
      <div class="flexl person_change_role">
        <div>角色</div>
        <el-select v-model="personChangedRoles" class="person_change_role_select" multiple placeholder="请选择角色（可多选）">
          <el-option
            v-for="(item, index) in roleAll"
            :key="index"
            :label="item"
            :value="Number(index)"
          />
        </el-select>
      </div>
    </KzDialog>
    <el-dialog v-model="addPersonShow" title="添加人员" custom-class="add_person_dialogo_hwy" @close="addPersonList=[] ">
      <div class="add_person flex">
        <div class="person_tree">
          <div class="person_tree_menu flexl">
            <div 
              v-for="(item,i) in addPersonMenu"
              :key="i"
              :class="addPersonMenuActive === i?'add_person_menu_active add_person_menu_item':'add_person_menu_item'"
              @click="changeAddPersonMenu(i)"
            >{{item}}
            </div>
            <div class="person_tree_menu_line" :style="'width:'+menu_line_width+'px;'+'left:'+menu_line_left+'px'"></div>
          </div>
          <div class="person_list">
            <div v-if="!addPersonMenuActive">
              <div class="flexb search_box">
                <el-input 
                  v-model="personSearchValue"
                  class="person_search_input" 
                  placeholder="请输入姓名或昵称搜索"
                  @input="personSearchhange($event)" 
                  clearable
                />
                <el-button class="bdc_btn" @click="personSearchDo">搜索</el-button>
              </div>
              <el-scrollbar class="person_list">
                <el-empty v-if="JSON.stringify(currentRolePersonList) === '{}'" description="暂无数据" />
                <el-checkbox-group
                  v-else
                  v-model="addPersonList"
                >
                  <div >
                    <el-checkbox 
                      class="person_check_item" 
                      v-for="(itm,i) in currentRolePersonList" 
                      :key=" i" 
                      :label="Number(i)" 
                    >{{itm}}</el-checkbox>
                  </div>
                </el-checkbox-group>
              </el-scrollbar>
            </div>
            <div v-else class="person_group_pre">
              <el-scrollbar class="person_group_list">
                <el-tree
                  v-if="groupPerson.length" 
                  ref = "checkTreeRef"
                  :data="groupPerson"
                  show-checkbox
                  node-key="id"
                  :props="groupPersonProps"
                  default-expand-all
                  check-on-click-node
                  :expand-on-click-node="false"
                  @check-change="personGroupChange"
                  :default-checked-keys="addPersonList"
                />
                <el-empty v-else description="暂无数据" />
              </el-scrollbar>
            </div>
          </div>
        </div>
        <div class="person_selected">
          <div class="flexb person_selected_top">
            <div>已选择</div>
            <div>{{addPersonList.length}}<span>/人</span></div>
          </div>
          <div class="flexl person_checked_list">
            <div
              v-for="(item) in addPersonList"
              :key="item"
              class="person_checked  flexb"
            >
              {{allPerson[item]}}
              <KzIcon href="#icon-shibai" size="14px" @click="deleteCheckedPerson(item)"/>
            </div>
          </div>
        </div>
      </div>
      <div class="flexr">
        <el-button plain @click="addPersonShow = false">取消</el-button>
        <el-button type="primary" @click="addPersons">添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'; 
import KzIcon from '@/components/KzIcon.vue';
import { errMsg, getUrlParam, okMsg } from '@/utils/index';
import KzCheckGroup from '@/components/KzCheckGroup.vue'
import { useRouter } from 'vue-router';
import { ElMessageBox } from 'element-plus'
import { companyRoleList_api, permitCompanyList_api, permitRoleList_api, companyRoleNameUp_api, permitRoleAdd_api,companyRoleDel_api,companyRoleIn_api, companyMemberList_api, companyMemberDo_api, companyMemberNameGet_api, companyMemberRoleListUp_api, companyUserTwoPage_api, companyRoleIdsGet_api, companyRoleIdDel_api, companyRoleIdsUp_api } from '@/api/manage/company/rolePermit'
import KzDialog from "@/components/KzDialog.vue"
import { formatDate } from '@/utils/date'

interface IPermitPre{
  instance_id: any
  instance_name: string
  select:boolean
  indeterminate:boolean
  userSelect:any
  list:any[]
}
const router = useRouter()
const RoleNameRef = ref()//无弹框修改角色名的输入框ref
const RoleNameEditRef = ref()//弹框修改角色名的输入框ref
const addRoleNameRef = ref()//弹框添加角色名的输入框ref
const changeRoleNameDialogo = ref(false)//修改角色名的弹框是否显示
const addRoleShow = ref(false) //添加角色是否显示
const addRoleName = ref() //添加角色输入框v-model
const roleAll = <any>ref([]) //角色列表
const roleManage= ref( ['权限','人员']) //页面菜单
const roleOrperm = ref(1) //菜单是权限还是人员
const roleId= <any>ref() //当前角色的id
const changeRoleShow=ref(false)  //无弹框修改角色名是否显示
const roleName=ref() //无弹框修改角色名v-model
const userCheckList = ref() //用户点击的被选列表
const getcheckedListFlag = ref() //传递给复选框组件，父组件勾选了全选
const permitList = ref<IPermitPre[]>([])//所有权限： select:绑定是否被勾选；indeterminate：是否半勾选；userSelect：用户的勾选操作造成的被勾选的值改变
const permitCheckedList = ref([])//当前角色有的权限
const addPersonShow =ref(false) //添加人员的dialogo是否显示
const addPersonMenu = ref(['全部人员','分组']) 
const addPersonMenuActive = ref(0) //添加人员当前菜单
const menu_line_width=ref(0) //添加人员当前菜单下面横线的宽度
const menu_line_left = ref(0) //添加人员当前菜单下面横线的left值
const personSearchValue = ref()//添加人员-搜索框input的v-model
const currentRolePersonList = ref()//当前角色的显示的全部人员列表-obj
const currentRolePersonChecked = ref([]) //全部人员-被选择的人员-arr
const allPerson = ref() //真正的全部人员列表-obj
const addPersonList = <any>ref([]) //添加列表
const groupPerson = ref() //分组人员列表
const groupPersonProps = {
  children: 'list',
  label: 'name',
}
const checkTreeRef = ref()//分组人员树ref
const rolePersonList = ref() //当前角色的所有人员列表
const current = ref(1) //人员当前页数
const size = ref(10) //人员列表每页条数
const total = ref(0) //人员列表总条数
const changePersonRoleShow = ref(false) //更改人员角色dialogo显示与否
const personChangedRoles = ref() //更改人员角色选择框v-model

const getRoleList =async()=>{
  const {status,body} = await companyRoleList_api()
  const res = await permitCompanyList_api()
  res.status && (permitList.value = allPermit(res.body))
  status && (()=>{
    roleAll.value = body
    let urlRoleId = getUrlParam('roleId')
    let roleIndexs = Object.keys(body)
    roleId.value = urlRoleId || roleIndexs[0]
    router.push('/manage/company/rolepermission?roleId='+roleId.value)
    roleOrperm.value ? roleTogglePerson(roleId.value) : roleTogglePermit(roleId.value)
  })()
}
getRoleList()

//返回 { instance: { pid: [ permit_id ，permit_id ] }
const permitCheckedListed = computed(()=>{
  let arr=<any>{}
  permitCheckedList.value.length>0 && permitCheckedList.value.forEach((item:any)=>{
    arr[item.instance]={
      ...arr[item.instance],
      [item.pid]:(arr[item.instance] && arr[item.instance][item.pid])?arr[item.instance][item.pid].concat(item.permit_id):[item.permit_id]
    }
  })
  getcheckedListFlag.value = new Date().getTime()
  return arr
})

//定义初始的选择列表，有了字段名，值都为空
const allPermit = (arr:any)=>{
  console.log(arr)
  let obj = <any>{},permitObj = <any>[];
  arr.forEach((item: { instance_id: string|number; })=>{
    obj[item.instance_id]={}
    let itm = {
      ...item,
      select:false,
      indeterminate:false,
      userSelect:false
    }
    permitObj.push(itm)
  })
  console.log(obj)
  userCheckList.value = JSON.parse(JSON.stringify(obj))
  return permitObj
}

const allCheckToggle=(val:any,index:any)=>{
  permitList.value[index].select = val
  permitList.value[index].userSelect = [new Date().getTime() ,val].join(',')
  permitList.value[index].indeterminate = false
}

const allChackChange=(val:boolean,index:number)=>{
  permitList.value[index].select=val
}
const isIndeterminateChange=(val:boolean,index:number)=>{
  permitList.value[index].indeterminate=val
}

//切换权限或者人员菜单
const permitOrPerson=(index:any)=>{
  roleOrperm.value = index
  index ? roleTogglePerson() : roleTogglePermit()
}

//获取当前角色的权限
const roleTogglePermit=async(id?:any)=>{
  const { status,body } = await permitRoleList_api({roleId:id || getUrlParam('roleId')})
  status && (permitCheckedList.value = body)
}
//获取当前角色的所有人员
const roleTogglePerson = async(id?:any)=>{
  let data = {
    roleId:id || getUrlParam('roleId'),
    current:current.value,
    size:size.value,
  }
  const { status,body } = await companyUserTwoPage_api(data)
  status && (()=>{
    rolePersonList.value = body.records
    total.value =body.total 
  })()
}

//当前人员变更角色按钮
const personChangeRole= async(id:any) =>{
  changePersonRoleShow.value=true
  const {status, body} = await companyRoleIdsGet_api({memberId:id})
  status && (personChangedRoles.value = body)
}

//当前角色删除当前人员
const roleDeletePerson=(id:any) =>{
  ElMessageBox.confirm('是否确认从当前角色中删除此人员', '操作提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  }).then(async()=>{
    // let data = {
    //   role_id: Number(getUrlParam('roleId')) 
    // }
    // const {status, message} = await companyRoleDel_api(data)
    // status && (()=>{
    //   roleTogglePerson()
    //   okMsg(message ? message.toString() :'删除成功')
    // })()
  })
}

//修改角色名
const saveRoleName = async()=>{
  if(!roleName.value){
    errMsg('请输入角色名')
  }else{
    let data={
      "role_id":Number(roleId.value),
      "role_name": roleName.value
    }
    const { status } = await companyRoleNameUp_api(data)
    status && (()=>{
      roleAll.value[roleId.value] = roleName.value
      okMsg('修改成功')
    })()
    changeRoleShow.value=false
    changeRoleNameDialogo.value=false
  }
}

//新增角色名
const addRoleNameDo= async()=>{
  const {status,message} = await companyRoleIn_api({role_name:addRoleName.value})
  addRoleShow.value = false
  addRoleName.value = ''
  status && (async()=>{
    okMsg(<string>message)
    const res =  await companyRoleList_api()
    res.status && (roleAll.value = res.body)
  })()
} 
//新增角色点击事件
const addRoleClick=()=>{
  addRoleShow.value= true
  nextTick(()=>{
    addRoleNameRef.value.focus()
  })
}

//切换角色
const roleChange=(index:any)=>{
  roleId.value = index
  router.push('/manage/company/rolepermission?roleId='+index)
  roleOrperm.value ? roleTogglePerson(index) : roleTogglePermit(index)
}

const savePermitChange = ()=>{
  ElMessageBox.confirm('是否确认保存当前勾选', '操作提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  }).then(async()=>{
    let data = {
      map: getValueObject(userCheckList.value),
      role_id: Number(getUrlParam('roleId')) 
    }
    const {status, message} = await permitRoleAdd_api(data)
    status && (()=>{
      roleTogglePermit()
      okMsg(message ? message.toString() :'保存成功')
    })()
  })
}
const getValueObject =( objt:any)=>{
  console.log(objt)
  let obj = <any>{}
  for(let i in objt){
    for(let j in objt[i]){
      objt[i][j].length >0 && (obj[i] =  obj[i]?obj[i].concat(objt[i][j]) :objt[i][j])
    }
  }
  return obj
}
const deleteRole = async()=>{
  ElMessageBox.confirm('是否确认删除当前角色', '操作提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  }).then(async()=>{
    let data = {
      role_id: Number(getUrlParam('roleId')) 
    }
    const {status, message} = await companyRoleDel_api(data)
    status && (()=>{
      router.push('/manage/company/rolepermission')
      getRoleList()
      okMsg(message ? message.toString() :'删除成功')
    })()
  })
}
const changeRoleNameToggle = (name:any)=>{
  changeRoleShow.value=true;
  roleName.value=name;
  nextTick(()=>{
    RoleNameRef.value!.focus()
  })
}

const changeRoleNameDialogoShow=(e:any,name:any)=>{
  e.stopPropagation();
  changeRoleNameDialogo.value=true
  roleName.value=name;
  nextTick(()=>{
    RoleNameEditRef.value!.focus()
  })
}

//添加人员切换菜单
const changeAddPersonMenu=(i:number)=>{
  addPersonMenuActive.value = i
  getNavLeft()
}

//切换菜单下面那条线的效果
const getNavLeft = () => {
  nextTick(() => {
    const activeDom = document.querySelector('.add_person_menu_active') as HTMLElement
    activeDom && (()=>{
      menu_line_left.value = activeDom.offsetLeft 
      menu_line_width.value = activeDom.offsetWidth
    })()
  })
}
//点击添加人员
const addPersonModel =()=>{
  addPersonShow.value = true
  getPersonList()
  personGroupsList()
  nextTick(()=>{
    getNavLeft()
  })
}

//获取所有人员
const getPersonList = async()=>{
  const {status,body} = await companyMemberList_api()
  status && (()=>{
    currentRolePersonList.value = body
    allPerson.value = body
  })()
}

//点击搜索按钮
const personSearchDo = async()=>{
  if(!personSearchValue.value){
    errMsg('请输入姓名或昵称搜索')
    return
  }
  const {status,body} = await companyMemberNameGet_api({name:personSearchValue.value})
  status && (currentRolePersonList.value=body)
}

//搜索框没有文字时再次调用全部人员显示
const personSearchhange=(e:any)=>{
  !e && getPersonList()
}

//删除当前被选人员
const deleteCheckedPerson = (item:any)=>{
  let arr = JSON.parse(JSON.stringify(addPersonList.value))
  let index = arr.indexOf(item)
  if(checkTreeRef.value){
    let checkedChildren = getChildrenKeys(checkTreeRef.value.getCheckedKeys())
    if(checkedChildren.indexOf(item) != -1){
       checkTreeRef.value.setChecked(item,false,false)
    }else{
      addPersonList.value.splice(index,1)
    }
  }else{
    addPersonList.value.splice(index,1)
  }
}
const getChildrenKeys = (arr:any)=>{
  arr.forEach((item:any)=>{
    !allPerson.value[item.toString()] && arr.splice(arr.indexOf(item),1)
  })
  return arr
}
//菜单切换到分组时获取所有人员
const personGroupsList = async()=>{
  const {status, body} = await companyMemberDo_api()
  status && (groupPerson.value=body)
}

//分组人员复选框勾选事件
const personGroupChange = (item:any,checked:any,childrenChecked:any)=>{
  let arr = JSON.parse(JSON.stringify(addPersonList.value))
  !item.list && (()=>{
    checked && (()=>{
      arr.push(item.id)
    })()
    !checked && (()=>{
      let index = arr.indexOf(item.id)
      arr.splice(index,1)
    })()
  })()
  addPersonList.value = arr
}

//添加 人员按钮
const addPersons = async()=>{
  if(!addPersonList.value.length){
    errMsg('请选择要添加的人员')
    return
  }
  let data = {
    role_id:getUrlParam('roleId'),
    member_ids:addPersonList.value
  }
  const {status} = await companyMemberRoleListUp_api(data)
  addPersonShow.value = false
}
</script>

<style lang="scss" scoped>
.role_permission{
  align-items:stretch;
  .role_left{
    width: 260px;
    background: #FFFFFF;
    border-radius: 8px;
    .role_all_txt{
      padding: 22px 24px;
      border-bottom: 1px solid rgba(238,238,238,1);
      >div:nth-child(1){
        font-size: 18px;
        color: #333333;
        line-height: 20px;
        font-weight: 600;
      }
      >div:nth-child(2){
        font-size: 14px;
        color: #2D68EB;
        letter-spacing: 0;
        line-height: 16px;
        font-weight: 400;
        cursor: pointer;
        >span{
          font-size: 20px;
          margin-right: 5px;
        }
      }
    }
    .role_all{
      padding: 24px;
      .role_item{
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        width: 100%;
        margin-bottom: 16px;
        cursor: pointer;
        position: relative;
        .role_operate{
          width:80px ;
          background: rgba($color: #ffffff, $alpha: 0.95);
          box-shadow: 0 0 10px #ffffff;
          position: absolute;
          top: 0;
          right: 0;
          display: none;
          >div{
            width: 16px;
            margin-right: 12px;
          }
          >div:last-child{
            margin-right: 0;
          }
        }
      }
      .role_item:hover{
        color: #2D68EB;
      }
      .role_item_active{
        color: #2D68EB;
        .role_operate{
          display: flex;
        }
      }
      // .role_item:hover .role_operate{
      //   display: flex;
      // }
    }
    .role_all>.role_item:last-child{
      margin-bottom: 0;
    }
  }
  .role_right{
    width: calc(100% - 276px) ;
    background: #ffffff;
    border-radius: 8px;
    overflow: auto;
    .role_right_top{
      padding: 16px 24px;
      border-bottom: 1px solid rgba(238,238,238,1);
      .role_name{
        font-size: 18px;
        color: #333333;
        line-height: 20px;
        font-weight: 600;
        max-width: 240px;
      }
      .edit_img{
        width:16px;
        margin-left: 12px;
        cursor: pointer;
      }
      .role_name_input{
        width: 300px;
        height: 32px;
        margin-right: 12px;
        :deep(.el-input__wrapper){
          border-radius: 2px;
        }
            
      }
    }
    .role_right_down{
      padding: 24px;
      .role_toggle{
        width: 74px;
      }
      .role_perm{
        margin-top: 24px;
        .check_group_pre{
          padding: 24px;
          border: 1px solid rgba(221,221,221,1);
        }
        :deep(.el-table){
          thead>tr>th{ 
            background: #F2F2F3;
            height: 40px;
            .cell{ 
              font-size: 14px;
              color: #333333;
              line-height: 14px;
              font-weight: 600;
            }
          }
          .person_table_operate{ 
            margin-right: 12px;
          }
          td.el-table__cell div{ 
            color: #666666;
          }
        }
        
      }
    }
  }
  .add_person{
    border: 1px solid rgba(221,221,221,1);
    border-radius: 4px;
    margin-bottom: 20px;
    .person_tree{
      border-right: 1px solid rgba(221,221,221,1);
      width: 300px;
      .person_tree_menu{
        position: relative;
        border-bottom: 1px solid rgba(221,221,221,1);
        .add_person_menu_item{
          font-size: 14px;
          color: #606266;
          padding: 10px 0 ;
          margin-left: 24px;
          cursor: pointer;
        }
        .add_person_menu_active{
          color: #2D68EB;
          font-weight: 600;
        }
        .person_tree_menu_line{
          position: absolute;
          bottom: 0;
          height: 2px;
          background: #2D68EB;
          border-radius: 1px;
          transition: all 0.2s linear;
        }
      }
      .person_list{
        >div{ 
          .search_box{ 
            padding: 16px;
            .person_search_input{ 
              width: 200px;
            }
          }
          .person_list{ 
            height: 328px;
            padding: 0 24px;
            .person_check_item{ 
              width: 100%;
              
            }
            :deep(.el-checkbox){
              margin-right:0;
              .el-checkbox__input{ 
                position: absolute;
                right: 0;
              }
              .el-checkbox__label{ 
                padding: 0;
              }
            }
          }
        }
        .person_group_pre{ 
          height: 392px;
          padding-top: 10px;
          .person_group_list{ 
            height: 100%;
            padding: 0 16px;
          }
          :deep(.el-tree){
            .el-checkbox{ 
               position: absolute;
            right: 0;
            } 
           
          }
        }
      }
    }
  }
  .person_selected{
    width: calc(100% - 300px);
    padding: 10px 16px;
    .person_selected_top{ 
      width: 100%;
      margin-bottom: 26px;
      >div{ 
        font-size: 14px;
        color: #333333;
        line-height: 14px;
        font-weight: 600;
        >span{ 
          font-size: 12px;
          color: #909399;
          font-weight: 400;
        }
      }
    }
    .person_checked_list{ 
      flex-wrap: wrap;
      .person_checked{ 
        width: 100px;
        height: 32px;
        padding:7px 10px 5px 12px ;
        margin: 0 10px 10px 0;
        border: 1px solid rgba(221,221,221,1);
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
      }
      >div:nth-child(3n){
        margin-right: 0;
      }
      .person_checked:hover{ 
        border: 1px solid rgba(45,104,235,1);
      }
    }
  }
  .person_change_role{ 
    >div:nth-child(1){
      margin-right: 16px;
    }
    .person_change_role_select{ 
      width: 400px;
    }
  }
}

</style>