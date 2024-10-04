n1=parseFloat(prompt('Enter no.1:'))
n2=parseFloat(prompt('Enter no.2:'))
op=prompt('Enter one out of:+,-,*,/,^')
switch(op){
    case'+':
        n3=n1+n2;
        break;
    case'-':
        n3=n1-n2;
        break;
    case'*':
        n3=n1*n2;
        break;
    case'/':
        n3=n1/n2;
        break;
    case'^':
        n3=n1**n2;
}
alert(n3)
