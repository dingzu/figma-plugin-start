import { reactive } from 'vue'

const data = {
    loading: {
        isLoading: false,
        type: 'line',
        text: '正在加载中'
    }
}

const newData = reactive(data)

export default newData