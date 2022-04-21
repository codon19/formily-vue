<template>
  <div>
    <el-row style="margin-bottom: 40px">
      <el-button>图片配置项</el-button>
      <el-button>文字配置项</el-button>
    </el-row>
    <Form :form="form">
      <SchemaField :schema="schema" :scope="{ useComponentTypeDataSource, useCellTypeDataSource }" />
      <Submit @submit="onSubmit">提交</Submit>
      <Reset @click="onReset">重置</Reset>
    </Form>
  </div>
</template>

<script>
import { createForm, onFieldValueChange, onFieldReact } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Select, Input, Submit, Reset } from '@formily/element'
import componentTypes from '../../../utils/component-type'

const schema = {
  type: 'object',
  properties: {
    componentTypeId: {
      type: 'number',
      title: '组件类型',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: 'width: 240px;',
        clearable: true
      },
      'x-reactions': ['{{useComponentTypeDataSource()}}']
    },
    componentElementId: {
      type: 'number',
      title: '元件类型',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: 'width: 240px;',
        clearable: true
      },
      'x-reactions': ['{{useCellTypeDataSource()}}']
    },
    lengthWidthRatioMin: {
      type: 'number',
      title: '素材长宽比最小值',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        style: 'width: 240px;',
        placeholder: '请输入'
      }
    }
  }
}

// 设置组件类型枚举值
const useComponentTypeDataSource = () => {
  return field => {
    field.dataSource = componentTypes.map(({ label, value }) => ({ label, value }))
  }
}

// 设置元件类型枚举值
const useCellTypeDataSource = () => {
  return field => {
    const componentType = field.query('componentTypeId').get('value')
    if (!componentType) return []
    const findItem = componentTypes.find(item => item.value === componentType)
    field.dataSource = findItem ? findItem.children : []
  }
}

const form = createForm({
  values: {
    componentTypeId: 2,
    componentElementId: 12
  },
  effects() {
    onFieldValueChange('componentTypeId', () => {
      form.setValuesIn('componentElementId', '')
    })
    onFieldReact('lengthWidthRatioMin', field => {
      const componentElementId = field.query('componentElementId').value()
      field.display = componentElementId === 12 ? 'visible' : 'none'
    })
  }
})
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Select,
    Input
  }
})

export default {
  name: 'SearchForm',
  components: { Form, SchemaField, Submit, Reset },
  data() {
    return {
      form,
      schema
    }
  },
  methods: {
    useComponentTypeDataSource,
    useCellTypeDataSource,
    onSubmit(value) {
      console.log(value)
    },
    onReset() {
      console.log('onReset')
    }
  }
}
</script>
