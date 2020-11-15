var nm=0;
function add(event){
    event.preventDefault();
    a=document.getElementById('to');
    if(a.value!= ""){
        b=document.getElementById('list');

        p=document.createElement('li');
        p.id=''+nm;

        bt=document.createElement('button');
        bt.textContent='Remove';
        bt.id='1'+nm;
        bt.addEventListener('click',del);

        n=document.createTextNode(a.value);

        ckb=document.createElement('input');    
        ckb.type='checkbox';
        ckb.id=nm+'1';
        ckb.addEventListener('click',complete);

        p.appendChild(ckb)
        p.appendChild(n);
        p.appendChild(bt);
        b.appendChild(p);

        nm+=1;

    }else{
        alert('Input field can\'t be empty');
    }
}
function del(){
    a=document.getElementById(this.id);
    b=a.parentNode;
    b.parentNode.removeChild(b);
}
function complete(){
    a=document.getElementById(this.id);
    b=a.parentNode;

    if(a.checked==true){
        ul=document.getElementById('ctask');
        ul.appendChild(b);
    }else{
        ul=document.getElementById('list');
        ul.appendChild(b);
    }
}