/*PHẦN TẠO CÂU HỎI TRẮC NGHIỆM */
//Tạo mảng chứa câu hỏi, câu trả lời và đáp án
var myQuestions = [
    {
        question: "Ai là người đặt tên nước ta là Vạn Xuân?",
        answer: {
            A: "Lí Bạch",
            B: "Ngô Quyền",
            C: "Lý Bôn",
            D: "Lý Công Uẩn"
        },
        correctAnswer: "C"
    },
    {
        question: "Tên thật của nữ vương đầu tiên và cuối cùng của nước ta?",
        answer: {
            A: " Lý Phật Thiên",
            B: "Trưng Trắc",
            C: "Lý Phật Kim",
            D: "Trưng Nhị"
        },
        correctAnswer: "C"
    },
    {
        question: "Có bao nhiêu đời vua vào thời Lý?",
        answer: {
            A: " 1 đời vua",
            B: "12 đời vua",
            C: "9 đời vua",
            D: "8 đời vua"
        },
        correctAnswer: "C"
    },
    {
        question: "Ai là tác giả của Quốc Âm Thi Tập?",
        answer: {
            A: "Nguyễn Khuyến",
            B: "Nguyễn Trãi",
            C: "Quang Trung",
            D: "Lê Thái Tổ"
        },
        correctAnswer: "B"
    },
    {
        question: " 'Bản nguyệt thập bát nhật Liễu Thăng vị ngã quân sở công, kế trụy ư Chi Lăng chi dã' là 1 câu của bài cáo nào?",
        answer: {
            A: "Quốc Âm Thi Tập",
            B: "Bình Ngô Đại Cáo",
            C: "Binh Thư Yếu Lược",
            D: "Vạn Kiếp tông bí truyền thư"
        },
        correctAnswer: "B"
    },
    {
        question: "Đâu là 1 tên khác của Trần Quốc Tuấn?",
        answer: {
            A: "Trần Hưng Đạo",
            B: "Trần Quốc Toản",
            C: "Trần Khánh Dư",
            D: "Trần Nhật Duật"
        },
        correctAnswer: "A"
    },
    {
        question: "Ai là người đánh đuổi quân Thanh?",
        answer: {
            A: "Nguyễn Nhạc",
            B: "Nguyễn Lữ",
            C: "Nguyễn Trãi",
            D: "Nguyễn Huệ"
        },
        correctAnswer: "D"
    },
    {
        question: "Bố Cái Đại Vương là ai?",
        answer: {
            A: "Phùng Hải",
            B: "Ngô Quyền",
            C: "Phùng Hưng",
            D: "Tần Thủy Hoàng"
        },
        correctAnswer: "C"
    },
    {
        question: "Vua Đen là ai?",
        answer: {
            A: "Phùng Hưng",
            B: "Lê Uy Mục",
            C: "Lê Long Việt",
            D: "Mai Thúc Loan"
        },
        correctAnswer: "D"
    },
    {
        question: " Vị vua nào là con rối của người Pháp?",
        answer: {
            A: "Đồng Khánh",
            B: "Hàm Nghi",
            C: "Thành Thái",
            D: "Thiệu Trị"
        },
        correctAnswer: "A"
    },
    {
        question: "Tính theo năm âm lịch, Việt Nam đón Tết nào đầu tiên trong năm?",
        answer: {
            A: "Tết Táo Quân",
            B: "Tết Nguyên Tiêu",
            C: "Tết Nguyên Đán",
            D: "Tết Hàn Thực"
        },
        correctAnswer: "C"
    },
    {
        question: "Tết nào không diễn ra vào ngày rằm?",
        answer: {
            A: "Tết Nguyên Tiêu",
            B: "Tết Khai Hạ",
            C: "Tết Trung Nguyên",
            D: "Tết Trung Thu"
        },
        correctAnswer: "B"
    },
    {
        question: "Tết nào được coi là ngày vía của Phật tổ?",
        answer: {
            A: "Tết Nguyên Đán",
            B: "Tết Khai Hạ",
            C: "Tết Trung Thu",
            D: "Tết Thượng Nguyên (Tết Nguyên Tiêu)"
        },
        correctAnswer: "D"
    },
    {
        question: "Tết Hàn thực diễn ra vào ngày nào?",
        answer: {
            A: "3/3 âm lịch",
            B: "3/3 dương lịch",
            C: "13/3 âm lịch",
            D: "13/3 dương lịch"
        },
        correctAnswer: "A"
    },
    {
        question: "Người Việt thường đi tảo mộ vào Tết nào?",
        answer: {
            A: "Tết Nguyên Đán",
            B: "Tết Trung Nguyên",
            C: "Tết Thanh Minh",
            D: "Tết Đoan ngọ"
        },
        correctAnswer: "C"
    },
    {
        question: "Tết Đoan ngọ diễn ra vào ngày nào?",
        answer: {
            A: "5/5 Dương lịch",
            B: "5/5 âm lịch",
            C: "15/5 âm lịch",
            D: "15/5 dương lịch"
        },
        correctAnswer: "B"
    },
    {
        question: " Đâu không phải là tên gọi của Tết Trung nguyên ở Việt Nam?",
        answer: {
            A: "Ngày xá tội vong nhân",
            B: "Ngày báo hiếu cha mẹ",
            C: "Lễ Vu lan báo hiếu",
            D: "Tết Hạ nguyên"
        },
        correctAnswer: "D"
    },
    {
        question: "Mâm cỗ Tết Trung thu thường có con gì được làm từ tép bưởi?",
        answer: {
            A: "Chó",
            B: "Mèo",
            C: "Gà",
            D: "Rồng"
        },
        correctAnswer: "A"
    },
    {
        question: "Tết nào diễn ra vào tháng 9 âm lịch?",
        answer: {
            A: "Tết Trung thu",
            B: "Tết Trùng cửu",
            C: "Tết Trùng thập",
            D: "Tết Hạ nguyên"
        },
        correctAnswer: "B"
    },
    {
        question: "Tết Trùng thập được coi là Tết của ai?",
        answer: {
            A: "Nhà giáo",
            B: "Thương nhân",
            C: "Thầy thuốc",
            D: "Nông dân"
        },
        correctAnswer: "C"
    },
    {
        question: "Tết nào còn được gọi là Tết Cơm mới?",
        answer: {
            A: "Tết Hạ nguyên",
            B: "Tết Thượng nguyên",
            C: "Tết Trung nguyên",
            D: "Tết Đoan ngọ"
        },
        correctAnswer: "A"
    },
    {
        question: "Tết Táo quân diễn ra vào ngày nào?",
        answer: {
            A: "23/12 dương lịch",
            B: "23 tháng Chạp",
            C: "20/1 dương lịch",
            D: "25 tháng Chạp"
        },
        correctAnswer: "A"
    }
];
//Random câu hỏi
var questionArray = [];
var question_index;
var numOfQuestion = 15;
var index;
function randomQuestion(){
    for(index = 0; index < numOfQuestion; index++){
        question_index = Math.floor(Math.random() * myQuestions.length);
        questionArray.push(
            myQuestions[question_index]
        );
        myQuestions.splice(question_index, 1);
    }
}
randomQuestion();

