<script>
    function scoreGrading(x,y){
        let x= studentScore;
        let y= grade;
        x>=0 && x<=100
        y="",
        x=prompt("type student score");
        alert(y);
        if (x>79){y="A";
    } else if (x>=60 && x<=79){y="B"

    }else if (x<=59 && x>=49){
        y="C";
    } else if (x>=40 && x<=49){
        y="D";
    }else if (x<40){
        y="E";
    }
</script>
    }