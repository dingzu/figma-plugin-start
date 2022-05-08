const data = {
    loading: {
        isLoading: false,
        mask: false,
        text: '正在加载中'
    }
}

reactive(data.loading)

function reactive(target = {}) {
    if (typeof target !== 'object' || target == null) {
        return target
    }

    const proxyConfig = {
        get(target, key, receiver) {
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                // dep.subs(watcher) // 添加监听
            }
            const result = Reflect.get(target, key, receiver)
            return reactive(result) // 只在 getter 时才再次劫持
        },
        set(target, key, val, receiver) {
            if (val === target[key]) {
                return
            }

            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                // 已有值
            } else {
                // 新增值
            }

            const result = Reflect.set(target, key, val, receiver)
            // dep.noitfy() // 通知监听队列进行更新
            return result
        },
        deleteProperty(target, key) {
            const result = Reflect.deleteProperty(target, key)
            return result
        }
    }
    const observed = new Proxy(target, proxyConfig)
    return observed
}

export default data