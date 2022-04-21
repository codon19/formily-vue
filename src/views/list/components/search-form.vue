<template>
  <div>
    <Form :form="form">
      <SchemaField :schema="schema" :scope="{ useProvinceDataSource, useCityDataSource }" />
      <Submit @submit="onSubmit">提交</Submit>
      <Reset @click="onReset">重置</Reset>
    </Form>
  </div>
</template>

<script>
import { createForm, onFieldValueChange, onFieldReact } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Select, Input, Submit, Reset } from '@formily/element'
import areaData from '../../../utils/area'

const schema = {
  type: 'object',
  properties: {
    province: {
      type: 'number',
      title: '省',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: 'width: 240px;',
        clearable: true
      },
      'x-reactions': ['{{useProvinceDataSource()}}']
    },
    city: {
      type: 'number',
      title: '市',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: 'width: 240px;',
        clearable: true
      },
      'x-reactions': ['{{useCityDataSource()}}']
    },
    addressDetails: {
      type: 'number',
      title: '详细地址',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        style: 'width: 240px;',
        placeholder: '请输入'
      },
      'x-display': 'none'
    }
  }
}

// 设置省枚举值
const useProvinceDataSource = () => {
  return field => {
    field.dataSource = areaData.map(({ label, value }) => ({ label, value }))
  }
}

// 设置市枚举值
const useCityDataSource = () => {
  return field => {
    const componentType = field.query('province').get('value')
    if (!componentType) return []
    const findItem = areaData.find(item => item.value === componentType)
    field.dataSource = findItem ? findItem.children : []
  }
}

const form = createForm({
  values: {
    province: 2,
    city: 21
  },
  effects() {
    onFieldValueChange('province', () => {
      form.setValuesIn('city', '')
    })
    onFieldReact('addressDetails', field => {
      const city = field.query('city').value()
      // 当选择的城市是 南京 时，显示详细地址输入框
      field.display = city === 21 ? 'visible' : 'none'
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
    useProvinceDataSource,
    useCityDataSource,
    onSubmit(value) {
      console.log(value)
    },
    onReset() {
      console.log('onReset')
    }
  }
}
</script>
