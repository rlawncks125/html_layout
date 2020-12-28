class CountEventArry{
    constructor(...getlist){
        this.arry = [];
        this.speed = 50;
        getlist.forEach((value,index)=>{
            this.arry[index] = document.querySelector(value);
        }) 
        
    }
    setCount(...counts){
        const temp =counts.map((value) => {return value});
        const maxcount = temp.sort((a,b)=>{return b-a})[0];
        let count=0 ;
        const timimg_value = [] , result = [] ;
        // 한번에 끝나게 타이밍값 계산
        counts.forEach((value,index)=>{
            timimg_value[index] = maxcount / value;
        })

        
        const rwrw = setInterval(()=>{
            // 속도 맞춘 값 결과
            timimg_value.forEach((value,index)=>{
                result[index] = Math.floor(count / value);
            })
            // 텍스트 값 변경
            result.forEach((value,index)=>{
                this.arry[index].innerText = `${value}`;
            })

            count++;
            // max카운터 넘으면 중단.
            if(count > maxcount) clearInterval(rwrw);
        },this.speed)
    }

    setSpeed(num){
        this.speed = num;
    }

}

export  { CountEventArry };