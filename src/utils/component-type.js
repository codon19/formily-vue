const component_types = [
  {
    value: 1,
    label: '背景组件',
    color: '#d8d8d8',
    children: [
      {
        label: '背景',
        value: 1,
        children: []
      },
      {
        label: '前景背景遮罩',
        value: 10,
        children: []
      },
      {
        label: '111',
        value: 59,
        children: []
      }
    ]
  },
  {
    value: 2,
    label: '主体物组件',
    color: '#fdff00',
    children: [
      {
        label: '主体物1',
        value: 12,
        children: []
      },
      {
        label: '主体物2',
        value: 13,
        children: []
      },
      {
        label: '主体物装饰件',
        value: 56,
        children: []
      },
      {
        label: '主体物装饰件2',
        value: 71,
        children: []
      },
      {
        label: '主体物复用',
        value: 124,
        children: []
      }
    ]
  },
  {
    value: 3,
    label: '主标题组件',
    color: '#f0003a',
    children: [
      {
        label: '标题',
        value: 16,
        children: []
      },
      {
        label: '标题英文',
        value: 17,
        children: []
      },
      {
        label: '副标题',
        value: 18,
        children: []
      },
      {
        label: '副标题英文',
        value: 19,
        children: []
      },
      {
        label: '三级信息',
        value: 20,
        children: []
      },
      {
        label: '三级信息英文',
        value: 21,
        children: []
      },
      {
        label: '装饰物1',
        value: 22,
        children: []
      },
      {
        label: '装饰物2',
        value: 67,
        children: []
      },
      {
        label: '装饰物3',
        value: 68,
        children: []
      }
    ]
  },
  {
    value: 4,
    label: 'LOGO组件',
    color: '#ff5800',
    children: [
      {
        label: 'LOGO',
        value: 5,
        children: []
      },
      {
        label: '装饰物',
        value: 23,
        children: []
      },
      {
        label: '一级信息',
        value: 24,
        children: []
      },
      {
        label: '装饰物2',
        value: 79,
        children: []
      }
    ]
  },
  {
    value: 5,
    label: '次级文案组件',
    color: '#ff5800',
    children: [
      {
        label: '次级文案',
        value: 7,
        children: []
      },
      {
        label: '次级文案英文',
        value: 25,
        children: []
      },
      {
        label: '二级文案',
        value: 26,
        children: []
      },
      {
        label: '二级信息英文',
        value: 27,
        children: []
      },
      {
        label: '三级文案',
        value: 28,
        children: []
      },
      {
        label: '三级信息英文',
        value: 29,
        children: []
      },
      {
        label: '装饰物1',
        value: 30,
        children: []
      },
      {
        label: '装饰物2',
        value: 66,
        children: []
      },
      {
        label: '装饰物3',
        value: 75,
        children: []
      },
      {
        label: '装饰物4',
        value: 76,
        children: []
      }
    ]
  },
  {
    value: 6,
    label: '净含量组件',
    color: '#0091ff',
    children: [
      {
        label: '净含量',
        value: 31,
        children: []
      },
      {
        label: '净含量说明',
        value: 32,
        children: []
      },
      {
        label: '装饰物1',
        value: 40,
        children: []
      },
      {
        label: '装饰物2',
        value: 69,
        children: []
      },
      {
        label: '装饰物3',
        value: 78,
        children: []
      }
    ]
  },
  {
    value: 7,
    label: '装饰物组件',
    color: '#a61dff',
    children: [
      {
        label: '装饰物1',
        value: 33,
        children: []
      },
      {
        label: '一级信息',
        value: 34,
        children: []
      },
      {
        label: '一级信息英文',
        value: 35,
        children: []
      },
      {
        label: '二级信息',
        value: 36,
        children: []
      },
      {
        label: '二级信息英文',
        value: 37,
        children: []
      },
      {
        label: '三级信息',
        value: 38,
        children: []
      },
      {
        label: '三级信息英文',
        value: 39,
        children: []
      },
      {
        label: '装饰物2',
        value: 64,
        children: []
      },
      {
        label: '装饰物3',
        value: 65,
        children: []
      },
      {
        label: '装饰物4',
        value: 74,
        children: []
      }
    ]
  },
  {
    value: 8,
    label: '背面_食品信息组件',
    color: '#f0003a',
    children: [
      {
        label: '食品信息',
        value: 58,
        children: []
      },
      {
        label: '装饰件',
        value: 60,
        children: []
      },
      {
        label: '装饰件2',
        value: 72,
        children: []
      }
    ]
  },
  {
    value: 9,
    label: '背面_生产信息组件',
    color: '#ffb81a',
    children: [
      {
        label: '生产信息',
        value: 54,
        children: []
      },
      {
        label: '装饰物',
        value: 55,
        children: []
      },
      {
        label: '装饰件2',
        value: 73,
        children: []
      }
    ]
  },
  {
    value: 10,
    label: '背面_条形码组件',
    color: '#ff5800',
    children: [
      {
        label: '条码',
        value: 57,
        children: []
      }
    ]
  },
  {
    value: 11,
    label: '背面_二维码组件',
    color: '#fdff00',
    children: [
      {
        label: '图标',
        value: 52,
        children: []
      },
      {
        label: '二维码文字',
        value: 53,
        children: []
      }
    ]
  },
  {
    value: 12,
    label: '背面_环保图标',
    color: '#a61dff',
    children: [
      {
        label: '图标',
        value: 50,
        children: []
      },
      {
        label: '环保图标文案',
        value: 51,
        children: []
      }
    ]
  },
  {
    value: 13,
    label: '背面_可回收图标',
    color: '#0091ff',
    children: [
      {
        label: '可回收图标文案',
        value: 48,
        children: []
      },
      {
        label: '图标',
        value: 49,
        children: []
      }
    ]
  },
  {
    value: 14,
    label: '背面_营养成分表',
    color: '#d8d8d8',
    children: [
      {
        label: '装饰物',
        value: 41,
        children: []
      },
      {
        label: '营养成分信息',
        value: 42,
        children: []
      },
      {
        label: '营养成分信息标题',
        value: 102,
        children: []
      }
    ]
  },
  {
    value: 28,
    label: '背面_LOGO组件',
    color: '#EA9A88',
    children: [
      {
        label: 'LOGO',
        value: 45,
        children: []
      },
      {
        label: '装饰物',
        value: 46,
        children: []
      },
      {
        label: '一级信息',
        value: 47,
        children: []
      },
      {
        label: '装饰物2',
        value: 83,
        children: []
      }
    ]
  },
  {
    value: 29,
    label: '背面_装饰物组件',
    color: '#89DFE8',
    children: [
      {
        label: '装饰物（废弃勿用）',
        value: 43,
        children: []
      },
      {
        label: '装饰物',
        value: 44,
        children: []
      },
      {
        label: '一级信息',
        value: 63,
        children: []
      },
      {
        label: '装饰物背景',
        value: 70,
        children: []
      }
    ]
  },
  {
    value: 30,
    label: '背面_文案组件',
    color: '#D689E8',
    children: [
      {
        label: '一级文案',
        value: 61,
        children: []
      },
      {
        label: '装饰物',
        value: 62,
        children: []
      },
      {
        label: '二级文案',
        value: 77,
        children: []
      }
    ]
  },
  {
    value: 31,
    label: '背景装饰物',
    color: '#F1F1F1',
    children: [
      {
        label: '固定装饰件',
        value: 80,
        children: []
      },
      {
        label: '匹配装饰件',
        value: 81,
        children: []
      }
    ]
  },
  {
    value: 32,
    label: '次级主体物',
    color: '#ffffff',
    children: [
      {
        label: '主体物1',
        value: 101,
        children: []
      }
    ]
  },
  {
    value: 33,
    label: '背面_主标题组件',
    color: '#000000',
    children: [
      {
        label: '标题',
        value: 92,
        children: []
      },
      {
        label: '标题英文',
        value: 93,
        children: []
      },
      {
        label: '副标题',
        value: 94,
        children: []
      },
      {
        label: '副标题英文',
        value: 95,
        children: []
      },
      {
        label: '三级信息',
        value: 96,
        children: []
      },
      {
        label: '三级信息英文',
        value: 97,
        children: []
      },
      {
        label: '装饰物1',
        value: 98,
        children: []
      },
      {
        label: '装饰物2',
        value: 99,
        children: []
      },
      {
        label: '装饰物3',
        value: 100,
        children: []
      }
    ]
  },
  {
    value: 34,
    label: '茶包装专用-勿删',
    color: '#fff000',
    children: [
      {
        label: '企业LOGO',
        value: 103,
        children: []
      },
      {
        label: '茶LOGO',
        value: 104,
        children: []
      },
      {
        label: '二维码',
        value: 105,
        children: []
      },
      {
        label: '照片',
        value: 106,
        children: []
      },
      {
        label: '条形码',
        value: 107,
        children: []
      },
      {
        label: '主标题',
        value: 108,
        children: []
      },
      {
        label: '宣传语',
        value: 109,
        children: []
      },
      {
        label: '联系信息',
        value: 110,
        children: []
      },
      {
        label: '产品名称',
        value: 111,
        children: []
      },
      {
        label: '原材料供应商',
        value: 112,
        children: []
      },
      {
        label: '净含量-内袋',
        value: 113,
        children: []
      },
      {
        label: '净含量-礼盒',
        value: 114,
        children: []
      },
      {
        label: '产品名称-礼盒',
        value: 115,
        children: []
      },
      {
        label: '生产信息-内袋',
        value: 116,
        children: []
      },
      {
        label: '生产信息-礼盒',
        value: 117,
        children: []
      },
      {
        label: '冲泡水温',
        value: 118,
        children: []
      },
      {
        label: '冲泡茶比例',
        value: 119,
        children: []
      },
      {
        label: '冲泡次数',
        value: 120,
        children: []
      },
      {
        label: '冲泡水质',
        value: 121,
        children: []
      },
      {
        label: '冲泡时间',
        value: 122,
        children: []
      },
      {
        label: '冲泡建议-内袋',
        value: 123,
        children: []
      }
    ]
  }
]

export default component_types
