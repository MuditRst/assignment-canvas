
document.getElementById('phonenoDiv').style.display = 'none';


function showDiv() {
    document.getElementById('phonenoDiv').style.display = 'block';

    $(function(){
        $('#sortable').sortable();
        $( "#sortable" ).disableSelection()
    })

    document.getElementById('phonenoDiv').style.outline = 'dashed'
    document.getElementById('phonenoDiv').style.outlineColor = 'grey'
    document.getElementById('phonenoDiv').style.outlineWidth = '2px'

    document.getElementById('emailPass').style.outline = 'dashed'
    document.getElementById('emailPass').style.outlineColor = 'grey'
    document.getElementById('emailPass').style.outlineWidth = '2px'


    document.getElementById('nonDraggable').style.top = '400px'
}



