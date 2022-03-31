window.addEventListener('load', function () {
    const content = document.querySelector('#content')
    const date = document.querySelector('#date')
    const time = document.querySelector('#time')
    const add = document.querySelector('#addedButton')
    const remove = document.querySelector('#deletedButton')
    const list = document.querySelector('#list')

    const listContent = []
    function render(){
        
        let htmlStr = ''
        listContent.forEach((item) => {
            htmlStr = htmlStr + `
            <div class="item">
                <p>内容：${item.content}</p>
                <p>时间：${item.date} ${item.time}</p>
            </div>
            `
        })
        // console.log(htmlStr);
        list.innerHTML = htmlStr
        // 如何用append
    }


    add.addEventListener('click', function () {
        listContent.unshift({
            content: content.value,
            date: date.value,
            time: time.value
        })
        // console.log(listContent);
        render()

    })

    remove.addEventListener('click', function () {
        listContent.shift({
            content: content.value,
            date: date.value,
            time: time.value
        })
        render()
    })

})