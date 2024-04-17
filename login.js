 /* var / let / const */
 function compareVariable(){
    let num1 = 10;
    const num2 = 30;
    num2 = 40
    alert('num1 : ' + num1) // 먼저 들어간 값을 빼고 이 값을 넣는다.
    
   }

    /* ID 란에 입력된 값을 팝업창에 띄우기*/
    function popId(){
        let userId = document.getElementById('txt_id').value; 

        if(!userId){
            /* 
            값이 없다는 걸 2가지 방식으로 표현
            1. document.getElementById('txt_id').value == "” 
            2. !document.getElementById('txt_id').value
            3. userId로 변수지정해서 조져버리기
            */ 
            alert('아이디를 입력해주세요.');
        }
        else{
            alert(userId);
        }
    }
    /* 나만의 함수 만들고, 버튼 클릭하면 호출하기*/
    function myFunction(){
        alert('1');
        alert('2');
        alert('3');
    }