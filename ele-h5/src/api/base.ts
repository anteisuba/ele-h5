import axios from 'axios'
import { showDialog } from 'vant'

const instance = axios.create({
    baseURL: '/api'
})

//响应拦截器
instance.interceptors.response.use((response) => {
    const { data: _data } = response
    const { data, code, msg } = _data
    if (code !== 0) {
        showDialog({
            message: msg || '请求失败'
        }).then(() => {
            //关闭弹窗的逻辑

        })
        return Promise.reject(msg)
    }
    return data
},
    // 添加错误处理函数
    (error) => {
        console.log('错误详情：', error)
        console.log('错误响应：', error.response)
        // 处理 HTTP 错误
        showDialog({  // 使用 showDialog
            message: error.response?.data?.msg || error.message || '请求失败'
        })
        return Promise.reject(error)
    }
)

export default instance