//Function xây dựng Câu hỏi
function buildQuiz(){
    var output = [];
    questionArray.forEach(
        (currentQuestion, questionNumber) =>{
            var answer = [];
            for(letter in currentQuestion.answer){
                answer.push(
                    `<span class="option${questionNumber}${letter}" style="border-radius: 14px">
                    <input type="radio" name="question${questionNumber}" value="${letter}">

                    ${currentQuestion.answer[letter]}
                    </span><br>`
                );
            }
            output.push(
                `<ul>
                    <li>
                        <div class="question">
                            <h5>Câu ${questionNumber + 1}: ${currentQuestion.question} </h5>
                        </div>
                        <div class="answer">
                            ${answer.join('')}    
                        </div>
                    </li>
                </ul>`
            );

        }
    );
    document.getElementById('quiz').innerHTML=output.join('');

}
buildQuiz();
//Ẩn các ID
function hidenDisplay(){
    document.getElementById('startQuiz').style.display = "none";
    document.getElementById('sidebar').style.display = "none";
}
hidenDisplay();
//function xây dựng đáp án
function showResults(){
    var countTrueQuiz = 0;
    var countFalseQuiz = 0;
    var countNoneChecked = 0;
    questionArray.forEach(
        (currentQuestion, questionNumber)=>{
        var answerQuiz = document.querySelectorAll('.answer')[questionNumber];
        var userAnswer = (answerQuiz.querySelector(`input[name=question${questionNumber}]:checked`)||{}).value;
        if(userAnswer === currentQuestion.correctAnswer){
            countTrueQuiz++;
            document.getElementById('style').innerHTML +=
            `
            .option${questionNumber}${currentQuestion.correctAnswer} {
                background-color: lightgreen;
            }
            `;
        }else if(userAnswer==='A' || userAnswer==='B' || userAnswer==='C' || userAnswer==='D'){
            countFalseQuiz++;
            document.getElementById('style').innerHTML +=
            `
            .option${questionNumber}${userAnswer} {
                background-color: red;
            }
            .option${questionNumber}${currentQuestion.correctAnswer} {
                background-color: lightgreen;
            }
            `;
        }else{
            countNoneChecked++;
            document.getElementById('style').innerHTML +=
            `
            .option${questionNumber}${currentQuestion.correctAnswer} {
                background-color: lightgreen;
            }
            `;
        }
        
    });
    var pointQuiz = (10/questionArray.length)*countTrueQuiz;
    document.getElementById('showResultQuiz').innerHTML = 
    `
    <h4 style="color: #DBB370">KẾT QUẢ BÀI THI</h4>
    <img  style="margin:-7% 0 0 -3%; width: 60%;" src="images/hr-sidebar.png" alt="hr">
    <p style="color: #ccddff">Tổng số câu hỏi: <b style="color: #FDCD6A">${questionArray.length}</b></p>
    <p style="color: #ccddff">Số câu trả lời đúng: <b style="color: #FDCD6A">${countTrueQuiz}</b> </p>
    <p style="color: #ccddff">Số câu trả lời sai: <b style="color: #FDCD6A">${countFalseQuiz}</b></p>
    <p style="color: #ccddff">Số câu không trả lời: <b style="color: #FDCD6A">${countNoneChecked}</b> </p>
    <hr style="width: 50%; margin-left: -1%; border: 1px solid #FDCD6A;">
    <p style="color: #00cc66"><b>Số điểm của bạn là: </b><b style="color: #FDCD6A">${pointQuiz}</b></p>
    `;
    if(`${pointQuiz}`>=5){
        document.getElementById('showResultQuiz').innerHTML +=
        `
                <b style="color: #FDCD6A; margin: 1% 0 0 25%; position: absolute;">ĐẬU RỒI!!!</b>
                <img  style="margin:-7% 0 0 -3%; width: 30%;" src="images/AW438063_23.gif" alt="giftrue"></img>
                <object data="frames/pass.mp3" width="0" height="0" __idm_frm__="3008"> 
                      <param name="filename" value="frames/pass.mp3"> 
                      <param name="autostart" value="1"> 
                      <param name="playcount" value="false"> 
                </object>
        `;
    }else{
        document.getElementById('showResultQuiz').innerHTML +=
        `
                <b style="color: #FDCD6A; margin: 1% 0 0 25%; position: absolute;">TRƯỢT RỒI!!!</b>
                <img  style="margin:-10% 0 0 -5%; width: 30%;" src="images/4917a4eab4e42750bca9668bc3900d5c-11.gif" alt="giffalse"></img>
                <object data="frames/nonepass.mp3" width="0" height="0" __idm_frm__="3008"> 
                      <param name="filename" value="frames/nonepass.mp3"> 
                      <param name="autostart" value="1"> 
                      <param name="playcount" value="false"> 
                </object>
        `;
        
    }
   

}

/*PHẦN XÂY DỰNG CHỨC NĂNG ĐẾM THỜI GIAN*/
var hours = 0;
var minutes=3;
var seconds=0;
var t;
function startTime(){
    t = setTimeout(startTime,1000);
   seconds--;
   if(seconds == -1){
       seconds = 59;
       minutes--;
   }
   if(minutes == -1 ){
    minutes = 59;
    hours--;
    }
   if(hours == -1){
       minutes = 0;
       seconds = 0;
       clearTimeout(t);
       alert('Hết giờ');
       finish();
      
   }
   
   document.getElementById('countTime').innerHTML="<h1>"+hours+":"+minutes+":"+seconds+"</h1>";
}


/*PHẦN TÁC ĐỘNG TỪ PAGE*/
//Hoàn thành
function finish(){
    
    document.getElementById("submit").disabled = true;
    clearTimeout(t);
    alert('Nhấn "OK" để xem kết quả!!!');
    window.scrollTo(0, 0);
    showResults();
    document.getElementById('sidebar').style.display = "block";
    document.getElementById('time').style.display = "none";
}
//Bắt đầu
function start(){
    startTime();
    document.getElementById('clickBtn').style.display = "none";
    document.getElementById('startQuiz').style.display = "block";
    
}