class Controller{
    constructor(){

    }

    publishProject(){
        let projectCont = document.getElementById("project_contents")
        console.log(projectCont)
        let homeContents = `
            <header><h3>${this.tc.projectName}</h3></header>
            <div id="project_main_cont">
                <h2>Students envolved</h2>
                <div class="participant_list">
                    <ul>` 
                        for(let i = 0; i < this.tc.allMyParticipants.length; i++){
                            homeContents += `
                                <li onclick="displayStudent(this)">${this.tc.allMyParticipants[i].fullName}</li>`
                        }
                    homeContents += `</ul>
                    <div id="student_info"></div>
                </div>
                <div id="project_main_image">
                    <img  id="project_img" src="images/${this.tc.projectImgName}" alt="image desc">
                </div>
                <div id="summary">
                    <h3>What is ${this.tc.projectName}</h3>
                    <p>${this.tc.projectSummary}</p>
                </div>`
        for (let i = 0; i < this.tc.allMyParagraphs.length; i++){
            if((i+1)%2 == 0){
                homeContents += `<div class="row_even"><img class="row_even_img" src="${this.tc.allMyParagraphs[i][1]}">`
            }else{
                homeContents += `<div class="row_odd"><img class="row_odd_img" src="${this.tc.allMyParagraphs[i][1]}">`
            }

            homeContents += `
            <p>${this.tc.allMyParagraphs[i][0]}</p>
            </div>`
        }
        homeContents += `</div>
        `
        projectCont.innerHTML = homeContents
    }

    displayStudent(student){
        let cont = document.getElementById("student_info")
        cont.innerHTML = `
            <div id="student_info_inner">
                <button onclick="closeStudent()" id="close_button">&#10006</button>
                <div class="always_flex">
                    <img src="${student == 'April McMahon' ? 'images/student2.PNG' : 'images/student1.PNG'}" alt="student image" class="student_img">
                    <div><h2>${student}</h2></div>
                </div>
                <p>some text about the student. blah blah etc flux capacitor and hobbits. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h4>Projects:</h4>
                <div id="project_list">
                    <ul>
                        <li>rfid</li>
                        <li>riverbridge</li>
                        <li>space website</li>
                    </ul>
                </div>
            </div>`
    }
}