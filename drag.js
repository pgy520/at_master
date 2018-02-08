function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    var tabli=$('.at_lione')
    // for(let i=0;i<tabli.length;i++)
    // {
    //     $(`.at_lione:eq(${i}) .at_listcontent`).hide()
    //     $(`.at_lione:eq(${i})`).removeClass('active')
    // }
    console.log('x',ev.clientX)
    console.log('y',ev.clientY)

    ev.dataTransfer.setData("Text", ev.target.id);
    // $('#at_mod_clone').show();

    // ev.target.style.left=ev.clientX-ev.offsetLeft+'px'
    // ev.target.style.top=ev.clientY-ev.offsetTop+'px'
}

function drop(ev) {
    ev.preventDefault();
    // var item = $(document.getElementById(ev.target.id)).clone(true).get(0);
    // document.getElementById('at_mod_clone').appendChild(item);
    // $('#at_mod_clone .at_mod').attr('draggable',false)
    var data = ev.dataTransfer.getData("Text");
    // var item = $(document.getElementById(data)).clone(true).get(0);
    // ev.target.appendChild(item);
}