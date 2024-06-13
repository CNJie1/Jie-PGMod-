function checkbox50Function() {
    var checkbox = document.getElementById('checkbox50');
    if (checkbox.checked) {
        // 弹出系统提示框
        alert('注意:当你使用这个功能 它会有一些问题 比如 碎片武器显示在我们武器库 当你打造它 就会返回大厅 不要打造 需要你搜索武器ID显示购买才能解决这个问题\n不要制作DLC武器皮肤!\n不要制作DLC武器皮肤!\n不要制作DLC武器皮肤!');
        
        // 执行相应的功能
        enableFeature();
    } else {
        // 当复选框未选中时，可以在这里添加其他功能或操作
        disableFeature();
    }
}

function enableFeature() {
    // 启用某个功能的代码
    console.log('功能已启用');
}

function disableFeature() {
    // 禁用某个功能的代码
    console.log('功能已禁用');
}