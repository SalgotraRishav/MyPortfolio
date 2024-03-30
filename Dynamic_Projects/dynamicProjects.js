function updateText(selectedNav){

    var data = ['Computer Software and Database Development - Student','About me','Skills','Work Experience','Contact'];

    if(selectedNav == '1'){

        var name = "Rishav Salgotra";
        var description = "Assignment";

        document.getElementById("pData1").style.display = "block";
        document.getElementById('title').innerHTML = data[selectedNav - 1];

        document.getElementById("pData2").style.display = "none";
        document.getElementById("pData3").style.display = "none";
        document.getElementById("pData4").style.display = "none";       
        document.getElementById("pData5").style.display = "none";
        
        document.getElementById("myLink").textContent = name;

    } else if(selectedNav == '2'){
        document.getElementById("pData2").style.display = "block";
        document.getElementById('title').innerHTML = data[selectedNav - 1];

        document.getElementById("pData1").style.display = "none";
        document.getElementById("pData3").style.display = "none";
        document.getElementById("pData4").style.display = "none";
        document.getElementById("pData5").style.display = "none";
    } else if(selectedNav == '3'){
        document.getElementById('title').innerHTML = data[selectedNav - 1];
        document.getElementById("pData3").style.display = "block";

        document.getElementById("pData1").style.display = "none";
        document.getElementById("pData2").style.display = "none";
        document.getElementById("pData4").style.display = "none";
        document.getElementById("pData5").style.display = "none";
    } else if(selectedNav == '4'){
        document.getElementById('title').innerHTML = data[selectedNav - 1];
        document.getElementById("pData4").style.display = "block";

        document.getElementById("pData1").style.display = "none";
        document.getElementById("pData2").style.display = "none";
        document.getElementById("pData3").style.display = "none";
        document.getElementById("pData5").style.display = "none";
    } else if(selectedNav == '5'){
        document.getElementById('title').innerHTML = data[selectedNav - 1];
        document.getElementById("pData5").style.display = "block";

        document.getElementById("pData1").style.display = "none";
        document.getElementById("pData2").style.display = "none";
        document.getElementById("pData3").style.display = "none";
        document.getElementById("pData4").style.display = "none";
    }   
}
