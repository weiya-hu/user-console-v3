<template>
  <div v-if="modelValue" class="message_tip_pre fleximg">
    <div class="message_tip fleximg">{{props.message}}</div>
  </div>
  
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = withDefaults(
  defineProps<{
    message : any
    modelValue : boolean
    send:any
  }>(),
  {}
)

const emit = defineEmits(['update:modelValue'])


const timer = ()=>{
  setTimeout(()=>{
    emit('update:modelValue',false)
  },2000)
}

watch(
  () => props.send,
  (newName) => {
    timer()
  }
)
</script>

<script lang="ts"></script>

<style scoped lang="scss">
.message_tip_pre{
  width: 3.75rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.message_tip{
  max-width: 90%;
  font-size: 0.14rem;
  line-height: 0.2rem;
  color: #FFFFFF; 
  padding: 0.16rem 0.14rem;
  border-radius: 2px;
  background: rgba($color: #000000, $alpha: 0.75);
  flex-wrap:wrap;
}
</style>
