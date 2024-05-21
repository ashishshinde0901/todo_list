let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpTask = $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')

let additem = function () {
    let listitem = $('<li>', {
        'class':'list-group-item',
        text: inpTask.val()
    })
    listitem.click(()=>{
        listitem.toggleClass('done')
    })
    ulTasks.append(listitem)
    btnenable()
}
inpTask.keypress((e)=>{
    if (e.which ===13) additem()
})

btnAdd.click(additem)

function btnenable() {

    btnReset.prop('disabled',inpTask.val()==='')
    btnAdd.prop('disabled',inpTask.val()==='')
    btnSort.prop('disabled',ulTasks.children().length<1)
    btnCleanup.prop('disabled',ulTasks.children().length<1)

}
inpTask.on('input',()=>{
    btnenable()
})


btnReset.click(()=> {
    inpTask.val(' ')
    btnenable()
    })

function Cleanup(){
    $('#ulTasks .done').remove()
    btnenable()
}

function sort(){
    $('#ulTasks .done').appendTo(ulTasks)
    btnenable()
}
btnCleanup.click(Cleanup)
btnSort.click(sort)